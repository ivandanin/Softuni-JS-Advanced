function sortNumbers(array) {

    let newArray = [];
    array.sort((a, b) => a - b);

    while(array.length != 0) {
        newArray.push(array.shift());
        newArray.push(array.pop());
    }
    return newArray;
}