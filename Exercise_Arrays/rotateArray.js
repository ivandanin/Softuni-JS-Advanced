function rotateArray(array, rotations) {
   for (let index = 0; index < rotations; index++) {
       let lastElement = array.pop();
       array.unshift(lastElement);
   }
   console.log(array.join(' '));
}
