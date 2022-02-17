let {expect} = require('chai');
let {testNumbers} = require('./testNumbers');

describe("Tests …", () => {
    describe("Test sumNumber …", () => {
        it("shouldAcceptNumberParameters …", () => {
            expect(testNumbers.sumNumbers(1, 1)).to.be.equal('2.00');
            expect(testNumbers.sumNumbers(-1, 1)).to.be.equal('0.00');
            expect(testNumbers.sumNumbers(1.52, 2.5)).to.be.equal('4.02');
        });

        it('shouldNotAcceptNonNumberParams', () => {
            expect(testNumbers.sumNumbers(1, '0')).to.be.undefined;
            expect(testNumbers.sumNumbers('0', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers([], 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, [])).to.be.undefined;
            expect(testNumbers.sumNumbers([], [])).to.be.undefined; 
            expect(testNumbers.sumNumbers({}, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, {})).to.be.undefined;
            expect(testNumbers.sumNumbers({}, {})).to.be.undefined;
            expect(testNumbers.sumNumbers('0', '0')).to.be.undefined;
        });
     });
     
     describe('Test numberChecker', () => {
         it('shouldReturnEvenOrOdd' , () => {
             expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
             expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!');
         });

         it('shouldThrowAnError', () => {
             expect(() => testNumbers.numberChecker(NaN)).to.throw(Error, 'The input is not a number!');
             expect(() => testNumbers.numberChecker('smth')).to.throw(Error, 'The input is not a number!');
         });
     });

    describe('Test averageSumArray', () => {
        it('shouldReturnAvgSum', () => {
            expect(testNumbers.averageSumArray([5, 5, 5, 5, 5])).to.be.equal(5);
        });
    });
});
