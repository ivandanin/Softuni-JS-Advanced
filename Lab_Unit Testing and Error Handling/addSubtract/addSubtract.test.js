let {expect} = require('chai');
let createCalculator = require('./addSubtract');

describe('Calculate', () => {
    it('shouldReturnObject', () => {
        expect(createCalculator()).to.be.instanceOf(Object);
    });

    it('testIfContainsFunctions', () => {
        expect(createCalculator()).to.haveOwnProperty('add');
        expect(createCalculator()).to.haveOwnProperty('subtract');
        expect(createCalculator()).to.haveOwnProperty('get');
    });

    it('shouldTakeAParameterThatCanBeParsed', () => {
        let calc = createCalculator();
        calc.add(5);
        calc.add(5);

        expect(calc.get()).to.be.equal(10);
    });
    
    it('shouldBeNaNBecauseOfStringInsteadOfNumbers', () => {
        let calc = createCalculator();
        calc.add('ten');
        calc.add('10');
        
        expect(calc.get()).to.be.NaN;
    });

    it('testFunctionalityOfAddAndSubtract', () => {
        let calc = createCalculator();
        calc.add(10);
        calc.subtract(5);

        expect(calc.get()).to.be.equal(5);
    });

});