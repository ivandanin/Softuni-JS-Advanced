function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let tdArray = document.querySelectorAll('#customers tr td:nth-child(2)');
    
    for (const td of tdArray) {
        
        if (td.textContent == email) {
        td.parentNode.remove();
        document.getElementById('result').textContent = 'Deleted.'

        } else {
        document.getElementById('result').textContent = 'Not found.'
        }
    }
}