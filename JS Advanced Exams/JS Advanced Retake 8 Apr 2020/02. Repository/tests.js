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
    });
    
    describe('Test update function', () => {
        it('shouldThrowAnError', () => {
            expect(() => instance.update(0, {})).to.throw(Error, 'Entity with id: 0 does not exist!');
        });
        
        it('shouldThrowAnTypeErrorBecauseOfNumberInsteadOfName', () => {
            instance.add({ name: '', age: 0, birthday: {}, })
            expect(() => instance.update(0, {name: 1, age: 1, birthday: {}})).to.throw(TypeError);
        })
    });
    
    describe('Test del function', () => {
        it('shouldThrowAnError', () => {
            expect(() => instance.del(0)).to.throw(Error, 'Entity with id: 0 does not exist!');
            expect(() => instance.del(-1)).to.throw(Error, 'Entity with id: -1 does not exist!');
        });
        
        it('shouldDeleteIndex', () => {
            instance.add({name: '', age: 1, birthday: {}});
            instance.add({name: '', age: 1, birthday: {}});
            instance.del(1);
            expect(instance.data.has(1)).to.be.equals(false);
        });
    });

    describe('test count properties', () => {
        it('shouldReturnTheCountOfProperties', () => {
            expect(instance.count).to.be.equal(0);
        });
    });
});
