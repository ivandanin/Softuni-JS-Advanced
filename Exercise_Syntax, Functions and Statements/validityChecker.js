function check(x1, y1, x2, y2) {

    result(x1, y1, 0, 0);
    result(x2, y2, 0, 0);
    result(x1, y1, x2, y2);

    function result(x1, y1, x2, y2) {
    let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    let valid = Number.isInteger(distance) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${valid}`);
    }
}