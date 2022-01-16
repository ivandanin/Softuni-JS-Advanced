function printPie(array, flavours, targetFlavours) {
    let startIndex = array.indexOf(flavours);
    let endIndex = array.indexOf(targetFlavours) + 1;  
    
    return array.slice(startIndex, endIndex);
}
printPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');