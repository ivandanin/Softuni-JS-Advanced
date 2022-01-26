function addItem() {
    let input = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');

    //transfers the input text to the new element
    newLi.appendChild(document.createTextNode(input));

    //displays the new element
    document.getElementById('items').appendChild(newLi);

    //clears the input field
    document.getElementById('newItemText').value = '';
}