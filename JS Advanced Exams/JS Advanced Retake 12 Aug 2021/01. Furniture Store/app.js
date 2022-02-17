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
                        yearTd.textContent = `Year: ${yearElement.value}`;
                        descriptionTd.textContent = `Description: ${descriptionElement.value}`;
                        descriptionTd.colSpan = '3';
                        priceTd.textContent = `${priceElement.value}`;

                        let moreInfoBtn = document.createElement('button');
                        moreInfoBtn.className = 'moreBtn';
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
                        buyBtn.className = 'buyBtn';
                        buyBtn.textContent = 'Buy it';
                        buttonsTd.appendChild(buyBtn);

                        buyBtn.addEventListener('click', (event) => {
                            let info = event.target.parentNode.parentNode;
                            let totalPrice = document.querySelector('.total-price');
                            let price = Number(info.querySelector(':nth-child(2)').textContent);
                            trInfoElement.remove();
                            trHideElement.remove();
                            totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);
                        });
                        
                        trInfoElement.appendChild(modelTd);
                        trInfoElement.appendChild(priceTd);
                        trInfoElement.appendChild(buttonsTd);

                        trHideElement.appendChild(yearTd);
                        trHideElement.appendChild(descriptionTd);


                        tableBody.appendChild(trInfoElement);
                        tableBody.appendChild(trHideElement);

                        modelElement.value = '';
                        descriptionElement.value = '';
                        yearElement.value = '';
                        priceElement.value = '';
                    }
            }
    });
}
