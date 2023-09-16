window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
recognition.lang = "id";

export const report = new EventTarget();

recognition.addEventListener('result', (e) => {
    let transcript = Array.from(e.results)
                            .map(val => val[0].transcript)
                            .join('')
                            .toLocaleLowerCase();
    report.dispatchEvent(new CustomEvent("result", { detail: transcript }));
});

export function start(){
    recognition.start();
}

export function stop(){
    recognition.stop()
}