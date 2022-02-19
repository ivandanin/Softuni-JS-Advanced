function solve() {
    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let addBtn = document.getElementById('add-worker');

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (firstNameElement.value &&
            lastNameElement.value &&
            emailElement.value &&
            birthElement.value &&
            positionElement.value &&
            salaryElement.value) {
                let totalSalaries = document.getElementById('sum');
                
                let tBody = document.getElementById('tbody');
                let trEl = document.createElement('tr');

                let firstNameTd = document.createElement('td');
                firstNameTd.textContent = `${firstNameElement.value}`;

                let lastNameTd = document.createElement('td');
                lastNameTd.textContent = `${lastNameElement.value}`;

                let emailTd = document.createElement('td');
                emailTd.textContent = `${emailElement.value}`;

                let birthTd = document.createElement('td');
                birthTd.textContent = `${birthElement.value}`;

                let positionTd = document.createElement('td');
                positionTd.textContent = `${positionElement.value}`;

                let salaryTd = document.createElement('td');
                salaryTd.textContent = `${salaryElement.value}`;
                totalSalaries.textContent = (Number(totalSalaries.textContent) + Number(salaryElement.value)).toFixed(2);

                let buttonsTd = document.createElement('td');

                let fireButton = document.createElement('button');
                fireButton.className = 'fired';
                fireButton.textContent = 'Fired';
                buttonsTd.appendChild(fireButton);

                fireButton.addEventListener('click', (event) => {
                    event.preventDefault();

                    let info = event.target.parentNode.parentNode;
                    let salaryToRemove = Number(info.querySelector(':nth-child(6)').textContent);

                    totalSalaries.textContent = (Number(totalSalaries.textContent) - salaryToRemove).toFixed(2);

                    trEl.remove(firstNameTd);
                    trEl.remove(lastNameTd);
                    trEl.remove(emailTd);
                    trEl.remove(birthTd);
                    trEl.remove(positionTd);
                    trEl.remove(salaryTd);
                    
                });


                let editButton = document.createElement('button');
                editButton.className = 'edit';
                editButton.textContent = 'Edit';
                buttonsTd.appendChild(editButton);

                editButton.addEventListener('click', () => {
                    event.preventDefault();

                    firstNameElement.value = firstNameTd.textContent;
                    lastNameElement.value = lastNameTd.textContent;
                    emailElement.value = emailTd.textContent;
                    birthElement.value = birthTd.textContent;
                    positionElement.value = positionTd.textContent;
                    salaryElement.value = salaryTd.textContent;

                    trEl.remove(firstNameTd);
                    trEl.remove(lastNameTd);
                    trEl.remove(emailTd);
                    trEl.remove(birthTd);
                    trEl.remove(positionTd);
                    trEl.remove(salaryTd);
                    totalSalaries.textContent = (Number(totalSalaries.textContent) - Number(salaryElement.value)).toFixed(2);

                });

                trEl.appendChild(firstNameTd);
                trEl.appendChild(lastNameTd);
                trEl.appendChild(emailTd);
                trEl.appendChild(birthTd);
                trEl.appendChild(positionTd);
                trEl.appendChild(salaryTd);
                trEl.appendChild(fireButton);
                trEl.appendChild(editButton);

                tBody.appendChild(trEl);

                firstNameElement.value = ''; 
                lastNameElement.value = ''; 
                emailElement.value = ''; 
                birthElement.value = ''; 
                positionElement.value = ''; 
                salaryElement.value = ''; 
            }
    });
}
solve()