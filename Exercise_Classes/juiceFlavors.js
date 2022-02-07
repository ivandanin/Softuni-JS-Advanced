function createJuice(array) {
    let bottles = new Map();

    array.reduce((a, curr) => {
        let [flavor, quantity] = curr.split(' => ');
        quantity = Number(quantity);
    
        if(!a.hasOwnProperty(flavor)) {
            a[flavor] = 0;
        }
        a[flavor] += quantity;

        if (a[flavor] >= 1000) {
            if (!bottles.has(flavor)) {
                bottles.set(flavor, 0);
            }

        bottles.set(flavor, bottles.get(flavor) + parseInt(a[flavor] / 1000));
        a[flavor] %= 1000;
        }

        return a;
    }, {});
   
    for (const [flavor, quantity] of bottles) {
        console.log(`${flavor} => ${quantity}`);
    }
}

createJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])