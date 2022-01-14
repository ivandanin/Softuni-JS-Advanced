function speedLimit(speed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    switch (area) {
        case 'motorway':
            if (speed <= motorwayLimit) {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
            } else {
                let difference = speed - motorwayLimit;
                let overLimit;

                if (difference <= 20) {
                    overLimit = ' - speeding';
                } else if (difference > 20 && difference <= 40) {
                    overLimit = ' - excessive speeding';
                } else {
                    overLimit = ' - reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit}${overLimit}`);
            }
            break;
        case 'interstate':
            if (speed <= interstateLimit) {
                console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
            } else {
                let difference = speed - interstateLimit;
                let overLimit;

                if (difference <= 20) {
                    overLimit = ' - speeding';
                } else if (difference > 20 && difference <= 40) {
                    overLimit = ' - excessive speeding';
                } else {
                    overLimit = ' - reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit}${overLimit}`);
            }
            break;
        case 'city':
            if (speed <= cityLimit) {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
            } else {
                let difference = speed - cityLimit;
                let overLimit;

                if (difference <= 20) {
                    overLimit = ' - speeding';
                } else if (difference > 20 && difference <= 40) {
                    overLimit = ' - excessive speeding';
                } else {
                    overLimit = ' - reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit}${overLimit}`);
            }
            break;
        case 'residential':
            if (speed <= residentialLimit) {
                console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
            } else {
                let difference = speed - residentialLimit;
                let overLimit;

                if (difference <= 20) {
                    overLimit = ' - speeding';
                } else if (difference > 20 && difference <= 40) {
                    overLimit = ' - excessive speeding';
                } else {
                    overLimit = ' - reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit}${overLimit}`);
            }
            break;
    }
}
