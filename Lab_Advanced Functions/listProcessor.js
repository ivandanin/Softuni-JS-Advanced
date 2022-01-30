function print(array) {

    let result = [];

    for (const element of array) {
        let tokens = element.split(' ');
        let func = tokens[0];
        let string = tokens[1];

        switch(func) {
            case 'add':
                result.push(string);
                break;
            case 'remove':
                result = result.filter((x) => x != string);
                break;
            case 'print':
                console.log(result.join(','));
        }
    }
}
print(['add hello', 'add again',
 'remove hello', 'add again', 'print']);