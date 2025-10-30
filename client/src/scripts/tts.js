const synth = window.speechSynthesis;
window.utterance = new SpeechSynthesisUtterance();
let selectedVoice = synth.getVoices().filter((list) => list.lang == "id")[0];
let isPlaying = false;
let textLength, currentWord;
let boundaryList;
let currentPlayingElement = undefined;

synth.addEventListener('voiceschanged', () => {
    selectedVoice = synth.getVoices().filter((list) => list.lang == "id")[0];
})

export function initElement(element, button, text){
    button.addEventListener('click', () => {
        if(element.classList.contains('playing')){
            stopSpeak();
        }
        else{
            stopSpeak();
            setTimeout(() => {
                currentPlayingElement = element;
                startSpeak(text);
            }, 200);
        }
    });
}

utterance.addEventListener('boundary', (e) => {
    while(currentWord < textLength-1 && boundaryList[currentWord] < e.charIndex){
        resetHighlightWord(currentPlayingElement, currentWord);
        highlightWord(currentPlayingElement, ++currentWord);
    }
});

utterance.addEventListener('end', (e) => {
    stopSpeak();
});

function highlightWord(targetElement, index){
    targetElement.querySelector(`.word-${index}`).classList.add('highlight');
}

function resetHighlightWord(targetElement, index){
    targetElement.querySelector(`.word-${index}`).classList.remove('highlight');
}


function startSpeak(text){
    utterance.text = text;
    utterance.voice = selectedVoice;
    utterance.lang = "id";
    textLength = text.split(" ").length;
    boundaryList = [];
    for(let i = 0; i < text.length; i++){
        if(text.charAt(i) == " ") boundaryList.push(i);
    }
    isPlaying = true;
    currentPlayingElement.classList.add('playing');
    currentWord = 0;
    highlightWord(currentPlayingElement, currentWord);
    synth.speak(utterance);
}

function stopSpeak(){
    if(!isPlaying || currentPlayingElement === undefined) return;
    resetHighlightWord(currentPlayingElement, currentWord);
    synth.resume();
    synth.cancel();
    isPlaying = false;
    currentPlayingElement.classList.remove('playing');
    currentPlayingElement = undefined;
    currentWord = 0;
    boundaryList = [];
}