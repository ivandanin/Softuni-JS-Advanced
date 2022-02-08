class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        let price = product[1];
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product')
        } else {
            this.products.push(product[0]);
            this.budget -= price;
            return `You have successfully bought ${product[0]}!`;
        }
    }

    recipes(recipe) {
        let isPresent = true;
        let {recipeName, productsList} = recipe;

        productsList.forEach(product => {
            if (!this.products.includes(product)) {
                isPresent = false;
            }
        });
    
    if (isPresent) {
        this.dishes.push({recipeName, productsList});
        return `${recipeName} has been successfully cooked!`;
    } 
        throw new Error('We do not have this product');
    }

    inviteGuests(name, dish) {
        if (!this.dishes.includes(dish)) {
            throw new Error('We do not have this dish');
        }
        if (!this.guests.includes(name)) {
            throw new Error('This guest has already been invited')
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let output = '';
        Object.keys(this.guests).forEach(guest => {
            let dish = this.guests[guest];
            let products = [];

            this.dishes.forEach(currDish => {
                if (currDish.recipeName === currDish) {
                    products = currDish.productsList;
                }
            });
            output += `${guest} will eat ${dish}, which consists of ${products.join(', ')}\n;`
        });
        return output;
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
console.log(dinner.shopping(['Honey', 10]));

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
