window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById('genre');
    let songNameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let creationDateElement = document.getElementById('date');

    let addBtn = document.getElementById('add-btn');

    let songContainerElement = document.querySelector('#all-hits .all-hits-container');
    let savedSongsContainer = document.querySelector('#saved-hits .saved-container');

    let likes = 0;

    addBtn.addEventListener('click', (event) => {

        event.preventDefault();

        if (genreElement.value && 
            songNameElement.value && 
            authorElement.value &&
            creationDateElement.value) {

                let divElement = document.createElement('div');
                divElement.classList.add('hits-info');

                let imgElement = document.createElement('img');
                imgElement.src = './static/img/img.png';

                let genreH2 = document.createElement('h2');
                let nameH2 = document.createElement('h2');
                let authorH2 = document.createElement('h2');
                let creationDateH3 = document.createElement('h3');

                genreH2.textContent = `Genre: ${genreElement.value}`;
                nameH2.textContent = `Name: ${songNameElement.value}`;
                authorH2.textContent = `Author: ${authorElement.value}`;
                creationDateH3.textContent = `Date: ${creationDateElement.value}`;

                divElement.appendChild(imgElement);
                divElement.appendChild(genreH2);
                divElement.appendChild(nameH2);
                divElement.appendChild(authorH2);
                divElement.appendChild(creationDateH3);

                let saveBtn = document.createElement('button');
                let likeBtn = document.createElement('button');
                let deleteBtn = document.createElement('button');

                saveBtn.classList.add('save-btn');
                saveBtn.textContent = 'Save song';
                divElement.appendChild(saveBtn);

                likeBtn.classList.add('like-btn');
                likeBtn.textContent = 'Like song';
                divElement.appendChild(likeBtn);

                deleteBtn.classList.add('delete-btn');
                deleteBtn.textContent = 'Delete';
                divElement.appendChild(deleteBtn);

                songContainerElement.appendChild(divElement);

                genreElement = '';
                songNameElement = '';
                authorElement = '';
                creationDateElement = '';
        }
    });

    songContainerElement.addEventListener('click', (event) => {
      
        event.preventDefault();

        if (event.target.tagName == 'BUTTON') {

            if (event.target.className == 'like-btn') {
                if (!event.target.hasAttribute('disabled')) {
                    likes++;
                    event.target.disabled = true;
                    document.querySelector('#total-likes .likes p')
                    .textContent = `Total Likes: ${likes}`;
                }
            } else if (event.target.className == 'save-btn') {
                let divElement = event.target.parentNode;
                
                let likeBtn = document.querySelector('.like-btn');
                let saveBtn = document.querySelector('.save-btn');
                let deleteBtn = document.querySelector('.delete-btn');
                
                divElement.removeChild(likeBtn);
                divElement.removeChild(saveBtn);
                
                deleteBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    deleteEl(event);
                });
                savedSongsContainer.appendChild(divElement);
            } else if (event.target.className == 'delete-btn') {
                deleteEl(event);
            }
        }
    });

    function deleteEl(event) {
        event.target.parentNode.remove();
    }
}   