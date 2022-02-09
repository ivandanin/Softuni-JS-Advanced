let {expect} = require('chai');
let {dealership} = require('./dealership');

describe("Tests …", function() {
    describe("Tests newCarCost method …", function() {
        it("testsIfOldCarIsReturned …", function() {
            expect(dealership.newCarCost('Audi A4 B8', 25000)).to.be.equals(10000);
        });

        it('shouldNotReturnFixedAmount', () => {
            expect(dealership.newCarCost('Alfa Umrelo', 1500)).to.be.equals(1500);
        });
     });

    describe('test carEquipment', () => {
        it('shouldReturnArr', () => {
            let isArray = Array.isArray(dealership.carEquipment(['heated seats', 'sport package'], [1]));
            expect(isArray).to.be.true;
        });
    });

    describe('test euroCategory', () => {
        it('shouldGive5%Discount', () => {
            expect(dealership.euroCategory(5)).to.be.equals('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(4)).to.be.equals('We have added 5% discount to the final price: 14250.');
        });
        
        it('shouldNotGiveAnyDiscount', () => {
            expect(dealership.euroCategory(3)).to.be.equals('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(2)).to.be.equals('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(1)).to.be.equals('Your euro category is low, so there is no discount from the final price!');
        });
    });
});
