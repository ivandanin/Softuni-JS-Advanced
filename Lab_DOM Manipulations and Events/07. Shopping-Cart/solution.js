function solve() {
  
   let checkoutTxt = document.querySelector('textarea');
   let checkoutBtn = document.querySelector('.checkout');
   let addBtn = Array.from(document.querySelectorAll('.add-product'));

   addBtn.forEach((btn) => btn.addEventListener('click', addItem));
   checkoutBtn.addEventListener('click', checkout);

   let products = [];

   function addItem(event) {
      let productContainer = event.target.parentNode.parentNode
      
      let title = productContainer.querySelector('.product-title').textContent;
      let price = Number(productContainer.querySelector('.product-line-price').textContent);

      checkoutTxt.value +=
       `Added ${title} for ${price.toFixed(2)} to the cart.\n`;

      products.push({name: title, price});
   }

   function checkout(event) {
      addBtn.forEach((btn) =>
       btn.disabled = true);

       let sum = 0;
       let nameOfProducts = [];
       
      for (const product of products) {

         if(!nameOfProducts.includes(product.name)){
            nameOfProducts.push(product.name);
         }

         sum += Number(product.price);
      }
      
      checkoutTxt.value +=
       `You bought ${nameOfProducts.join(', ')} for ${sum.toFixed(2)}.\n`;

      checkoutBtn.disabled = true;
   }
}