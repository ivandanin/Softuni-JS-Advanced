let {expect} = require('chai');
let sum = require('./sumOfNumbers');

describe('Sum Checker', () => {
    it('shouldReturnCorrectSum', () => {
        expect(sum([5, 5, 5])).to.be.equal(15);
        expect(sum([0])).to.be.equal(0);
    });
    
    it('shouldReturnNaNIfArrayContainsString', () => {
        expect(sum[1, 'a', 2]).to.be.NaN;
    });

    it('shouldReturnNaNIfArrayContainsOnlyStrings', () => {
        expect(sum['a', 'b', 'c']).to.be.NaN;
    });
});