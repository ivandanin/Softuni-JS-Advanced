function validate() {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = document.getElementById('email').textContent;

    if(!email.match(regex)) {
        document.getElementById('email').className = '.error';
    }
}