let {expect} = require('chai');
let isSymmetric = require('./checkForSymmetry');

describe('Check if symmetric', () => {
    it('shouldReturnFalseIfArgumentIsNotCorrectType', () => {
        expect(isSymmetric(1, 5)).to.be.false;
    });

    it('shouldReturnTrueIfArrayIsSymmetric', () => {
        expect(isSymmetric([4, 2, 2, 4])).to.be.true;
    });

    it('shouldReturnFalseIfArrayIsNotSymmetric', () => {
        expect(isSymmetric([4, 2, 2, 2])).to.be.false;
    });
    
    it('shouldReturnFalseIfArrayContainsDifferentType', () => {
        expect(isSymmetric([4, 2, 2, '4'])).to.be.false;
    });
    
    it('shouldReturnFalseIfArrayContainsOnlyOneElement', () => {
        expect(isSymmetric([4])).to.be.false;
    });
});