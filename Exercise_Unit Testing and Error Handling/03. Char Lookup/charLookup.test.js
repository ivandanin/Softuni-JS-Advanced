let {expect} = require('chai');
let lookupChar = require('./charLookup');

describe('Retrieve a character', () => {
    it('shouldReturnCharAtSpecificIndex', () => {
        expect(lookupChar('str', 1)).to.be.equal('t');
    });

    it('shouldReturnIncorrectIndex', () => {
        expect(lookupChar('str', -33)).to.be.equal('Incorrect index');
        expect(lookupChar('str', 33)).to.be.equal('Incorrect index');
    });
    
    it('shouldReturnUndefined', () => {
        expect(lookupChar('str', 'r')).to.be.undefined;
        expect(lookupChar(1, 'r')).to.be.undefined;
        expect(lookupChar('str', 33.3)).to.be.undefined;
        expect(lookupChar('str', 'str')).to.be.undefined;
        expect(lookupChar('str', {})).to.be.undefined;
        expect(lookupChar({}, 'str')).to.be.undefined;
        expect(lookupChar([], 'str')).to.be.undefined;
        expect(lookupChar([1], 1)).to.be.undefined;
        expect(lookupChar([1], [1])).to.be.undefined;
        expect(lookupChar({}, [1])).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;
        expect(lookupChar({}, {})).to.be.undefined;

    });
   
})