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
    element.addEventListener('click', (e) => {
        const target = e.currentTarget;
        if(target.classList.contains('select-mode')){
            const targetID = e.currentTarget.id.replace('keyword-', '');
            query.removeKeyword(targetID);
            target.remove();
        }
        else{
            target.classList.add('select-mode');
        }
    });
    element.addEventListener('mouseleave', (e) => {
        e.currentTarget.classList.remove('select-mode');
    });
    return element;
}

function addKeyword(){
    const textInput = document.getElementById('textInput');
    if(textInput.value === ''){
        return;
    }
    const elementID = query.addKeyword(textInput.value);
    let keywordElement = query.generateSingleHTML(textInput.value, true, elementID);
    keywordElement = addKeywordListener(keywordElement);
    display.appendKeyword(keywordElement);
    textInput.value = '';
}

async function sendKeyword(){
    addKeyword();
    console.log(query.getKeyList());
    if(query.getKeyList().length == 0) return;
    const queryElementList = query.generateElementList();
    display.toggleOverlay();
    display.showPopUpRecommendation(queryElementList);
    refreshRecommendation();
}

function clearPopUp(){
    selectedRecommendation = undefined;
    display.toggleOverlay();
    display.hidePopUpRecommendation();

}

async function refreshRecommendation(){
    selectedRecommendation = undefined;
    display.clearRecommendation();
    const recommendationList = await gpt.generateRecommendation(query.getKeyList());
    let recommendationElements = display.generateRecommendationElements(recommendationList);
    recommendationElements = addRecListener(recommendationElements);
    display.appendRecommendation(recommendationElements);
}

document.getElementById('plusButton').addEventListener('click', addKeyword);

document.getElementById('sendButton').addEventListener('click', sendKeyword);

document.getElementById('cancelButton').addEventListener('click', clearPopUp);

document.getElementById('refreshButton').addEventListener('click', refreshRecommendation);

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