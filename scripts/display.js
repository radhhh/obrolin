export function clearRecommendation(){
    const questionContainer = document.getElementById('recommendationQuestionContainer');
    while(questionContainer.firstChild) questionContainer.removeChild(questionContainer.firstChild);
}

function clearKeyword(){
    const keywordContainer = document.getElementById('recommendationKeywordContainer');
    while(keywordContainer.firstChild) keywordContainer.removeChild(keywordContainer.firstChild);
}

export function appendKeyword(keyword){
    // console.log(keyword);
    const keywordContainer = document.getElementById('keywordContainer');
    const newKeyword = document.createElement('div');
    newKeyword.classList.add('keyword');
    newKeyword.innerHTML = keyword;
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

export function showRecommendation(recommendationList){
    const questionContainer = document.getElementById('recommendationQuestionContainer');
    recommendationList.forEach((question) => {
        const newQuestion = document.createElement('div');
        newQuestion.classList.add('questionChoice');
        newQuestion.innerHTML = question;
        questionContainer.appendChild(newQuestion);
    });
}


export function hidePopUpRecommendation(){
    document.getElementById('recommendationPopUp').classList.add('hidden');
    clearRecommendation();
    clearKeyword();
}