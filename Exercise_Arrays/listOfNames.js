function sortNames(array) {
    array.sort();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log((index+1) + '.' + element);
    }
};