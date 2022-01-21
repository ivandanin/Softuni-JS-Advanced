function createRegister(array) {
    let heroes = []; 

    array.map(h => h.split(' / '))
    for (const iterator of array) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];
        heroes.push({name, level, items});

    }
    console.log(JSON.stringify(heroes));
}
createRegister(['Jake / 1000 / Gauss, HolidayGrenade'])