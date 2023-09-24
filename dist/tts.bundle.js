(()=>{"use strict";const e=window.speechSynthesis;window.utterance=new SpeechSynthesisUtterance;let t,i,n,s=e.getVoices().filter((e=>"id"==e.lang))[0],r=!1;function c(e,t){e.querySelector(`.word-${t}`).classlist.remove("highlight")}e.addEventListener("voiceschanged",(()=>{s=e.getVoices().filter((e=>"id"==e.lang))[0]})),utterance.addEventListener("boundary",(e=>{for(;t<NaN&&i[t]<e.charIndex;)c(n,t),s=++t,n.querySelector(`.word-${s}`).classList.add("highlight");var s})),utterance.addEventListener("end",(()=>{r&&void 0!==n&&(c(n,t),e.resume(),e.cancel(),r=!1,n.classList.remove("playing"),n=void 0,t=0,i=[])}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBUUMsT0FBT0MsZ0JBQ3JCRCxPQUFPRSxVQUFZLElBQUlDLHlCQUN2QixJQUVnQkMsRUFDWkMsRUFDQUMsRUFKQUMsRUFBZ0JSLEVBQU1TLFlBQVlDLFFBQVFDLEdBQXNCLE1BQWJBLEVBQUtDLE9BQWMsR0FDdEVDLEdBQVksRUF1Q2hCLFNBQVNDLEVBQW1CQyxFQUFlQyxHQUN2Q0QsRUFBY0UsY0FBYyxTQUFTRCxLQUFTRSxVQUFVQyxPQUFPLFlBQ25FLENBcENBbkIsRUFBTW9CLGlCQUFpQixpQkFBaUIsS0FDcENaLEVBQWdCUixFQUFNUyxZQUFZQyxRQUFRQyxHQUFzQixNQUFiQSxFQUFLQyxPQUFjLEVBQUUsSUFrQjVFVCxVQUFVaUIsaUJBQWlCLFlBQWFDLElBQ3BDLEtBQU1oQixFQUFjaUIsS0FBZ0JoQixFQUFhRCxHQUFlZ0IsRUFBRUUsV0FDOURULEVBQW1CUCxFQUF1QkYsR0FTWlcsSUFSU1gsRUFBekJFLEVBU0pVLGNBQWMsU0FBU0QsS0FBU1EsVUFBVUMsSUFBSSxhQURoRSxJQUFzQ1QsQ0FQbEMsSUFHSmIsVUFBVWlCLGlCQUFpQixPQUFPLEtBOEIxQlAsUUFBdUNhLElBQTFCbkIsSUFDakJPLEVBQW1CUCxFQUF1QkYsR0FDMUNMLEVBQU0yQixTQUNOM0IsRUFBTTRCLFNBQ05mLEdBQVksRUFDWk4sRUFBc0JpQixVQUFVTCxPQUFPLFdBQ3ZDWixPQUF3Qm1CLEVBQ3hCckIsRUFBYyxFQUNkQyxFQUFlLEdBckNKLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvdHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN5bnRoID0gd2luZG93LnNwZWVjaFN5bnRoZXNpcztcbndpbmRvdy51dHRlcmFuY2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKCk7XG5sZXQgc2VsZWN0ZWRWb2ljZSA9IHN5bnRoLmdldFZvaWNlcygpLmZpbHRlcigobGlzdCkgPT4gbGlzdC5sYW5nID09IFwiaWRcIilbMF07XG5sZXQgaXNQbGF5aW5nID0gZmFsc2U7XG5sZXQgdGV4dExlbmd0aCwgY3VycmVudFdvcmQ7XG5sZXQgYm91bmRhcnlMaXN0O1xubGV0IGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuc3ludGguYWRkRXZlbnRMaXN0ZW5lcigndm9pY2VzY2hhbmdlZCcsICgpID0+IHtcbiAgICBzZWxlY3RlZFZvaWNlID0gc3ludGguZ2V0Vm9pY2VzKCkuZmlsdGVyKChsaXN0KSA9PiBsaXN0LmxhbmcgPT0gXCJpZFwiKVswXTtcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RWxlbWVudChlbGVtZW50LCBidXR0b24sIHRleHQpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSl7XG4gICAgICAgICAgICBzdG9wU3BlYWsoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc3RvcFNwZWFrKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHN0YXJ0U3BlYWsodGV4dCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnV0dGVyYW5jZS5hZGRFdmVudExpc3RlbmVyKCdib3VuZGFyeScsIChlKSA9PiB7XG4gICAgd2hpbGUoY3VycmVudFdvcmQgPCB0ZXh0TGVuZ3RoLTEgJiYgYm91bmRhcnlMaXN0W2N1cnJlbnRXb3JkXSA8IGUuY2hhckluZGV4KXtcbiAgICAgICAgcmVzZXRIaWdobGlnaHRXb3JkKGN1cnJlbnRQbGF5aW5nRWxlbWVudCwgY3VycmVudFdvcmQpO1xuICAgICAgICBoaWdobGlnaHRXb3JkKGN1cnJlbnRQbGF5aW5nRWxlbWVudCwgKytjdXJyZW50V29yZCk7XG4gICAgfVxufSk7XG5cbnV0dGVyYW5jZS5hZGRFdmVudExpc3RlbmVyKCdlbmQnLCAoKSA9PiB7XG4gICAgc3RvcFNwZWFrKCk7XG59KTtcblxuZnVuY3Rpb24gaGlnaGxpZ2h0V29yZCh0YXJnZXRFbGVtZW50LCBpbmRleCl7XG4gICAgdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAud29yZC0ke2luZGV4fWApLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xufVxuXG5mdW5jdGlvbiByZXNldEhpZ2hsaWdodFdvcmQodGFyZ2V0RWxlbWVudCwgaW5kZXgpe1xuICAgIHRhcmdldEVsZW1lbnQucXVlcnlTZWxlY3RvcihgLndvcmQtJHtpbmRleH1gKS5jbGFzc2xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbn1cblxuXG5mdW5jdGlvbiBzdGFydFNwZWFrKHRleHQpe1xuICAgIHV0dGVyYW5jZS50ZXh0ID0gdGV4dDtcbiAgICB1dHRlcmFuY2Uudm9pY2UgPSBzZWxlY3RlZFZvaWNlO1xuICAgIHV0dGVyYW5jZS5sYW5nID0gXCJpZFwiO1xuICAgIHRleHRMZW5ndGggPSB0ZXh0LnNwbGl0KFwiIFwiKS5sZW5ndGg7XG4gICAgYm91bmRhcnlMaXN0ID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZih0ZXh0LmNoYXJBdChpKSA9PSBcIiBcIikgYm91bmRhcnlMaXN0LnB1c2goaSk7XG4gICAgfVxuICAgIGlzUGxheWluZyA9IHRydWU7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgICBjdXJyZW50V29yZCA9IDA7XG4gICAgaGlnaGxpZ2h0V29yZChjdXJyZW50UGxheWluZ0VsZW1lbnQsIGN1cnJlbnRXb3JkKTtcbiAgICBzeW50aC5zcGVhayh1dHRlcmFuY2UpO1xufVxuXG5mdW5jdGlvbiBzdG9wU3BlYWsoKXtcbiAgICBpZighaXNQbGF5aW5nIHx8IGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgcmVzZXRIaWdobGlnaHRXb3JkKGN1cnJlbnRQbGF5aW5nRWxlbWVudCwgY3VycmVudFdvcmQpO1xuICAgIHN5bnRoLnJlc3VtZSgpO1xuICAgIHN5bnRoLmNhbmNlbCgpO1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIGN1cnJlbnRXb3JkID0gMDtcbiAgICBib3VuZGFyeUxpc3QgPSBbXTtcbn0iXSwibmFtZXMiOlsic3ludGgiLCJ3aW5kb3ciLCJzcGVlY2hTeW50aGVzaXMiLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJjdXJyZW50V29yZCIsImJvdW5kYXJ5TGlzdCIsImN1cnJlbnRQbGF5aW5nRWxlbWVudCIsInNlbGVjdGVkVm9pY2UiLCJnZXRWb2ljZXMiLCJmaWx0ZXIiLCJsaXN0IiwibGFuZyIsImlzUGxheWluZyIsInJlc2V0SGlnaGxpZ2h0V29yZCIsInRhcmdldEVsZW1lbnQiLCJpbmRleCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc2xpc3QiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRleHRMZW5ndGgiLCJjaGFySW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bmRlZmluZWQiLCJyZXN1bWUiLCJjYW5jZWwiXSwic291cmNlUm9vdCI6IiJ9