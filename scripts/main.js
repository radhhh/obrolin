import * as query from "./query.js";
import * as display from './display.js';
import * as gpt from './ai.js';

function addKeyword(){
    const textInput = document.getElementById('textInput');
    if(textInput.value === ''){
        return;
    }
    query.addKeyList(textInput.value);
    display.appendKeyword(textInput.value);
    textInput.value = '';
}

async function sendKeyword(){
    addKeyword();
    display.toggleOverlay();
    display.showPopUpRecommendation(query.getKeyList());
    if(gpt.getQuestion() === undefined) {
        display.showRecommendation(await gpt.ask(query.getKeyList()));
    }
    else{
        display.showRecommendation(gpt.getQuestion());
    }
}

function clearPopUp(){
    display.toggleOverlay();
    display.hidePopUpRecommendation();
}

async function refreshQuestion(){
    console.log("refreshing question");
    display.clearRecommendation();
    display.showRecommendation(await gpt.refreshQuestion());
}

document.getElementById('plusButton').addEventListener('click', addKeyword);

document.getElementById('sendButton').addEventListener('click', sendKeyword);

document.getElementById('cancelButton').addEventListener('click', clearPopUp);

document.getElementById('refreshButton').addEventListener('click', refreshQuestion);