let {expect} = require('chai');
let {numberOperations} = require('./03. Number Operations_Resources');

describe('test of numberOperations', () => {
    describe('test of powNumber function', () => {
        it('should return the power', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
    });

    describe('test of numberChecker function', () => {
        it('should throw if isNaN', () => {
            expect(() => (numberOperations.numberChecker(NaN)).to.throw(Error, 'The input is not a number!'));
        });

        it('return lower, higher or equal to 100', () => {
            expect(numberOperations.numberChecker(98)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(198)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('test of sumArray function', () => {
        it('should return new array', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.be.deep.equal([2, 4, 6]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2,])).to.be.deep.equal([2, 4, 3]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, -3])).to.be.deep.equal([2, 4, 0]);
        });
    });
});
