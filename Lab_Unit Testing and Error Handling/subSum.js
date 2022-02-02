function sumRange(array, startIndex, endIndex) {
    let sum = 0;
    
    for (const el of array) {
       el = Number(el);

        if(Number(array[startIndex]) !== Number) {
            return NaN;
        } 
        if (startIndex < 0) {
            startIndex = 0;
        }
        if (endIndex > array.length) {
            endIndex = array.length;
        }
        
        sum += el;
    }
    // return sum.toFixed(2);
    console.log(sum.toFixed(2));
}

sumRange([10, 20, 30, 40, 50, 60], 3, 300);