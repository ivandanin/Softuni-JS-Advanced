function createRegistry(array) {
    let towns = {};

    for (const info of array) {
    let [town, populationText] = info.split(' <-> ');   
    let population = Number(populationText);

    if (!towns[town]) {
        towns[town] = 0;
    }
    towns[town] += population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
createRegistry([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);