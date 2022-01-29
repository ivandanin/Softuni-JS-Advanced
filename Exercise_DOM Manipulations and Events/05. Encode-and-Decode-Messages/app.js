function encodeAndDecodeMessages() {
    let [encodeBtn, decodeBtn] = Array.from(
        document.querySelectorAll('#main div button'));

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(event) {
        let inputTextarea = event.target.parentElement.querySelector('textarea');
        let encodedMessage = '';

        for (const char of inputTextarea.value) {
            let currCharCode = char.charCodeAt(0);
            let newCharCode = currCharCode + 1;

            encodedMessage += String.fromCharCode(newCharCode);
        }

        let decodedMessage = event.target.parentElement.parentElement.querySelectorAll('textarea')[1];

        decodedMessage.value = encodedMessage;
        inputTextarea.value = '';
    }

    function decode(event) {
        let inputTextarea = event.target.parentElement.querySelector('textarea');
        let decodedMessage = '';

        for (const char of inputTextarea.value) {
            let currCharCode = char.charCodeAt(0);
            let newCharCode = currCharCode - 1;

            decodedMessage += String.fromCharCode(newCharCode);
        }

        inputTextarea.disabled = false;
        inputTextarea.value = decodedMessage;
        inputTextarea.disabled = true;
    }
}