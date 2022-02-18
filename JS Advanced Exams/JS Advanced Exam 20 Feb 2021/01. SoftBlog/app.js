function solve(){
   let creatorEl = document.getElementById('creator');
   let titleEl = document.getElementById('title');
   let categoryEl = document.getElementById('category');
   let contentEl = document.getElementById('content');

   let createBtn = document.querySelector('.btn create');
   createBtn.addEventListener('click', () => {
      let postsSection = document.querySelector('.site-content :nth-child(2)');
      let articleEl = document.createElement('article');

      if (creatorEl.value &&
         titleEl.value && 
         categoryEl.value &&
         contentEl.value) {

         let titleLi = document.createElement('h1');  
         articleEl.appendChild(titleLi);
         titleLi.textContent = `${titleEl.value}`; 
         
         let categoryLi = document.createElement('p');  
         let categoryStrong = document.createElement('strong');
         categoryLi.appendChild(categoryStrong);
         categoryLi.textContent = 'Category:';    
         categoryStrong.textContent = `${categoryEl.value}`;
         articleEl.appendChild(categoryLi);

         let creatorLi = document.createElement('p');      
         let creatorNameStrong = document.createElement('strong');
         creatorLi.appendChild(creatorNameStrong);
         creatorLi.textContent = 'Creator:';
         creatorNameStrong.textContent = `${creatorEl.value}`;
         articleEl.appendChild(creatorLi);

         let contentLi = document.createElement('p');    
         contentLi.textContent = `${contentEl.value}`;
         articleEl.appendChild(contentLi);

         let buttonsDiv = document.createElement('div');
         buttonsDiv.className = 'buttons';
         
         let deleteBtn = document.createElement('button');
         deleteBtn.className = 'btn delete';
         buttonsDiv.appendChild(deleteBtn);

         let archiveBtn = document.createElement('button');
         archiveBtn.className = 'btn archive';
         buttonsDiv.appendChild(archiveBtn);
         
         articleEl.appendChild(buttonsDiv);
         postsSection.appendChild(articleEl);
         }
   });
}
