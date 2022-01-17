function printElements(input, step) {
    let newArr = [];
    for (let i = 0; i < input.length; i += step) {
    newArr.push(input[i]);
    }
    return newArr;
}