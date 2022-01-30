function create(array) {
    let result = {};

    for (const element of array) {
        let el = element.split(' ');
        let command = el[0];
        let name = el[1];
        
        switch (command) {
            case 'create':
                    result.name = name;

                if (el.length > 1) {
                    let inherit = el[2];
                    let parentNode = el[3];

                    inherit = result;
                    inherit.parentNode = parentNode;
                }
                break;
            case 'set':
                let key = el[2];
                let value = el[3];
                
                result[key] = value;
                break;
            case 'print':
                let output = [];

                for (const element in result[name]) {
                    output.push(`${element}:${result[name][key]}`)
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
    'print c1',
    'print c2'
]);