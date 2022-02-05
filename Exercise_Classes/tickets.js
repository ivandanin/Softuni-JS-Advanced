function solve (tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    
    for (const ticket of tickets) {
        let [destination, price, status] = ticket.split('|');

        let currTicket = new Ticket(destination, Number(price), status);
        result.push(currTicket);
    }

    switch (criteria) {
        case 'price':
            result.sort((a, b) => a.price - b.price);
            break;
        default:
            result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
            break;
    }
    return result;
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');