let {expect} = require('chai');
let isOddOrEven = require('./evenOrOdd');

describe('Check if the number is even or odd', () => {
    it('shouldReturnUndefined', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    
    it('shouldReturnUndefined', () => {
        expect(isOddOrEven([1, 2, 3])).to.be.undefined;
    });

    it('shouldReturnEven', () => {
        expect(isOddOrEven('13')).to.be.equal('even');
    }); 
    
    it('shouldReturnOdd', () => {
        expect(isOddOrEven('3')).to.be.equal('odd');
    }); 
});