class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model !== '' &&
        horsepower >= 0 &&
        price >= 0 && 
        mileage >= 0) {
            this.availableCars.push({
                model,
                horsepower,
                price,
                mileage
            });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
        throw new Error('Invalid input!');       
    }

    sellCar(model, desiredMileage) {
        let desiredCar = this.availableCars.find(m => m.model == model);
        if (!desiredCar) {
            throw new Error(`${model} was not found!`);
        } else {
            if (desiredCar.mileage >= desiredMileage) {
                if (desiredCar.mileage - desiredMileage <= 40000) {
                   desiredCar.price *= 0.95;
                } else if (desiredCar.mileage - desiredMileage > 40000) {
                    desiredCar.price *= 0.9;
                }
            }
            this.soldCars.push(desiredCar);
            this.totalIncome += desiredCar.price;
            return `${model} was sold for ${desiredCar.price.toFixed(2)}$`;
        }
    }

    currentCar() {
        let result = '-Available cars:\n';
        result += this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)
        .join('\n');
        return result;
    }

    salesReport(criteria) {
        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`;

        if (criteria == 'horsepower') {
            result += this.soldCars
            .sort((a, b) => b.horsepower - a.horsepower)
            .map(c => `---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$`).join('\n');
        } else if (criteria == 'model') {
           result += this.soldCars
           .sort((a, b) => a.model.localeCompare(b.model))
           .map(c => `---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$`).join('\n');
        } else {
            throw new Error('Invalid criteria!');
        }
        return result;
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));


// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input!
// yes

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$
// yes

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$
//yes

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));

// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$
// yes