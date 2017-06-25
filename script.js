const recognition = new webkitSpeechRecognition()
const speak = document.querySelector('#speech')

window.addEventListener('DOMContentLoaded', (e) => {
  speak.addEventListener('click', (e) => recognition.start(), false)

  recognition.addEventListener('result', (e) =>
    console.log(e.results[0][0].transcript.toLowerCase()), false)
})
