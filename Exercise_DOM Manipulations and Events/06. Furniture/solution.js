function solve() {
  document.querySelector('#exercise').addEventListener('click', onClick);

  function onClick(event) {
    let targetEl = event.target;
    let btn = targetEl.tagName == 'BUTTON';

    if (btn && targetEl.textContent == 'Generate') {

      let inputTextarea = targetEl.parentElement.querySelector('textarea');
      let parsedInput = JSON.parse(inputTextarea.value);

      parsedInput.forEach(element => {
        let trEl = document.createElement('tr');
        let img = document.createElement('td');
        let name = document.createElement('td');
        let price = document.createElement('td');
        let decFactor = document.createElement('td');
        let checkbox = document.createElement('td');
        
        let image = document.createElement('img');
        image.setAttribute('src', element.img);
        img.appendChild(image);

        let pName = document.createElement('p');
        pName.textContent = element.name;
        name.appendChild(pName);

        let pPrice = document.createElement('p');
        pPrice.textContent = element.price;
        price.appendChild(pPrice);

        let pDecFactor = document.createElement('p');
        pDecFactor.textContent = element.decFactor;
        decFactor.appendChild(pDecFactor);

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkbox.appendChild(checkBox);

          trEl.appendChild(img);
          trEl.appendChild(name);
          trEl.appendChild(price);
          trEl.appendChild(decFactor);
          trEl.appendChild(checkbox);

        document.querySelector('.table tbody').appendChild(trEl);
      });
    }
    if (btn && targetEl.textContent == 'Buy') {

      let rows = Array.from(document.querySelectorAll('.table tbody tr'));

      let products = [];
      let prices = [];
      let decFactors = [];

      rows.forEach((row) => {

        let isChecked = row.lastElementChild.children[0].checked;

        if (isChecked) {
          
          let data = row.children;
          let stringData = '';
          
          for (let i = 1; i < data.length - 1; i++) {
            let currElement = data[i];
            let currElementData = currElement.children[0];
            stringData += currElementData.textContent + ' ';
          }

          let [name, price, decFactor] = stringData.split(' ');
          price = Number(price);
          decFactor = Number(decFactor);

          products.push(name);
          prices.push(price);
          decFactors.push(decFactor);
        }
      });

      let totalPrice = prices.reduce((a, b) => a + b);
      let sumOfDecFactors = decFactors.reduce((a, b) => a + b);
      let avgDecFactor = sumOfDecFactors / decFactors.length;

      document.querySelectorAll('textarea')[1].value = 
      `Bought furniture: ${products.join(
                ', '
            )}\nTotal price: ${totalPrice.toFixed(
                2
            )}\nAverage decoration factor: ${avgDecFactor}`;
    }
  }
}

// [{"name": "Sofa", "img":
// "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/
// grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]