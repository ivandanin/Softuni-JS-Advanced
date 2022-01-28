function solve() {
   let name = document.querySelector('.product');
   let picture = document.querySelector('.product-image');
   let price = document.querySelector('.price');
   let checkout = document.querySelector('textarea');
   let button = document.querySelector('.add-product');

   let textToAppend = `Added ${name} for ${price} to the cart.\n`;

   button.addEventListener('click', function addItem() {
      checkout.append(textToAppend);
   });

}