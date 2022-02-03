let {expect} = require('chai');
let rgbToHexColor = require('./rgbToHex');

describe('Create hex number', () => {
    it('testIfTypeIsString', () => {
        expect(rgbToHexColor(22, 11, 33)).to.be.string;
    });

    it('shouldReturnUndefinedWithNegativeValues', () => {
        expect(rgbToHexColor(-22, -11, -33)).to.be.undefined;
    });
    
    it('shouldReturnUndefinedWithNegativeValue', () => {
        expect(rgbToHexColor(-22, 11, 33)).to.be.undefined;
        expect(rgbToHexColor(22, -11, 33)).to.be.undefined;
        expect(rgbToHexColor(22, 11, -33)).to.be.undefined;
    });
    
    it('shouldReturnUndefinedIfAnyNumberIsOutOfRange', () => {
        expect(rgbToHexColor(2222, 11, 33)).to.be.undefined;
    });
    
    it('shouldReturnUndefinedIfTypeIsIncorrect', () => {
        expect(rgbToHexColor('222', 11, 33)).to.be.undefined;
    });
    
    it('shouldReturnUndefinedIfTypeIsIncorrect', () => {
        expect(rgbToHexColor(['a'])).to.be.undefined;
    });

    it('shouldReturnHexFormatAsString', () => {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });
    
    it('shouldReturnBlack', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    
    it('shouldReturnWhite', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
});