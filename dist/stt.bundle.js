(()=>{"use strict";let e,n=!0,o=!1,t="",i="";try{if(!("speechRecognition"in window)&&!("webkitSpeechRecognition"in window))throw"not supported";window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,e=new SpeechRecognition,e.interimResults=!0,e.continuous=!1,e.lang="id"}catch(e){alert("Fitur voice recognition tidak dapat berjalan di browser ini, silakan gunakan Google Chrome"),n=!1}const c=new EventTarget;n&&(e.addEventListener("result",(e=>{i=Array.from(e.results).map((e=>e[0].transcript)).join("").toLocaleLowerCase(),console.log("result",t),console.log(i),c.dispatchEvent(new CustomEvent("result",{detail:t+" "+i}))})),e.addEventListener("end",(n=>{o&&(console.log("end",t),console.log(i),t=t+" "+i,i="",o=!0,e.start())})))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoibUJBQUEsSUFJSUEsRUFKQUMsR0FBa0IsRUFDbEJDLEdBQWEsRUFDYkMsRUFBZSxHQUNmQyxFQUFjLEdBR2xCLElBQ0ksS0FBSyxzQkFBdUJDLFdBQVUsNEJBQTZCQSxRQUFTLEtBQU0sZ0JBQ2xGQSxPQUFPQyxrQkFBb0JELE9BQU9DLG1CQUFxQkQsT0FBT0Usd0JBQzlEUCxFQUFjLElBQUlNLGtCQUNsQk4sRUFBWVEsZ0JBQWlCLEVBQzdCUixFQUFZUyxZQUFhLEVBQ3pCVCxFQUFZVSxLQUFPLElBQ3ZCLENBQ0EsTUFBTUMsR0FDRkMsTUFBTSw4RkFDTlgsR0FBa0IsQ0FDdEIsQ0FFTyxNQUFNWSxFQUFTLElBQUlDLFlBQ3ZCYixJQUNDRCxFQUFZZSxpQkFBaUIsVUFBV0osSUFDcENQLEVBQWNZLE1BQU1DLEtBQUtOLEVBQUVPLFNBQ05DLEtBQUlDLEdBQU9BLEVBQUksR0FBR0MsYUFDbEJDLEtBQUssSUFDTEMsb0JBQ3JCQyxRQUFRQyxJQUFJLFNBQVV0QixHQUN0QnFCLFFBQVFDLElBQUlyQixHQUNaUyxFQUFPYSxjQUFjLElBQUlDLFlBQVksU0FBVSxDQUFFQyxPQUFRekIsRUFBZSxJQUFNQyxJQUFlLElBRWpHSixFQUFZZSxpQkFBaUIsT0FBUUosSUFDOUJULElBQ0NzQixRQUFRQyxJQUFJLE1BQU90QixHQUNuQnFCLFFBQVFDLElBQUlyQixHQUNaRCxFQUFlQSxFQUFlLElBQU1DLEVBQ3BDQSxFQUFjLEdBT3RCRixHQUFhLEVBQ2JGLEVBQVk2QixRQU5SLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvc3R0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzcGVlY2hTdXBwb3J0ZWQgPSB0cnVlO1xubGV0IGlzU3BlYWtpbmcgPSBmYWxzZTtcbmxldCBwcmV2aW91c1RleHQgPSBcIlwiO1xubGV0IGN1cnJlbnRUZXh0ID0gXCJcIjtcbmxldCByZWNvZ25pdGlvbjtcblxudHJ5e1xuICAgIGlmKCEoJ3NwZWVjaFJlY29nbml0aW9uJyBpbiB3aW5kb3cgfHwgJ3dlYmtpdFNwZWVjaFJlY29nbml0aW9uJyBpbiB3aW5kb3cpKSB0aHJvdyBcIm5vdCBzdXBwb3J0ZWRcIjtcbiAgICB3aW5kb3cuU3BlZWNoUmVjb2duaXRpb24gPSB3aW5kb3cuU3BlZWNoUmVjb2duaXRpb24gfHwgd2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uO1xuICAgIHJlY29nbml0aW9uID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgcmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSB0cnVlO1xuICAgIHJlY29nbml0aW9uLmNvbnRpbnVvdXMgPSBmYWxzZTtcbiAgICByZWNvZ25pdGlvbi5sYW5nID0gXCJpZFwiO1xufVxuY2F0Y2goZSl7XG4gICAgYWxlcnQoXCJGaXR1ciB2b2ljZSByZWNvZ25pdGlvbiB0aWRhayBkYXBhdCBiZXJqYWxhbiBkaSBicm93c2VyIGluaSwgc2lsYWthbiBndW5ha2FuIEdvb2dsZSBDaHJvbWVcIik7XG4gICAgc3BlZWNoU3VwcG9ydGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCByZXBvcnQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbmlmKHNwZWVjaFN1cHBvcnRlZCl7ICAgXG4gICAgcmVjb2duaXRpb24uYWRkRXZlbnRMaXN0ZW5lcigncmVzdWx0JywgKGUpID0+IHtcbiAgICAgICAgY3VycmVudFRleHQgPSBBcnJheS5mcm9tKGUucmVzdWx0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHZhbCA9PiB2YWxbMF0udHJhbnNjcmlwdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcHJldmlvdXNUZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRleHQpO1xuICAgICAgICByZXBvcnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJyZXN1bHRcIiwgeyBkZXRhaWw6IHByZXZpb3VzVGV4dCArIFwiIFwiICsgY3VycmVudFRleHQgfSkpO1xuICAgIH0pO1xuICAgIHJlY29nbml0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZCcsIChlKSA9PiB7XG4gICAgICAgIGlmKGlzU3BlYWtpbmcpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmRcIiwgcHJldmlvdXNUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUZXh0KTtcbiAgICAgICAgICAgIHByZXZpb3VzVGV4dCA9IHByZXZpb3VzVGV4dCArIFwiIFwiICsgY3VycmVudFRleHQ7XG4gICAgICAgICAgICBjdXJyZW50VGV4dCA9IFwiXCI7XG4gICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCl7XG4gICAgaXNTcGVha2luZyA9IHRydWU7XG4gICAgcmVjb2duaXRpb24uc3RhcnQoKTtcbn1cbiAgICBcbmV4cG9ydCBmdW5jdGlvbiBzdG9wKCl7XG4gICAgaXNTcGVha2luZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRUZXh0ID0gXCJcIjtcbiAgICBwcmV2aW91c1RleHQgPSBcIlwiO1xuICAgIHJlY29nbml0aW9uLnN0b3AoKTtcbn1cbiJdLCJuYW1lcyI6WyJyZWNvZ25pdGlvbiIsInNwZWVjaFN1cHBvcnRlZCIsImlzU3BlYWtpbmciLCJwcmV2aW91c1RleHQiLCJjdXJyZW50VGV4dCIsIndpbmRvdyIsIlNwZWVjaFJlY29nbml0aW9uIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJpbnRlcmltUmVzdWx0cyIsImNvbnRpbnVvdXMiLCJsYW5nIiwiZSIsImFsZXJ0IiwicmVwb3J0IiwiRXZlbnRUYXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJmcm9tIiwicmVzdWx0cyIsIm1hcCIsInZhbCIsInRyYW5zY3JpcHQiLCJqb2luIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9