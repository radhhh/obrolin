import * as query from "./query.js";
import * as display from './display.js';
import * as gpt from './ai.js';
import * as tts from './tts.js';
import * as stt from './stt.js';
import "../style.css";

let chatHistory = [];
let recommendationList = undefined;
let selectedRecommendation = undefined;
let chatIndex = 0;
const controller = new AbortController();
let signal = controller.signal;

const voiceInputButton = document.getElementById('voiceInputButton');
const plusButton = document.getElementById('plusButton');
const sendButton = document.getElementById('sendButton');
const cancelButton = document.getElementById('cancelButton');
const refreshButton = document.getElementById('refreshButton');
const submitButton = document.getElementById('submitButton');
const textInput = document.getElementById('textInput');

function addKeywordListener(element){
    element.addEventListener('click', (e) => {
        if(element.classList.contains('select-mode')){
            query.removeKeyword(element.id);
            element.remove();
        }
        else{
            element.classList.add('select-mode');
        }
    });
    element.addEventListener('mouseleave', (e) => {
        element.classList.remove('select-mode');
    });
}

function addKeyword(){
    if(textInput.value === ''){
        return;
    }
    const elementID = query.addKeyword(textInput.value);
    let keywordElement = query.generateSingleHTML(textInput.value, true, elementID);
    addKeywordListener(keywordElement);
    display.appendKeyword(keywordElement);
    textInput.value = '';
}

async function sendKeyword(){
    addKeyword();
    if(query.getKeyList().length == 0) return;
    const queryElementList = query.generateElementList();
    display.toggleOverlay();
    display.showPopUpRecommendation(queryElementList);
    try{
        refreshRecommendation(signal);
    }
    catch(err){
        console.log(err);
    }
}

function clearPopUp(){
    display.toggleOverlay();
    display.hidePopUpRecommendation();
}

function reset(){
    controller.abort();
    selectedRecommendation = undefined;
    recommendationList = undefined;
}

function addRecListener(elementList){
    elementList.forEach((element) => {
        element.addEventListener('click', () => {
            if(selectedRecommendation !== undefined){
                display.unselectRecommendation(selectedRecommendation);
            }
            selectedRecommendation = parseInt(element.id.replace('recommendation-', ''));
            display.selectRecommendation(selectedRecommendation);
        });
    })
    return elementList;
}

async function refreshRecommendation(signal){
    selectedRecommendation = undefined;
    recommendationList = undefined;
    let validRequest = true;
    display.clearRecommendation();
    signal.addEventListener('abort', () => {
        validRequest = false;
        console.log("aborting...");
    });
    try{
        recommendationList = await gpt.generateRecommendation(query.getKeyList());
        if(validRequest){
            let recommendationElements = display.generateRecommendationElements(recommendationList);
            recommendationElements = addRecListener(recommendationElements);
            display.appendRecommendation(recommendationElements);
        }
    }
    catch(err){
        display.appendRecommendation([]);
    }
}

function activateChatSpeak(chatIndex){
    tts.initElement(document.querySelector(`#chat-${chatIndex}`),
                document.querySelector(`#chatSpeak-${chatIndex}`),
                chatHistory[chatIndex]);
}

function askQuestion(){
    display.focusElement('main');
    clearPopUp();
    query.clear();
    display.clearKeyword();
    chatHistory.push(`${recommendationList[selectedRecommendation]}`);
    display.addUserChat(`<span>${recommendationList[selectedRecommendation]}</span>`, chatIndex);
    activateChatSpeak(chatIndex++);
    setTimeout(async () => {
        const freezeChatIndex = chatIndex++;
        chatHistory.push('loading');
        display.addGPTChat("<div class='dot-flashing blue' style='margin: auto;'></div>", freezeChatIndex);
        try{
            const gptResponse = await gpt.askQuestion(recommendationList[selectedRecommendation]);
            const finalResponse = gptResponse.split('\n')
            .filter((line) => (line !== ""))
            .map((line) => {
                const whitespaceCount = line.search(/\S|$/);
                return `<div>${'\u00a0'.repeat(whitespaceCount)+line.slice(whitespaceCount)}</div>\n`;
            })
            .join('');
            chatHistory[freezeChatIndex] = gptResponse;
            activateChatSpeak(freezeChatIndex);
            display.updateChatContent(`<span>${finalResponse}</span>`, freezeChatIndex);
        }
        catch(error){
            chatHistory[freezeChatIndex] = "Error, silakan coba lagi";
            activateChatSpeak(freezeChatIndex);
            display.updateChatContent("<span>Error :( silakan coba lagi</span>", freezeChatIndex);
        }
    }, 500);
}

stt.report.addEventListener('result', (e) => {
    textInput.value = e.detail;
})

// initializing all buttons
voiceInputButton.addEventListener('click', () => {
    if(voiceInputButton.classList.contains('recording')){
        voiceInputButton.classList.remove('recording');
        stt.stop();
    }  
    else{
        voiceInputButton.classList.add('recording');
        if(textInput.value !== '') addKeyword();
        stt.start();
    }
});

plusButton.addEventListener('click', addKeyword);

sendButton.addEventListener('click', sendKeyword);

cancelButton.addEventListener('click', () => {clearPopUp(); reset()});

refreshButton.addEventListener('click', () => refreshRecommendation(signal));

submitButton.addEventListener('click', () => {
    if(recommendationList === undefined || !display.state.popUp) return;
    askQuestion();
});

textInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        if(textInput.value === ''){
            sendKeyword();
        }
        else{
            addKeyword();
        }
    }
});