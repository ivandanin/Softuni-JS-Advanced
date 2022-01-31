function displayArguments() {

    let data = {};

    Array.from(arguments).forEach(x => {
        let type = typeof x;
        console.log(`${type}: ${x}`);

        if (!data[type]) {
            data[type] = 0;
        }
        data[type]++;
    });

    Object.keys(data)
    .sort((a, b) => data[b] - data[a])
    .forEach(k => console.log(`${k} = ${data[k]}`));

}

displayArguments('cat', 'kur', 'jip', 42, function() {console.log('Hello world!');}, function() {console.log('Hello world!');})