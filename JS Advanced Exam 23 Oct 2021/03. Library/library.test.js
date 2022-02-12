let {expect} = require('chai');
let {library} = require('./library');

describe('tests', () => {
    describe('test calcPriceOfBook function', () => {
        it('shouldReturnBookWith50%Discount', () => {
            expect(library.calcPriceOfBook('Book', 1979)).to.be.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 1980)).to.be.equal(`Price of Book is 10.00`);
        });

        it('shouldReturnBookWithNormalPrice', () => {
            expect(library.calcPriceOfBook('Book', 1989)).to.be.equals(`Price of Book is 20.00`);
            expect(library.calcPriceOfBook('Book', 1990)).to.be.equals(`Price of Book is 20.00`);
        });

        it('shouldThrowAnException', () => {
            // expect(library.calcPriceOfBook([], 1980)).to.throw(Error, 'Invalid input');
            // expect(library.calcPriceOfBook({}, 1980)).to.throw(Error, 'Invalid input');
            expect(() => (library.calcPriceOfBook(11, 1980))).to.throw(Error, 'Invalid input');
            expect(() => (library.calcPriceOfBook('Book', '1990'))).to.throw(Error, 'Invalid input');
            // expect(library.calcPriceOfBook([], '1980')).to.throw(Error, 'Invalid input');
            // expect(library.calcPriceOfBook({}, '1980')).to.throw(Error, 'Invalid input');
            // expect(library.calcPriceOfBook(11, '1980')).to.throw(Error, 'Invalid input');
        });
    });

    describe('test findBook function', () => {
        it('shouldThrowAnException', () => {
            expect(() => (library.findBook([], 'Troy'))).to.throw(Error, ("No books currently available"));
            
        });
        
        it('shouldWork', () => {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy'))
            .to.be.equals('We found the book you want.');
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Book'))
            .to.be.equals('The book you are looking for is not here!');
        });
    });

    describe('test arrangeTheBooks', () => {
        it('shouldThrowAnException', () => {
            expect(() => (library.arrangeTheBooks('5'))).to.throw(Error, 'Invalid input'); 
            expect(() => (library.arrangeTheBooks(-5))).to.throw(Error, 'Invalid input'); 
        });
        it('shouldWork', () => {
            expect(library.arrangeTheBooks(38)).to.be.equals('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.be.equals('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(42)).to.be.equals('Insufficient space, more shelves need to be purchased.');
        });
    });
});