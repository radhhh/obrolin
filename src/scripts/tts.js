const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();
let selectedVoice = synth.getVoices().filter((list) => list.lang == "id")[0];
let isPlaying = false;

synth.addEventListener('voiceschanged', () => {
    selectedVoice = synth.getVoices().filter((list) => list.lang == "id")[0];
})

utterance.addEventListener('end', () => {
    isPlaying = false;
});

export function startSpeak(text){
    utterance.text = text;
    utterance.voice = selectedVoice;
    utterance.lang = "id";
    isPlaying = true;
    synth.speak(utterance);
}

export function stopSpeak(){
    synth.resume();
    synth.cancel();
}
