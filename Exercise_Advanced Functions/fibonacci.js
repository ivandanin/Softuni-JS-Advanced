function getFibonator() {

    let [curr, next] = [0, 1];

    return () => {
        let sum = curr + next;
        curr = next;
        next = sum;

        return curr;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13