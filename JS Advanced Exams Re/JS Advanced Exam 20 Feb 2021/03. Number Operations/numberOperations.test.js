let {expect} = require('chai');
let {numberOperations} = require('./03. Number Operations_Resources');

describe('test of numberOperations', () => {
    describe('test powNumber function', () => {
        it('shouldReturnAPowedNumber', () => {
            expect(numberOperations.powNumber(4)).to.be.equals(16);
        });
    });

    describe('test numberChecker function', () => {
        it('shouldThrowAnError', () => {
            expect(() => (numberOperations.numberChecker(NaN))).to.throw(Error, 'The input is not a number!');
        });

        it('shouldReturnHowBigIsTheNumber', () => {
            expect(numberOperations.numberChecker(1)).to.be.equals('The number is lower than 100!');
            expect(numberOperations.numberChecker(100)).to.be.equals('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.be.equals('The number is greater or equal to 100!');
        });
    });

    describe('test sumArrays function', () => {
        it('shouldReturnTheArray', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.be.deep.equal([2, 4, 6]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, ])).to.be.deep.equal([2, 4, 3]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, -3])).to.be.deep.equal([2, 4, 0]);
        });
    });
});