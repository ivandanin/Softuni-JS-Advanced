function solve() {
  let input = document.getElementById('input');
  let array = input.value.split('.').filter(s => s !== '');
  let result = document.getElementById('output');

  while (array.length > 0) {
    let text = array.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    result.appendChild(p);
  }
}