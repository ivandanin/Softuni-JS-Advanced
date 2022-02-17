class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if (!Object.keys(this.priceForTheCamp).includes(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        } else {
    
            if (this.listOfParticipants.map(p => p.name).includes(name)) {
                return `The ${name} is already registered at the camp.`;

            } else if (this.priceForTheCamp[condition] > money) {
                return 'The money is not enough to pay the stay at the camp.';
                
            } else {
            
            this.listOfParticipants
            .push({name,
                 condition,
                  power: 100,
                   wins: 0});
            
            return `The ${name} was successfully registered.`;
            }
        }
    }

    unregisterParticipant(name) {
        let index = this.listOfParticipants.map(p => p.name).indexOf(name);
        if (index != -1) {
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`
        } else {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let first = this.listOfParticipants.find(p => p.name == participant1);
        let second = this.listOfParticipants.find(p => p.name == participant2);
        
        switch (typeOfGame) {
            case 'WaterBalloonFights':
            if (first && second) {
        
            if (first.condition !== second.condition) {
                throw new Error('Choose players with equal condition.');
            }

                if (first.power > second.power) {
                    first.wins++;
                    return `The ${first.name} is winner in the game ${typeOfGame}.`;

                } else if (second.power > first.power) {
                    second.wins++;
                    return `The ${second.name} is winner in the game ${typeOfGame}.`;

                } else {
                    return 'There is no winner.';
                }
            } else {
                throw new Error('Invalid entered name/s.');
            }
            case 'Battleship':
                if (first) {
                    first.power += 20;
                    return `The ${participant1} successfully completed the game ${typeOfGame}.`;
                } else {
                    throw new Error('Invalid entered name/s.');
                }
            }    
        }

    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;

        result += this.listOfParticipants
                        .sort((a,b) => b.wins - a.wins)
                        .map(p => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
                        .join('\n');

        return result;

    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson")); // not working properly eventually

// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
