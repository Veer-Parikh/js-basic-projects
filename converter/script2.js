// Assuming click_to_convert is the ID of the button element
document.getElementById("click_to_convert").addEventListener("click", () => {
    // Start speech recognition when the button is clicked
    const recognition = new webkitSpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        // Assuming convert_text is the ID of the element to display the recognized text
        document.getElementById("convert_text").innerHTML = transcript;
    });

    recognition.start();
});
