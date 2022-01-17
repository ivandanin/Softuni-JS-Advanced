function addOrRemove(input) {
    let array = [];
    let num = 1;
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'add':
                array.push(num);
                break;
                case 'remove':
                    array.pop();
                    break;
                }
                num++;
    }
    if (array.length == 0) {
        console.log("Empty");
    }
    console.log(array.join('\n'));
}
addOrRemove(['add', 'add', 'remove', 'add', 'add']);