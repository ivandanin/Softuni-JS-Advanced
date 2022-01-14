function toUppercase(input) {

    let pattern = new RegExp(/\w+/g);
    let result = input.toUpperCase().match(pattern).join(', ');
    console.log(result);
}