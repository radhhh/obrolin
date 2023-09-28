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
const signal = controller.signal;

const voiceInputButton = document.getElementById('voiceInputButton');
const plusButton = document.getElementById('plusButton');
const sendButton = document.getElementById('sendButton');
const cancelButton = document.getElementById('cancelButton');
const refreshButton = document.getElementById('refreshButton');
const submitButton = document.getElementById('submitButton');
const textInput = document.getElementById('textInput');
const informationShowButton = document.getElementById('informationShowButton');
const informationCloseButton = document.getElementById('informationCloseButton');
const textInputContainer = document.getElementById('textInputContainer');

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
    if(display.getState('popUpOpen') || display.getState('informationOpen')) return;
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
            if(e.target.nodeName.toLowerCase() == "button" ||
            e.target.nodeName.toLowerCase() == "svg" || 
            e.target.nodeName.toLowerCase() == "path") return;
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
    display.addUserChat(`${recommendationList[selectedRecommendation].split(" ").map((word, index) => `<span class="word-${index}">${word}</span>`).join(" ")}`, chatIndex);
    activateChatSpeak(chatIndex++);
    setTimeout(async () => {
        const freezeChatIndex = chatIndex++;
        chatHistory.push('loading');
        display.addGPTChat("<div class='dot-flashing blue' style='margin: auto;'></div>", freezeChatIndex);
        try{
            const gptResponse = await gpt.askQuestion(recommendationList[selectedRecommendation]);
            const finalResponse = gptResponse.trim().replace(/\s+/g, ' ');
            const htmlResponse = finalResponse.split(" ").map((word, index) => `<span class="word-${index}">${word}</span>`).join(" ");
            chatHistory[freezeChatIndex] = finalResponse;
            activateChatSpeak(freezeChatIndex);
            display.updateChatContent(`${htmlResponse}`, freezeChatIndex);
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

function clickButton(targetElement){
    targetElement.dispatchEvent(new Event('click'));
}

informationCloseButton.addEventListener('click', () => {
    display.hideInformationPopUp();
    display.toggleOverlay();
})

informationShowButton.addEventListener('click', () => {
    if(display.getState("popUpOpen")) return;
    display.showInformationPopUp();
    display.toggleOverlay();
})

voiceInputButton.addEventListener('click', () => {
    if(voiceInputButton.classList.contains('recording')){
        try{
            stt.stop();
            voiceInputButton.classList.remove('recording');
            voiceInputButton.blur();
            textInput.focus();
        }
        catch{}
    }
    else{
        try{
            stt.start();
            voiceInputButton.classList.add('recording');
            if(textInput.value !== '') addKeyword();
        }
        catch{}
    }
});

textInputContainer.addEventListener('click', (e) => {
    if(e.target === textInputContainer) textInput.focus();
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
    if(display.getState('informationOpen')){
        switch(e.key){
            case 'Escape':
                clickButton(informationCloseButton);
                break;
        }
    }
    if(display.getState('popUpOpen')){
        switch(e.key){
            case 'Escape':
                clickButton(cancelButton);
                break;
        }
    }
    if(display.getState('popUpLoaded')){
        switch(e.key){
            case 'ArrowUp':
                e.preventDefault();
                clickButton(document.getElementById(`recommendation-${selectedRecommendation !== undefined ? (selectedRecommendation + 4) % 5 : 0}`));
                break;
            case 'ArrowDown':
                e.preventDefault();
                clickButton(document.getElementById(`recommendation-${selectedRecommendation !== undefined ? (selectedRecommendation + 1) % 5 : 0}`));
                break;
            case 'Enter':
                e.preventDefault();
                clickButton(submitButton);
                break;
            case 'r':
                e.preventDefault();
                clickButton(refreshButton);
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
                e.preventDefault();
                clickButton(document.getElementById(`recommendation-${parseInt(e.key) - 1}`));
                break;
        }
    }
    else{
        switch(e.key){
            case 'Enter':
                e.preventDefault();
                if(voiceInputButton.classList.contains('recording')) clickButton(voiceInputButton);
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