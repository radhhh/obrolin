import * as query from "./query.js";
import * as display from './display.js';
import * as gpt from './ai.js';
import "../style.css";

let selectedRecommendation = undefined;

function addRecListener(elementList){
    elementList.forEach((element) => {
        element.addEventListener('click', () => {
            if(selectedRecommendation !== undefined){
                display.unselectRecommendation(selectedRecommendation);
            }
            selectedRecommendation = parseInt(element.id.split("-")[1]);
            display.selectRecommendation(selectedRecommendation);
        });
    })
    return elementList;
}

function addKeywordListener(element){
    element.addEventListener('mouseenter', () => {
        // todo listener for keyword elements
    })
    return element;
}

function addKeyword(){
    const textInput = document.getElementById('textInput');
    if(textInput.value === ''){
        return;
    }
    query.addKeyList(textInput.value);
    let keywordElement = display.generateKeywordElement(textInput.value);
    keywordElement = addKeywordListener(keywordElement);
    display.appendKeyword(keywordElement);
    textInput.value = '';
}

async function sendKeyword(){
    addKeyword();
    display.toggleOverlay();
    display.showPopUpRecommendation(query.getKeyList());
    let recommendationElements;
    if(gpt.getQuestion() === undefined) {
        recommendationElements = display.generateRecommendationElements(await gpt.generateQuestion(query.getKeyList()));
    }
    else{
        recommendationElements = display.generateRecommendationElements(gpt.getQuestion());
    }
    recommendationElements = addRecListener(recommendationElements);
    display.showRecommendation(recommendationElements);
}

function clearPopUp(){
    selectedRecommendation = undefined;
    display.toggleOverlay();
    display.hidePopUpRecommendation();
}

async function refreshQuestion(){
    selectedRecommendation = undefined;
    console.log("refreshing question");
    display.clearRecommendation();
    recommendationElements = display.generateRecommendationElements(await gpt.refreshQuestion());
    recommendationElements = addRecListener(recommendationElements);
    display.showRecommendation(recommendationElements);
}

document.getElementById('plusButton').addEventListener('click', addKeyword);

document.getElementById('sendButton').addEventListener('click', sendKeyword);

document.getElementById('cancelButton').addEventListener('click', clearPopUp);

document.getElementById('refreshButton').addEventListener('click', refreshQuestion);

document.getElementById('textInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        if(e.ctrlKey){
            sendKeyword();
        }
        else{
            addKeyword();
        }
    }
})