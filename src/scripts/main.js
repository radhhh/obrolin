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

function addKeywordListener(element, keywordIndex){
    element.addEventListener('click', (e) => {
        if(element.classList.contains('select-mode')){
            query.removeKeyword(keywordIndex.toString());
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
    const keywordIndex = query.addKeyword(textInput.value);
    let keywordElement = query.generateSingleHTML(textInput.value, true, keywordIndex);
    addKeywordListener(keywordElement, keywordIndex);
    display.appendKeyword(keywordElement);
    textInput.value = '';
}

async function sendKeyword(){
    addKeyword();
    if(query.getKeyList().length == 0) return;
    const queryElementList = query.generateElementList();
    textInput.blur();
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

function addRecListener(elementList, recommendationList){
    elementList.forEach((element, index) => {
        element.addEventListener('click', (e) => {
            if(!(e.target.classList.contains('recommendation') || 
            e.target.classList.contains('content'))) return;
            if(selectedRecommendation !== undefined){
                display.unselectRecommendation(selectedRecommendation);
            }
            selectedRecommendation = index;
            display.selectRecommendation(selectedRecommendation);
        });
        tts.initElement(element, element.querySelector('.recommendation-speak'), recommendationList[index]);
    })
    return elementList;
}

async function refreshRecommendation(signal){
    selectedRecommendation = undefined;
    recommendationList = undefined;
    let abortStatus = false;
    display.clearRecommendation();
    signal.addEventListener('abort', () => {
        abortStatus = true;
        console.log("aborting...");
    });
    try{
        recommendationList = await gpt.generateRecommendation(query.getKeyList());
        if(abortStatus) throw "Aborted Request";
        let recommendationElements = display.generateRecommendationElements(recommendationList);
        recommendationElements = addRecListener(recommendationElements, recommendationList);
        display.appendRecommendation(recommendationElements);
    }
    catch(err){
        if(err != "Aborted Request") display.appendRecommendation([]);
    }
}

function activateChatSpeak(chatIndex){
    tts.initElement(document.querySelector(`#chat-${chatIndex}`),
                document.querySelector(`#chatSpeak-${chatIndex}`),
                chatHistory[chatIndex]);
}

function askQuestion(){
    textInput.focus();
    clearPopUp();
    query.clear();
    display.clearKeyword();
    chatHistory.push(`${recommendationList[selectedRecommendation]}`);
    display.addUserChat(`${recommendationList[selectedRecommendation]}`, chatIndex);
    activateChatSpeak(chatIndex++);
    setTimeout(async () => {
        const freezeChatIndex = chatIndex++;
        chatHistory.push('loading');
        display.addGPTChat("<div class='dot-flashing blue' style='margin: auto;'></div>", freezeChatIndex);
        try{
            const gptResponse = await gpt.askQuestion(recommendationList[selectedRecommendation]);
            const finalResponse = gptResponse.split('\n')
            .filter(line => (line !== ""))
            .join(' ');
            chatHistory[freezeChatIndex] = finalResponse;
            activateChatSpeak(freezeChatIndex);
            display.updateChatContent(`${finalResponse}`, freezeChatIndex);
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
        voiceInputButton.blur();
        textInput.focus();
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
    if(recommendationList === undefined || !display.getState('popUpOpen')) return;
    askQuestion();
    submitButton.blur();
});

window.addEventListener('keydown', (e) => {
    if(display.getState('popUpOpen')){
        switch(e.key){
            case 'Escape':
                cancelButton.dispatchEvent(new Event('click'));
        }
    }
    if(display.getState('popUpLoaded')){
        switch(e.key){
            case 'ArrowUp':
                e.preventDefault();
                document.getElementById(`recommendation-${selectedRecommendation !== undefined ? (selectedRecommendation + 4) % 5 : 0}`)
                    .dispatchEvent(new Event('click'));
                break;
            case 'ArrowDown':
                e.preventDefault();
                document.getElementById(`recommendation-${selectedRecommendation !== undefined ? (selectedRecommendation + 1) % 5 : 0}`)
                    .dispatchEvent(new Event('click'));
                break;
            case 'Enter':
                e.preventDefault();
                submitButton.dispatchEvent(new Event('click'));
                break;
            case 'r':
                e.preventDefault();
                refreshButton.dispatchEvent(new Event('click'));
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
                e.preventDefault();
                document.getElementById(`recommendation-${parseInt(e.key) - 1}`).dispatchEvent(new Event('click'));
                break;
        }
    }
    else{
        switch(e.key){
            case 'Enter':
                e.preventDefault();
                if(textInput.value === ''){
                    sendKeyword();
                }
                else{
                    addKeyword();
                }
                break;
        }
    }
});