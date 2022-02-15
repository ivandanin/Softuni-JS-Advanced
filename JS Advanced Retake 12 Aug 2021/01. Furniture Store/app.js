window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');

    let addBtn = document.getElementById('add');

    let tableElement = document.getElementById('information');

    addBtn.addEventListener('click', (event) => {

        event.preventDefault();

        if (modelElement.value && 
            yearElement.value && 
            descriptionElement.value &&
            priceElement.value) {

                if (modelElement.value !== '' &&
                    descriptionElement.value !== '' && 
                    yearElement.value > 0 && 
                    priceElement.value > 0 
                    ) {

                        priceElement.value = Number(priceElement.value).toFixed(2);

                        let tableBody = document.getElementById('furniture-list');
                        let trInfoElement = document.createElement('tr');
                        trInfoElement.className = 'info';
                        let trHideElement = document.createElement('tr');
                        trHideElement.className = 'hide';
                        
                        let modelTd = document.createElement('td');
                        let yearTd = document.createElement('td');
                        let descriptionTd = document.createElement('td');
                        let priceTd = document.createElement('td');
                        let buttonsTd = document.createElement('td');
                        
                        modelTd.textContent = `${modelElement.value}`; 
                        yearTd.textContent = `${yearElement.value}`;
                        descriptionTd.textContent = `${descriptionElement.value}`;
                        priceTd.textContent = `${priceElement.value}`;

                        let moreInfoBtn = document.createElement('button');
                        moreInfoBtn.textContent = 'More Info';
                        buttonsTd.appendChild(moreInfoBtn);

                        moreInfoBtn.addEventListener('click', (event) => {
                            let targetBtn = event.target;
                            let hiddenInfo = event.target.parentNode.parentNode.nextSibling;

                            if (targetBtn.textContent == 'More Info') {
                            targetBtn.textContent = 'Less Info';
                            hiddenInfo.style.display = 'contents';

                            } else {
                                targetBtn.textContent = 'More Info';
                                hiddenInfo.style.display = 'none';
                            }
                        });

                        let buyBtn = document.createElement('button');
                        buyBtn.textContent = 'Buy It';
                        buttonsTd.appendChild(buyBtn);
                        
                        trInfoElement.appendChild(modelTd);
                        trInfoElement.appendChild(priceTd);
                        trInfoElement.appendChild(moreInfoBtn);
                        trInfoElement.appendChild(buyBtn);

                        trHideElement.appendChild(yearTd);
                        trHideElement.appendChild(descriptionTd);

                        tableBody.appendChild(trInfoElement);

                        modelElement.value = '';
                        descriptionElement.value = '';
                        yearElement.value = '';
                        priceElement.value = '';
                    }
            }
    });
}
