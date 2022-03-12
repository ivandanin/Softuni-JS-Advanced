let {expect} = require('chai');
let {library} = require('./library.js');

describe('test' , () => {
    describe('test of calcPriceOfBook', () => {
        it('should throw an Error', () => {
            expect(() => (library.calcPriceOfBook(20, 20)).to.throw(Error, 'Invalid input'));
            expect(() => (library.calcPriceOfBook('name', '20')).to.throw(Error, 'Invalid input'));
        });
        
    });
});