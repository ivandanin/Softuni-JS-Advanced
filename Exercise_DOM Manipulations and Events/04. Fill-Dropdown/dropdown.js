function addItem() {
    let menu = document.getElementById('menu');
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let opt = document.createElement('option');
    opt.textContent = newItemText.value;
    opt.value = newItemValue.value;

    menu.appendChild(opt);

    newItemText.value = '';
    newItemValue.value = '';

}