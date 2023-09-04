export function clearRecommendation(){
    const questionContainer = document.getElementById('recommendationQuestionContainer');
    while(questionContainer.firstChild) questionContainer.removeChild(questionContainer.firstChild);
}

function clearKeyword(){
    const keywordContainer = document.getElementById('recommendationKeywordContainer');
    while(keywordContainer.firstChild) keywordContainer.removeChild(keywordContainer.firstChild);
}

export function appendKeyword(newKeyword){
    // console.log(keyword);
    const keywordContainer = document.getElementById('keywordContainer');
    keywordContainer.appendChild(newKeyword);
}

export function toggleOverlay(){
    document.getElementById('darkOverlay').classList.toggle('hidden');
}

export function showPopUpRecommendation(keywordList){
    document.getElementById('recommendationPopUp').classList.remove('hidden');
    const keywordContainer = document.getElementById('recommendationKeywordContainer');
    keywordList.forEach((keyword) => {
        const newKeyword = document.createElement('div');
        newKeyword.classList.add('keyword');
        newKeyword.innerHTML = keyword;
        keywordContainer.appendChild(newKeyword);
    });
}

export function showRecommendation(elementList){
    const questionContainer = document.getElementById('recommendationQuestionContainer');
    elementList.forEach((element) => {
        questionContainer.appendChild(element);
    });
}

export function generateRecommendationElements(recommendationList){
    let elementList = [];
    recommendationList.forEach((question, index) => {
        const newQuestion = document.createElement('div');
        newQuestion.classList.add('recommendation');
        newQuestion.id = `r-${index}`;
        newQuestion.innerHTML = question;
        elementList.push(newQuestion);
    });
    return elementList;
}

export function selectRecommendation(index){
    const target = document.getElementById(`r-${index}`);
    target.classList.add('selected');
}

export function unselectRecommendation(index){
    const target = document.getElementById(`r-${index}`);
    target.classList.remove('selected');
}


export function hidePopUpRecommendation(){
    document.getElementById('recommendationPopUp').classList.add('hidden');
    clearRecommendation();
    clearKeyword();
}