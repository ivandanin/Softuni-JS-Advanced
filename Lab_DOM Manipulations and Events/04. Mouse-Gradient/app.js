function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    

    function gradientMove(event) {
       let power = Math.floor(event.offsetX / (event.target.clientWidth - 1) * 100);
       document.getElementById('result').textContent = power + '%';
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = '';
    }
}