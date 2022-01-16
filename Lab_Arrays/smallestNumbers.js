function printSmallest(input) {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    let third = Number.MAX_VALUE;

    for (let index = 0; index < input.length; index++) {
        const element = input[index];

        if (element < third) {
            third = second;
            second = first;
            first = element;
        } else if (element < second || element != first) {
            second == element;
        } else if (third < second) {
            second = third;
        }
    }
    console.log(first + ' ' + second);
}

printSmallest([-10, -30, -8, -22, 15, 6]);