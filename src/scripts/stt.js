let speechSupported = true;
let recognition;

try{
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.lang = "id";
}
catch(e){
    alert("Fitur voice recognition tidak dapat berjalan di browser ini, silakan gunakan Google Chrome");
    speechSupported = false;
}

export const report = new EventTarget();
if(speechSupported){   
    recognition.addEventListener('result', (e) => {
        let transcript = Array.from(e.results)
                                .map(val => val[0].transcript)
                                .join('')
                                .toLocaleLowerCase();
        report.dispatchEvent(new CustomEvent("result", { detail: transcript }));
    });
}

export function start(){
    recognition.start();
}
    
export function stop(){
    recognition.stop()
}
