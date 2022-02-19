let {expect} = require('chai');
let {flowerShop} = require('./flowerShop');

describe('test', () => {
    describe('test of calcPriceOfFlowers function', () => {
        it('shouldReturnTheValueAndQuantityOfFlowers', () => {
            expect(flowerShop.calcPriceOfFlowers('kitka', 5, 1)).to.be.equals(`You need $5.00 to buy kitka!`);
        });
        it('shouldThrowAnError', () => {
            expect(() => (flowerShop.calcPriceOfFlowers('kitka', '5', 1))).to.throw(Error, 'Invalid input!');
            expect(() => (flowerShop.calcPriceOfFlowers('kitka', 5, '1'))).to.throw(Error, 'Invalid input!');
        });
    });
    describe('test of checkFlowersAvalilable function', () => {
        it('shouldReturnIfFlowersAreAvailable', () => {
            expect(flowerShop.checkFlowersAvailable('kitka', ["Rose", "Lily", "Orchid"])).to.be
            .equals('The kitka are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.be
            .equals('The Rose are available!');
        });
    });
    describe('test of sellFlowers function', () => {
        it('shouldThrowAnError', () => {
            expect(() => (flowerShop.sellFlowers('kitka', 1))).to.throw(Error, 'Invalid input!');
            expect(() => (flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.5))).to.throw(Error, 'Invalid input!');
            expect(() => (flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 5))).to.throw(Error, 'Invalid input!');
            expect(() => (flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1))).to.throw(Error, 'Invalid input!');
        });
        
        it('shouldReturnFlowers', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.be.equals('Rose / Orchid');
        });
    });
});