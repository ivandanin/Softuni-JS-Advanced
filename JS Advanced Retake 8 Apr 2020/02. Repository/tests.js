let {Repository} = require("./solution.js");
let {expect} = require('chai');

describe("Tests …", () => {
    
    let instance = {}

	beforeEach(() => instance = new Repository({
		name: 'string',
		age: 'number',
		birthday: 'object'
	}));


    describe("Test add function", () => {
        it("shouldReturnID", () => {
            expect(instance.add({name: '', age: 1, birthday: {}})).to.be.equals(0);
        });

        it('shouldThrowAnError', () => {
            expect(() =>(instance.add({age: 1, birthday: {}}))).to.throw(Error, `Property name is missing from the entity!`);
        });
    });

    describe('Test getId function', () => {
        it('shouldThrowAnError', () => {
            expect(() => (instance.getId(1))).to.throw(Error, 'Entity with id: 1 does not exist!');
        });
        
        it('shouldReturnTheID', () => {
            expect(instance.getId(1)).to.be.equals(`{name: 'Pesho', age: 22, birthday: Wed Jan 07 1998 00:00:00 GMT+0200 (Eastern European Standard Time)}`);
        })
    });

    describe('Test update function', () => {
        it('shouldThrowAnError', () => {
            expect(() => instance.update(0, {})).to.throw(Error, 'Entity with id: 0 does not exist!');
        });
    });

    describe('Test del function', () => {
        it('shouldThrowAnError', () => {
            expect(() => instance.del(0)).to.throw(Error, 'Entity with id: 0 does not exist!');
        });
    });
});
