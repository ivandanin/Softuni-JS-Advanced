function extractText() {
    let itemNode = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');

    for (const node of itemNode) {
        textArea.value += node.textContent + '\n';
    }
}