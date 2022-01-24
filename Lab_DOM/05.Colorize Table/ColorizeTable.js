function colorize() {
    let rows = document.querySelectorAll('tr');
    let i = 0;
    for (const row of rows) {
        i++;
        if (i % 2 == 0) {
            row.style.background = 'teal';
        }
    }
}