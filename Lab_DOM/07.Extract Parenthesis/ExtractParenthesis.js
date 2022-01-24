function extract(content) {
    let par = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(par);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(par);
    }
    return result.join('; ');
}