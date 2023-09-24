(()=>{"use strict";const e=window.speechSynthesis;window.utterance=new SpeechSynthesisUtterance;let t,i,n,s=e.getVoices().filter((e=>"id"==e.lang))[0],r=!1;function c(e,t){e.querySelector(`.word-${t}`).classList.remove("highlight")}e.addEventListener("voiceschanged",(()=>{s=e.getVoices().filter((e=>"id"==e.lang))[0]})),utterance.addEventListener("boundary",(e=>{for(;t<NaN&&i[t]<e.charIndex;)c(n,t),s=++t,n.querySelector(`.word-${s}`).classList.add("highlight");var s})),utterance.addEventListener("end",(()=>{r&&void 0!==n&&(c(n,t),e.resume(),e.cancel(),r=!1,n.classList.remove("playing"),n=void 0,t=0,i=[])}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBUUMsT0FBT0MsZ0JBQ3JCRCxPQUFPRSxVQUFZLElBQUlDLHlCQUN2QixJQUVnQkMsRUFDWkMsRUFDQUMsRUFKQUMsRUFBZ0JSLEVBQU1TLFlBQVlDLFFBQVFDLEdBQXNCLE1BQWJBLEVBQUtDLE9BQWMsR0FDdEVDLEdBQVksRUF1Q2hCLFNBQVNDLEVBQW1CQyxFQUFlQyxHQUN2Q0QsRUFBY0UsY0FBYyxTQUFTRCxLQUFTRSxVQUFVQyxPQUFPLFlBQ25FLENBcENBbkIsRUFBTW9CLGlCQUFpQixpQkFBaUIsS0FDcENaLEVBQWdCUixFQUFNUyxZQUFZQyxRQUFRQyxHQUFzQixNQUFiQSxFQUFLQyxPQUFjLEVBQUUsSUFrQjVFVCxVQUFVaUIsaUJBQWlCLFlBQWFDLElBQ3BDLEtBQU1oQixFQUFjaUIsS0FBZ0JoQixFQUFhRCxHQUFlZ0IsRUFBRUUsV0FDOURULEVBQW1CUCxFQUF1QkYsR0FTWlcsSUFSU1gsRUFBekJFLEVBU0pVLGNBQWMsU0FBU0QsS0FBU0UsVUFBVU0sSUFBSSxhQURoRSxJQUFzQ1IsQ0FQbEMsSUFHSmIsVUFBVWlCLGlCQUFpQixPQUFPLEtBOEIxQlAsUUFBdUNZLElBQTFCbEIsSUFDakJPLEVBQW1CUCxFQUF1QkYsR0FDMUNMLEVBQU0wQixTQUNOMUIsRUFBTTJCLFNBQ05kLEdBQVksRUFDWk4sRUFBc0JXLFVBQVVDLE9BQU8sV0FDdkNaLE9BQXdCa0IsRUFDeEJwQixFQUFjLEVBQ2RDLEVBQWUsR0FyQ0osRyIsInNvdXJjZXMiOlsid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy90dHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3ludGggPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzO1xud2luZG93LnV0dGVyYW5jZSA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UoKTtcbmxldCBzZWxlY3RlZFZvaWNlID0gc3ludGguZ2V0Vm9pY2VzKCkuZmlsdGVyKChsaXN0KSA9PiBsaXN0LmxhbmcgPT0gXCJpZFwiKVswXTtcbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcbmxldCB0ZXh0TGVuZ3RoLCBjdXJyZW50V29yZDtcbmxldCBib3VuZGFyeUxpc3Q7XG5sZXQgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG5zeW50aC5hZGRFdmVudExpc3RlbmVyKCd2b2ljZXNjaGFuZ2VkJywgKCkgPT4ge1xuICAgIHNlbGVjdGVkVm9pY2UgPSBzeW50aC5nZXRWb2ljZXMoKS5maWx0ZXIoKGxpc3QpID0+IGxpc3QubGFuZyA9PSBcImlkXCIpWzBdO1xufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFbGVtZW50KGVsZW1lbnQsIGJ1dHRvbiwgdGV4dCl7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGxheWluZycpKXtcbiAgICAgICAgICAgIHN0b3BTcGVhaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdG9wU3BlYWsoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgc3RhcnRTcGVhayh0ZXh0KTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudXR0ZXJhbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2JvdW5kYXJ5JywgKGUpID0+IHtcbiAgICB3aGlsZShjdXJyZW50V29yZCA8IHRleHRMZW5ndGgtMSAmJiBib3VuZGFyeUxpc3RbY3VycmVudFdvcmRdIDwgZS5jaGFySW5kZXgpe1xuICAgICAgICByZXNldEhpZ2hsaWdodFdvcmQoY3VycmVudFBsYXlpbmdFbGVtZW50LCBjdXJyZW50V29yZCk7XG4gICAgICAgIGhpZ2hsaWdodFdvcmQoY3VycmVudFBsYXlpbmdFbGVtZW50LCArK2N1cnJlbnRXb3JkKTtcbiAgICB9XG59KTtcblxudXR0ZXJhbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZCcsICgpID0+IHtcbiAgICBzdG9wU3BlYWsoKTtcbn0pO1xuXG5mdW5jdGlvbiBoaWdobGlnaHRXb3JkKHRhcmdldEVsZW1lbnQsIGluZGV4KXtcbiAgICB0YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC53b3JkLSR7aW5kZXh9YCkuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0SGlnaGxpZ2h0V29yZCh0YXJnZXRFbGVtZW50LCBpbmRleCl7XG4gICAgdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAud29yZC0ke2luZGV4fWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xufVxuXG5cbmZ1bmN0aW9uIHN0YXJ0U3BlYWsodGV4dCl7XG4gICAgdXR0ZXJhbmNlLnRleHQgPSB0ZXh0O1xuICAgIHV0dGVyYW5jZS52b2ljZSA9IHNlbGVjdGVkVm9pY2U7XG4gICAgdXR0ZXJhbmNlLmxhbmcgPSBcImlkXCI7XG4gICAgdGV4dExlbmd0aCA9IHRleHQuc3BsaXQoXCIgXCIpLmxlbmd0aDtcbiAgICBib3VuZGFyeUxpc3QgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKHRleHQuY2hhckF0KGkpID09IFwiIFwiKSBib3VuZGFyeUxpc3QucHVzaChpKTtcbiAgICB9XG4gICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheWluZycpO1xuICAgIGN1cnJlbnRXb3JkID0gMDtcbiAgICBoaWdobGlnaHRXb3JkKGN1cnJlbnRQbGF5aW5nRWxlbWVudCwgY3VycmVudFdvcmQpO1xuICAgIHN5bnRoLnNwZWFrKHV0dGVyYW5jZSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BTcGVhaygpe1xuICAgIGlmKCFpc1BsYXlpbmcgfHwgY3VycmVudFBsYXlpbmdFbGVtZW50ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICByZXNldEhpZ2hsaWdodFdvcmQoY3VycmVudFBsYXlpbmdFbGVtZW50LCBjdXJyZW50V29yZCk7XG4gICAgc3ludGgucmVzdW1lKCk7XG4gICAgc3ludGguY2FuY2VsKCk7XG4gICAgaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlpbmcnKTtcbiAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgY3VycmVudFdvcmQgPSAwO1xuICAgIGJvdW5kYXJ5TGlzdCA9IFtdO1xufSJdLCJuYW1lcyI6WyJzeW50aCIsIndpbmRvdyIsInNwZWVjaFN5bnRoZXNpcyIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsImN1cnJlbnRXb3JkIiwiYm91bmRhcnlMaXN0IiwiY3VycmVudFBsYXlpbmdFbGVtZW50Iiwic2VsZWN0ZWRWb2ljZSIsImdldFZvaWNlcyIsImZpbHRlciIsImxpc3QiLCJsYW5nIiwiaXNQbGF5aW5nIiwicmVzZXRIaWdobGlnaHRXb3JkIiwidGFyZ2V0RWxlbWVudCIsImluZGV4IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGV4dExlbmd0aCIsImNoYXJJbmRleCIsImFkZCIsInVuZGVmaW5lZCIsInJlc3VtZSIsImNhbmNlbCJdLCJzb3VyY2VSb290IjoiIn0=