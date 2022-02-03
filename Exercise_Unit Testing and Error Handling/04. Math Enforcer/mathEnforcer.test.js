let {expect} = require('chai');
let mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('addShouldReturnCorrectResult', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
            expect(mathEnforcer.addFive(0.5)).to.be.equal(5.5);
        });

        it('addShouldReturnUndefined', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
    });

    describe('subtractTen', () => {
        it('subtractShouldReturnCorrectResult', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(-5.55)).to.be.closeTo(-15.55, 0.01);
        });

        it('subtractShouldReturnUndefined', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
    });

    describe('sum', () => {
        it('sumShouldReturnCorrectResult', () => {
            expect(mathEnforcer.sum(5, 0)).to.be.equal(5);
            expect(mathEnforcer.sum(-10, -10)).to.be.equal(-20);
            expect(mathEnforcer.sum(0.5, 9)).to.be.equal(9.5);
        });

        it('sumShouldReturnUndefined', () => {
            expect(mathEnforcer.sum('5', 1)).to.be.undefined;
            expect(mathEnforcer.sum('5', '5')).to.be.undefined;
            expect(mathEnforcer.sum([1, 2], 1)).to.be.undefined;
            expect(mathEnforcer.sum([1, 2], [1, 2])).to.be.undefined;
            expect(mathEnforcer.sum(1, [1, 2])).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
            expect(mathEnforcer.sum({}, {})).to.be.undefined;
        });
    });
});