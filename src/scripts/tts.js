const synth = window.speechSynthesis;
window.utterance = new SpeechSynthesisUtterance();
let selectedVoice = synth.getVoices().filter((list) => list.lang == "id")[0];
let isPlaying = false;
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
    console.log(e);
});

utterance.addEventListener('end', () => {
    isPlaying = false;
    currentPlayingElement.classList.remove('playing');
    currentPlayingElement = undefined;
});


function startSpeak(text){
    utterance.text = text;
    utterance.voice = selectedVoice;
    utterance.lang = "id";
    isPlaying = true;
    currentPlayingElement.classList.add('playing');
    synth.speak(utterance);
}

function stopSpeak(){
    if(!isPlaying) return;
    synth.resume();
    synth.cancel();
}