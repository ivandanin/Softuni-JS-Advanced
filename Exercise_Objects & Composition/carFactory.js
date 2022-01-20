function assemble(assembler) {
    let car = {};
    let engine = {};
    let carriage = {};

    car.model = assembler.model;
    if(assembler.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (assembler.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (assembler.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    
    carriage.type = assembler.carriage;
    carriage.color = assembler.color;
    car.engine = engine;
    car.carriage = carriage;

    if (assembler.wheelsize % 2 == 0) {
        assembler.wheelsize -= 1;
    }
    let wheel = assembler.wheelsize;
    car.wheels = [wheel, wheel, wheel, wheel];

    return car;
}
assemble(
    { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 });