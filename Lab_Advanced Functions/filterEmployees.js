function filterEmployees(inputData, criteria) {

    let parsedInput = JSON.parse(inputData);

    if(criteria == 'all') {
        parsedInput.map((e, index) => `${index}. ${e.first_name} ${e.last_name} = ${e.email}`)
        .forEach(e => console.log(e));
    } else {
        let [key, value] = criteria.split('-');
        
        parsedInput.filter(employee => employee[key] == value)
        .map((e, index) => `${index}. ${e.first_name} ${e.last_name} - ${e.email}`)
        .forEach(e => console.log(e));
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'all');