let speechSupported = true;
let isSpeaking = false;
let previousText = "";
let currentText = "";
let recognition;

try{
    if(!('speechRecognition' in window || 'webkitSpeechRecognition' in window)) throw "not supported";
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.lang = "id";
}
catch(e){
    alert("Fitur voice recognition tidak dapat berjalan di browser ini, silakan gunakan Google Chrome");
    speechSupported = false;
}

export const report = new EventTarget();
if(speechSupported){   
    recognition.addEventListener('result', (e) => {
        currentText = Array.from(e.results)
                            .map(val => val[0].transcript)
                            .join('')
                            .toLocaleLowerCase();
        console.log("result", previousText);
        console.log(currentText);
        report.dispatchEvent(new CustomEvent("result", { detail: previousText + " " + currentText }));
    });
    recognition.addEventListener('end', (e) => {
        if(isSpeaking){
            console.log("end", previousText);
            console.log(currentText);
            previousText = previousText + " " + currentText;
            currentText = "";
            start();
        }
    })
}

export function start(){
    isSpeaking = true;
    recognition.start();
}
    
export function stop(){
    isSpeaking = false;
    currentText = "";
    previousText = "";
    recognition.stop();
}
