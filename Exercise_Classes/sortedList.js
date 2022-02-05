class List {

    constructor() {
        this.data = [];
        this.size = 0;
    }
    add(number) {
        this.data.push(number);
        this.size++;
        this.sortArray();
    }

    remove(index) {
        this.checkIfPresent(index);
        this.data.splice(index, 1);
        this.size--;
        this.sortArray();
    }

    get(index) {
        this.checkIfPresent(index);
        
        return this.data[index];
    }

    sortArray() {
        this.data.sort((a, b) => a - b);
    };

    checkIfPresent(index) {
        if (index < 0 || this.data[index].length) {
            throw new Error('The index is out of bounds');
        }
    };
}

let list = new List();

list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));

list.add(5);
list.add(6);
list.add(7);


console.log(list.size);