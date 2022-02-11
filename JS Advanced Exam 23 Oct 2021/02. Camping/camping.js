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

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
    
        if (this.listOfParticipants.includes(name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > money) {
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

    unregisterParticipant(name) {
        
        if (!this.listOfParticipants.includes(name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } 

        this.listOfParticipants.pop(name);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        
        if (!this.listOfParticipants.includes(participant1) ||
         !this.listOfParticipants.includes(participant2)) {
            throw new Error('Invalid entered name/s.');
        }

        if (participant1[condition] !== participant2[condition]) {
            throw new Error('Choose players with equal condition.');
        }

        switch (typeOfGame) {
            case 'WaterBalloonFights':
                if (participant1[power] > participant2[power]) {
                    participant1[power]++;
                    return `The ${participant1} is winner in the game ${typeOfGame}.`;

                } else if (participant2[power] > participant1[power]) {
                    participant2[power]++;
                    return `The ${participant2} is winner in the game ${typeOfGame}.`;
                } else {
                    return 'There is no winner.';
                }

            case 'Battleship':
                participant1[power] += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = `${organizer} will take ${this.listOfParticipants.length} participants on camping to ${location}`;

        this.listOfParticipants.sort((a, b) => a[wins] - b[wins]).forEach(participant => {
            result += `${participant} - ${participant.condition} - ${participant.power} - ${participant.wins}`;
        })

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
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

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
