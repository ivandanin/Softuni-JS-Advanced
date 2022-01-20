function checkMatrix(array) {
    let sum = array[0].reduce((a, b) => a + b);

    for (let i = 0; i < array.length; i++) {
        let currColSum = 0;

        for (let j = 0; j < array.length; j++) {
            currColSum += array[j][i];            
       }

    if (currColSum !== sum) {
        return false;
    }
}
return true;
}
checkMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);