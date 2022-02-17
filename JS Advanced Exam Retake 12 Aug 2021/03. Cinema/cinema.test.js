let {expect} = require('chai');
let cinema = require('./cinema');

describe('Test of Cinema', () => {
    describe('test showMovies function', () => {
        it('shouldReturnMovieArrayJoinedByComma', () => {
            expect(cinema.showMovies((['King Kong', 'The Tomorrow War', 'Joker'])))
            .to.be.equals('King Kong, The Tomorrow War, Joker');
        });

        it('shouldReturnNoMovies', () => {
            expect(cinema.showMovies([])).to.be.equals('There are currently no movies to show.');
        });
    });

    describe('test ticketPrice function', () => {
        it('shouldReturnPrice', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equals(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equals(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equals(5.50);
        });

        it('shouldThrowAnError', () => {
            expect(() => (cinema.ticketPrice('Student'))).to.throw('Invalid projection type.');
        });
    });

    describe('test swapSeatsInHall function', () => {
        it('shouldReturnImpossibleChange', () => {
            expect(cinema.swapSeatsInHall(undefined, 2)).to.be.equals('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(122, 2)).to.be.equals('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.5, 2.5)).to.be.equals('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 2)).to.be.equals('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 2)).to.be.equals('Unsuccessful change of seats in the hall.');
        });
       
        it('shouldChangeSeats', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.be.equals('Successful change of seats in the hall.');
        });
    });
});