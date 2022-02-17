function solve() {

    let taskElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dateElement = document.getElementById('date');

    let addBtn = document.getElementById('add');

    let [addTaskSection, openSection, inProgressSection, completeSection] = document.querySelectorAll('.wrapper section');
    let openContainer = openSection.children[1];
    let inProgressContainer = inProgressSection.children[1];
    let completeContainer = completeSection.children[1];

    addBtn.addEventListener('click', (event) => {

        event.preventDefault();

        if (taskElement.value && 
            descriptionElement.value &&
             dateElement.value) {

                let article = document.createElement('article');

                let taskH3 = document.createElement('h3');
                let descriptionP = document.createElement('p');
                let dateP = document.createElement('p');

                taskH3.textContent = `${taskElement.value}`;
                descriptionP.textContent = `Description: ${descriptionElement.value}`;
                dateP.textContent = `Due Date: ${dateElement.value}`

                article.appendChild(taskH3);
                article.appendChild(descriptionP);
                article.appendChild(dateP);

                let divFlexElement = document.createElement('div');
                divFlexElement.className = 'flex';

                let startBtn = document.createElement('button');
                startBtn.className = 'green';
                startBtn.textContent = 'Start';

                startBtn.addEventListener('click', (event) => {
                    let curr = event.currentTarget.parentElement.parentElement;
                    
                    curr.lastElementChild.removeChild(curr.querySelector('.green'));
                    
                    let finishBtn = document.createElement('button');
                    finishBtn.className = 'orange';
                    finishBtn.textContent = 'Finish';
                    divFlexElement.appendChild(finishBtn);
                    
                    inProgressContainer.appendChild(article);

                    finishBtn.addEventListener('click', () => {
                        article.removeChild(divFlexElement);
                        completeContainer.appendChild(article);
                    });
                });

                let deleteBtn = document.createElement('button');
                deleteBtn.className = 'red';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', (event) => {
                    let curr = event.currentTarget.parentElement.parentElement;
                    curr.remove();
                });

                divFlexElement.appendChild(startBtn);
                divFlexElement.appendChild(deleteBtn);

                article.appendChild(divFlexElement);
                openContainer.appendChild(article);
             }
    });
}