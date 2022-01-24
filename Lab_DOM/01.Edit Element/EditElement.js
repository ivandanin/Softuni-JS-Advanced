function editElement(element, match, replacer) {

    //without regex
    while (element.textContent.includes(match)) {
    element.textContent = element.textContent.replace(match, replacer);
    }

    //with regex
    let pattern = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(pattern, replacer);
}