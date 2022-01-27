function focused() {
    let mainDivElement = document.getElementsByTagName('div')[0];

    Array.from(mainDivElement.getElementsByTagName('input')).forEach(e => {
        e.addEventListener('focus', focus);
    });

    Array.from(mainDivElement.getElementsByTagName('input')).forEach(e => {
        e.addEventListener('blur', deFocus);
    });

    function focus(e) {
        let parentEl = e.target.parentNode;
        parentEl.classList.add('focused');
    }

    function deFocus(e) {
        let parentEl = e.target.parentNode;
        parentEl.classList.remove('focused');
    }
}