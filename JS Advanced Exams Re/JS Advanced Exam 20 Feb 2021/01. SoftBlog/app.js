function solve(){
   let creatorInputElement = document.getElementById('creator');
   let titleInputElement = document.getElementById('title');
   let categoryInputElement = document.getElementById('category');
   let contentInputElement = document.getElementById('content');

   document.querySelector('button').addEventListener('click', createPost);

   
   function createPost(event) {
      event.preventDefault();
      let mainSectionElement = document.querySelector('main > section');

      let articleElement = createElement('article', undefined, mainSectionElement);

      let h1Element = createElement('h1', titleInputElement.value, articleElement);
      
      let categoryPElement = createElement('p', 'Category:', articleElement);
      let categoryStrongElement = createElement('strong', categoryInputElement.value, categoryPElement);

      let creatorPElement = createElement('p', 'Creator:', articleElement);
      let creatorStrongElement = createElement('strong', creatorInputElement.value, creatorPElement);

      let textPElement = createElement('p', contentInputElement.value, articleElement);
      
      let buttonsDivElement = createElement('div', undefined, articleElement);
      buttonsDivElement.classList.add('buttons');

      let deleteBtn = createElement('button', 'Delete', buttonsDivElement);
      deleteBtn.classList.add('btndelete');
      deleteBtn.addEventListener('click', deletePost);

      let archiveBtn = createElement('button', 'Archive', buttonsDivElement);
      archiveBtn.classList.add('btnarchive');
      archiveBtn.addEventListener('click', archivePost);
   }

   function archivePost(event) {
      let archiveSectionElement = document.querySelector('.archive-section ol');

      let h1Element = event.target.parentNode.parentNode.querySelector('article > h1');

      let listElement = createElement('li', h1Element.textContent, archiveSectionElement);

      Array.from(archiveSectionElement.querySelectorAll('li'))
      .sort((a, b) => (a.textContent).localeCompare(b.textContent))
      .forEach(el => archiveSectionElement.appendChild(el));

      event.target.parentNode.parentNode.remove();

   }

   function deletePost(event) {
      event.target.parentNode.parentNode.remove();
   }

   function createElement(type, content, addTo) {
      let element = document.createElement(type);
      element.textContent = content;
      addTo.appendChild(element);
      return element;
   }
}
