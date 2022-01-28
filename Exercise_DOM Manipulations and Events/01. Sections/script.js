function create(words) {
   let mainDiv = document.getElementById('content');

   words.forEach(word => {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      
      pElement.style.display = 'none';

      pElement.textContent = word;

      divElement.appendChild(pElement);
      divElement.addEventListener('click', onClick);
      mainDiv.appendChild(divElement);
   });

   function onClick(event) {
      let pElement = event.target.children[0];
      
      if (pElement.style.display == 'none') {
         pElement.style.display = 'block';
      } else {
         pElement.style.display = 'none';
      }
   }
}