function check(input) {
    let newArr = [];
for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if(element < 0) {
        newArr.unshift(element);
    } else {
        newArr.push(element);
    }
}
for (let index = 0; index < newArr.length; index++) {
    const element = newArr[index];
    console.log(element);
}
}
check([7, -2, 8, 9]);