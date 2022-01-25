function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let toSearch = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let counter = 0;
   
   for (const town of towns) {
      if (town.textContent.includes(toSearch) 
      //edge case
      && toSearch !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   result.textContent = `${counter} matches found`
}
