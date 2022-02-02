function sumRange(array, startIndex, endIndex) {
   
    if(!Array.isArray(array)) {
        return NaN;
    } 
    let start = Math.max(startIndex, 0);
    let end = Math.min(endIndex, array.length - 1);

    let sum = array.slice(start, end + 1)
    .reduce((a, x) => a + Number(x), 0);

    return sum;
}

sumRange([10, 20, 30, 40, 50, 60], 3, 300);