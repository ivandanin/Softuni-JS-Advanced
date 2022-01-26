function addItem() {
    let addElement = document.getElementById('newItemText').value;
    let listOfItems = document.getElementById('items');

    if(addElement.length === 0) {
        return;
    }

    let newLiElement = document.createElement('li');
    
    newLiElement.textContent = addElement;
    listOfItems.appendChild(newLiElement);
    document.getElementById('newItemText').value = '';

    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    
    remove.appendChild(linkText);
    remove.href = '#';
    remove.addEventListener('click', deleteItem);
    
    newLiElement.appendChild(remove);
    listOfItems.appendChild(newLiElement);

    function deleteItem() {
        newLiElement.remove();
    }
}   