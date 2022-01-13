function print(fruit, weightInGrams, price) {

    let weightInKilos = weightInGrams / 1000;
    let moneyNeeded = price * weightInKilos;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`);
}