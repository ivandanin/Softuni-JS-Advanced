function solve() {
    let recipientNameInputElement = document.getElementById('recipientName');
    let titleInputElement = document.getElementById('title');
    let messageInputElement = document.getElementById('message');

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', onClick);
    resetBtn.addEventListener('click', reset);

    let listUlElement = document.getElementById('list');
    
    function onClick(event) {
        event.preventDefault();
        
        if (recipientNameInputElement.value &&
            titleInputElement.value &&
            messageInputElement.value) {
                
            let listLiElement = createElement('li', undefined, listUlElement);
            let titleH4Element = createElement('h4', `Title: ${titleInputElement.value}`, listLiElement);
            let recipientH4Element = createElement('h4', `Recipient Name: ${recipientNameInputElement.value}`, listLiElement);
            let spanElement = createElement('span', `${messageInputElement.value}`, listLiElement);

            let listActionDivElement = createElement('div', undefined, listLiElement);
            listActionDivElement.id = 'list-action';
            let sendBtn = createElement('button', 'Send', listActionDivElement);
            sendBtn.type = 'submit';
            sendBtn.id = 'send';
            sendBtn.addEventListener('click', sendMail);

            let deleteBtn = createElement('button', 'Delete', listActionDivElement);
            deleteBtn.type = 'submit';
            deleteBtn.id = 'delete';
            deleteBtn.addEventListener('click', deleteMail);

            reset(event);
        }
    }

    function sendMail(event) {
        event.preventDefault(); 
        let sentListUlElement = document.querySelector('.sent-list');
        let title = listUlElement.getElementsByTagName('h4')[0].textContent.substring(7, 1000);
        let recipient = listUlElement.getElementsByTagName('h4')[1].textContent.substring(15, 1000);

        let listLiElement = createElement('li', undefined, sentListUlElement);
        let toSpanElement = createElement('span', `To: ${recipient}`, listLiElement);
        let titleSpanElement = createElement('span', `Title: ${title}`, listLiElement);
        let buttonsDivElement = createElement('div', undefined, listLiElement);
        buttonsDivElement.classList.add('btn');
        let deleteBtn = createElement('button', 'Delete', buttonsDivElement);
        deleteBtn.type = 'submit';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', deleteMail);

        event.target.parentElement.parentElement.remove();
    }

    function deleteMail(event) {
        event.preventDefault();
        let deleteListUlElement = document.querySelector('.delete-list');
        let title = listUlElement.getElementsByTagName('h4')[0].textContent.substring(7, 1000);
        let recipient = listUlElement.getElementsByTagName('h4')[1].textContent.substring(15, 1000);

        let listLiElement = createElement('li', undefined, deleteListUlElement);
        let toSpanElement = createElement('span', `To: ${recipient}`, listLiElement);
        let titleSpanElement = createElement('span', `Title: ${title}`, listLiElement);
        event.target.parentElement.parentElement.remove();

    }

    function reset(event) {
        event.preventDefault();
        recipientNameInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
    }

    function createElement(type, content, addTo) {
        let element = document.createElement(type);
        element.textContent = content;
        addTo.appendChild(element);

        return element;
    }
}
solve()