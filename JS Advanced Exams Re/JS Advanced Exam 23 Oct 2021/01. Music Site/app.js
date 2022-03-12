window.addEventListener('load', solve);

function solve() {
    let genreInputElement = document.getElementById('genre');
    let nameInputElement = document.getElementById('name');
    let authorInputElement = document.getElementById('author');
    let dateInputElement = document.getElementById('date');

    let likes = 0;

    let allHitsContainer = document.querySelector('.all-hits-container');
    let savedContainer = document.querySelector('.saved-container');

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault();

        if(genreInputElement.value && 
            nameInputElement.value && 
            authorInputElement.value &&
            dateInputElement.value) {

            let hitsInfo = createElement('div', undefined, allHitsContainer);
            hitsInfo.classList.add('hits-info');
            let img = createElement('img', undefined, hitsInfo);
            img.src = './static/img/img.png';
            let genreH2Element = createElement('h2', `Genre: ${genreInputElement.value}`, hitsInfo);
            let nameH2Element = createElement('h2', `Name: ${nameInputElement.value}`, hitsInfo);
            let authorH2Element = createElement('h2', `Author: ${authorInputElement.value}`, hitsInfo);
            let dateH3Element = createElement('h3', `Date: ${dateInputElement.value}`, hitsInfo);
            let saveBtn = createElement('button', 'Save song', hitsInfo);
            saveBtn.classList.add('save-btn');
            
            let likeBtn = createElement('button', 'Like song', hitsInfo);
            likeBtn.classList.add('like-btn');
            let deleteBtn = createElement('button', 'Delete', hitsInfo);
            deleteBtn.classList.add('delete-btn');
            
            genreInputElement.value = '';
            nameInputElement.value = '';
            authorInputElement.value = '';
            dateInputElement.value = '';
        }
    }

    allHitsContainer.addEventListener('click', (event) => {
        event.preventDefault();

        if (event.target.className == 'like-btn') {
            if (!event.target.hasAttribute('disabled')) {
                likes++;
                event.target.disabled = true;
                document.querySelector('.likes p').textContent = `Total Likes: ${likes}`;
            }
        }
        else if (event.target.className == 'save-btn') {
            let divElement = event.target.parentNode;
            let likeBtn = document.querySelector('.like-btn');
            let saveBtn = document.querySelector('.save-btn');
            let deleteBtn = document.querySelector('.delete-btn');

            divElement.removeChild(likeBtn);
            divElement.removeChild(saveBtn);
            savedContainer.appendChild(divElement);

            deleteBtn.addEventListener('click', (event) => {
                event.preventDefault();
                deleteEl(event);
            });
        } else if (event.target.className == 'delete-btn') {
            deleteEl(event);
        }
    });

    function deleteEl(event) {
        event.target.parentNode.remove();
    }
    
    function createElement(type, content, addTo) {
        let element = document.createElement(type);
        element.textContent = content;
        addTo.appendChild(element);
    
        return element;
    }
}   