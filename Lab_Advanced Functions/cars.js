function create(array) {
    let result = {};

    for (const element of array) {
        let tokens = element.split(' ');
        let command = tokens[0];
        let name = tokens[1];
        
        switch (command) {
            case 'create':
                    result[name] = {};

                if (tokens.length > 1) {
                    let inherit = tokens[2];
                    let parentName = tokens[3];

                    if (inherit) {
                        result[name] = Object.setPrototypeOf(
                            result[name],
                            result[parentName]);
                    }
                }
                break;

            case 'set':
                let key = tokens[2];
                let value = tokens[3];

                if (result[name] != undefined) {
                result[name][key] = value;
                }
                break;
                
            case 'print':
                let output = [];

                for (const element in result[name]) {
                    output.push(`${element}:${result[name][element]}`)
                }
                console.log(output.join(','));
                break;
        }
    }
}
create(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    // 'print c1',
    // 'print c2'
]);