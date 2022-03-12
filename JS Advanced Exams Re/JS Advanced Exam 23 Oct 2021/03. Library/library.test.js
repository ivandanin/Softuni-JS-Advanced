let {expect} = require('chai');
let {library} = require('./library.js');

describe('test' , () => {
    describe('test of calcPriceOfBook', () => {
        it('should throw an Error', () => {
            expect(() => (library.calcPriceOfBook(20, 1980)).to.throw(Error, 'Invalid input'));
            expect(() => (library.calcPriceOfBook('name', '1980')).to.throw(Error, 'Invalid input'));
        });
        it('should return if the book is written before or after 1980', () => {
            expect(library.calcPriceOfBook('book', 1979)).to.be.equal(`Price of book is 10.00`);
            expect(library.calcPriceOfBook('book', 1980)).to.be.equal(`Price of book is 10.00`);
            expect(library.calcPriceOfBook('book', 1990)).to.be.equal(`Price of book is 20.00`);
            expect(library.calcPriceOfBook('book', 1999)).to.be.equal(`Price of book is 20.00`);
        });
    });
    describe('test of findBook', () => {
        it('should throw an Error', () => {
            expect(() => (library.findBook([], 'book')).to.throw(Error, 'No books currently available'));
        })
        it('should search the book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'book')).to.be.equal("The book you are looking for is not here!");
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto')).to.be.equal("We found the book you want.");
        });
    });
    describe('test of arrangeTheBooks', () => {
        it('should throw an Error', () => {
            expect(() => (library.arrangeTheBooks(3.14))).to.throw(Error, 'Invalid input');
            expect(() => (library.arrangeTheBooks('2'))).to.throw(Error, 'Invalid input');
            expect(() => (library.arrangeTheBooks(-2))).to.throw(Error, 'Invalid input');
        });
        it('should return if there is or is not empty space', () => {
            expect(library.arrangeTheBooks(34)).to.be.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(43)).to.be.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
});