function extract(array) {
    let max = Number.MIN_VALUE;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element >= max) {
            max = element;
            newArray.push(element);
        }
    }
    return newArray;
}
extract([1, 2, 4, 8, 5, 7, 11, 32, 3, 5]);