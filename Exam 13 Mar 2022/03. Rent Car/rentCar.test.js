let {expect} = require('chai');
let {rentCar} = require('./rentCar');

describe('test of rentCar', () => {
    describe('test of searchCar', () => {
        it('should throw an Error', () => {
            expect(() => rentCar.searchCar('text', 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['text'], 'BMW')).to.throw(Error, 'There are no such models in the catalog!');
        });
        it('should return response', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equal(`There is 1 car of model BMW in the catalog!`);
        });
    });
    describe('test of calculatePriceOfCar', () => {
        it('should throw an Error', () => {
            expect(() => rentCar.calculatePriceOfCar(1, '10')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', '10')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Alfa Romeo', 10)).to.throw(Error, 'No such model in the catalog!');
        });
        it('should return price of car', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 10)).to.equal('You choose BMW and it will cost $450!');
        });
    });
    describe('test of checkBudget', () => {
        it('should throw an Error', () => {
            expect(() => rentCar.checkBudget('1', 1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, '1', 1)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 1, '1')).to.throw(Error, 'Invalid input!');
        });
        it('should return if it is possible to rent a car or not', () => {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(2, 1, 1)).to.equal('You need a bigger budget!');
        });
    });
});