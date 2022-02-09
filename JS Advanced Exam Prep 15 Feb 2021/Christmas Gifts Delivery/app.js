function solution() {
    let [gifts, sentGifts, discardGifts] = document.querySelectorAll('section ul')
    let input = document.querySelector('input');

    document.querySelector('button').addEventListener('click', addGift);


    function addGift() {
        let inputValue = input.value;

        let element = e('li', inputValue, 'gift');
        let sendBtnEl = e('button', 'Send', 'sendBtn');
        let discardBtn = e('button', 'Discard', 'discardBtn');

        element.appendChild(sendBtnEl);
        element.appendChild(discardBtn);

        sendBtnEl.addEventListener('click', () => 
        sendBtn(inputValue, element));

        discardBtn.addEventListener('click', () => 
        discardGift(inputValue, element));

        gifts.appendChild(element);

        sortGifts();
    }

    function sendBtn(name, gift) {
        gift.remove();
        let element = e('li', name, 'gift');
        sentGifts.appendChild(element);
    }

    function discardGift(name, gift) {
        gift.remove();
        let element = e('li', name, 'gift');
        discardGifts.appendChild(element);
    }

    function sortGifts() {
        Array.from(gifts.children)
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(g => gifts.appendChild(g));
    }

    function e(type, content, className) {
        let result = document.createElement(type);
        result.textContent = content;

        if (className) {
            result.className = className;
        }

        return result;
    }
}