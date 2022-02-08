let {expect} = require('chai');
let {dealership} = require('./dealership');

describe("Tests …", function() {
    describe("Tests newCarCost method …", function() {
        it("testsIfOldCarIsReturned …", function() {
            expect(dealership.newCarCost('Audi A4 B8', 25000)).to.be.equals(10000);
        });

        it('shouldReturnFixedAmount', () => {
            expect(dealership.newCarCost('Audi A4 B8', 25000)).to.be.equals(10000);
            expect(dealership.newCarCost('Audi A6 4K', 20000)).to.be.equals(0);
            expect(dealership.newCarCost('Audi A8 D5', 25000)).to.be.equals(0);
            expect(dealership.newCarCost('Audi TT 8J', 25000)).to.be.equals(0);
        });

        it('shouldNotReturnFixedAmount', () => {
            expect(dealership.newCarCost('Alfa Umrelo', 1500)).to.be.equals(1500);
        });
     });

    describe('test carEquipment', () => {
        it('shouldReturnArrayWithAllTheExtras', () => {
            expect(dealership.carEquipment(['heated seats'], [0])).to.be.equals('heated seats');
        });

        it('shouldReturnUndefinedWithEmptyArray', () => {
            expect(dealership.carEquipment([], [0])).to.be.undefined;
        });

        it('shouldReturnArr', () => {
            let isArray = Array.isArray(dealership.carEquipment(['heated seats', 'sport package'], [1]));
            expect(isArray).to.be.true;
        });
    });

    describe('test euroCategory', () => {
        it('shouldGive5%Discount', () => {
            expect(dealership.euroCategory(5)).to.be.equals('We have added 5% discount to the final price: 14250.');
        });
        it('shouldNotGiveAnyDiscount', () => {
            expect(dealership.euroCategory(2)).to.be.equals('Your euro category is low, so there is no discount from the final price!');
        });
    });
});
