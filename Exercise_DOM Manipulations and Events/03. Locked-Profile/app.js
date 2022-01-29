function lockedProfile() {
    document.querySelector('#main').addEventListener('click', onClick);

    
    function onClick(event) {
        const hiddenDiv = event.target.parentElement.querySelector('div');
        
        let targetEl = event.target;
        let btn = targetEl.tagName == 'BUTTON';
        let unlocked = targetEl.parentElement.querySelectorAll('input[type="radio"]')[1];
    
        if (btn && targetEl.textContent == 'Show more') {
            if (unlocked.checked) {
                hiddenDiv.style.display = 'block';
                targetEl.textContent = 'Hide it';
                
            }
        } else if (btn && targetEl.textContent == 'Hide it') {
            if (unlocked.checked) {
                hiddenDiv.style.display = 'none';
                targetEl.textContent = 'Show more';
                
            }
        }
    }
}