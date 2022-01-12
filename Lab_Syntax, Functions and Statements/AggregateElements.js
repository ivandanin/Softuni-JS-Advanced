function aggregate(arr) {
    let array = arr.map(Number);

    let sum = array.reduce((a, b) => a + b);

    let inversiveSum = 0;
    for(let i = 0; i < array.length; i++) {
        inversiveSum += 1/ array[i];
    }

    let concated = array.join('');

    console.log(sum);
    console.log(inversiveSum);
    console.log(concated);
}

aggregate([1, 2, 3]);