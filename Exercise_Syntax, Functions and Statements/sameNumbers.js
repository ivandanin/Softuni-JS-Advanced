function checkNumbers(input) {
    let sum = 0;
    let check = false;
    let number = input.toString();

    for (let i = 0; i < number.length; i++) {
        if (number[0] === number[i]) {
            check = true;
        } else {
            check = false;
        }
        sum += Number(number[i]);
    }
    console.log(check);
    console.log(sum);
}
