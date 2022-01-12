function findArea(a) {
    let varType = typeof(a);
    if(varType === 'number') {
        console.log((Math.pow(a, 2) * Math.PI).toFixed(2));        
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${varType}.`);
    }
}