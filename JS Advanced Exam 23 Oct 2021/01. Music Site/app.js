window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById('genre').value;
    let songNameElement = document.getElementById('name').value;
    let authorElement = document.getElementById('author').value;
    let creationDateElement = document.getElementById('date').value;

    let addBtn = document.getElementById('add-btn');

    let songContainerElement = document.querySelector('#all-hits .all-hits-container');

    addBtn.addEventListener('click', (event) => {

        event.preventDefault();

        if (genreElement && 
            songNameElement && 
            authorElement &&
            creationDateElement) {

                let divElement = document.createElement('div');
                divElement.classList.add('hits-info');

                let imgElement = document.createElement('img');
                imgElement.src = './static/img/hero-bg.png.png';

                let genreH2 = document.createElement('h2');
                let nameH2 = document.createElement('h2');
                let authorH2 = document.createElement('h2');
                let creationDateH3 = document.createElement('h3');

                genreH2.textContent = `Genre: ${genreElement}`;
                nameH2.textContent = `Name: ${songNameElement}`;
                authorH2.textContent = `Author: ${authorElement}`;
                creationDateH3.textContent = `Date: ${creationDateElement}`;

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
                deleteBtn.textContent = 'Delete song';
                divElement.appendChild(deleteBtn);

                songContainerElement.appendChild(divElement);

                genreElement, 
                songNameElement, 
                authorElement, 
                creationDateElement = '';
        }
    });


}   