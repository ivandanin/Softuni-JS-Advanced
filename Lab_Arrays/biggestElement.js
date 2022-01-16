function printBiggestNumber(input) {
    let max = Number.MIN_VALUE;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        for (let index = 0; index < element.length; index++) {
            const el = element[index];
            if (el > max) {
                max = el;
            }
        }
    }
    return max;
}
