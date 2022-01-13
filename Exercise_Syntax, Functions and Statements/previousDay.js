function printPreviousDay(year, month, day) {
    let date = new Date(`${year}-${month}-${day}`);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
printPreviousDay(2016, 10, 1);