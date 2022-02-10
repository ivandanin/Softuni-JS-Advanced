class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(product => {
            
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            
            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = productQuantity;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                
                this.history
                .push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
            this.history
            .push(`There was not enough money to load ${productQuantity} ${productName}`);

            }
        });

        return this.history
        .slice(this.history.length - products.length)
        .join('\n');
    }

    addToMenu(meal, neededProducts, price) {
       
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: [neededProducts],
                price: Number(price)
            };
        
            
            let length = Object.keys(this.menu).length;
            if (length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${length} meals in the menu, other ideas?`;
            } 
        }
        else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    
}

let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log(kitchen.showTheMenu());

// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
