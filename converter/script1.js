let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to set up speech synthesis
function setupSpeechSynthesis() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}
window.speechSynthesis.onvoiceschanged = setupSpeechSynthesis;
voiceSelect.addEventListener("change",() => {
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

setupSpeechSynthesis();
