function validate() {
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passwordElement = document.getElementById('password');
    let confirmPasswordElement = document.getElementById('confirm-password');
    let companyElement = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let companyNumberElement = document.getElementById('companyNumber');
    let submitBtn = document.getElementById('submit');
    let validDivElement = document.getElementById('valid');

    let usernameRegex = /[\w\d]{3,20}/;
    let emailRegex = /([\w\d.]+)\@[\w.]+/;
    let passwordRegex = /[\w\d_]{5,15}/;


    companyElement.addEventListener('click', showCompanyInfo);
    submitBtn.addEventListener('click', validate);

    function showCompanyInfo() {
        if (companyElement.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function validate(event) {
        event.preventDefault;

        if (!usernameRegex.test(usernameElement.value)) {
            usernameElement.style.borderColor = 'red';
        } else {
            usernameElement.style.borderColor = '';
        }   
        
        if (!emailRegex.test(emailElement.value)) {
            emailElement.style.borderColor = 'red';
        } else {
            emailElement.style.borderColor = '';
        }

        if (!passwordRegex.test(passwordElement.value)) {
            passwordElement.style.borderColor = 'red';
        } else {
            passwordElement.style.borderColor = '';
        }
        
        if (!passwordRegex.test(confirmPasswordElement.value) || 
        confirmPasswordElement.value !== passwordElement.value) {
            passwordElement.style.borderColor = 'red';
        } else {
            passwordElement.style.borderColor = '';
        }

        if (companyNumberElement == '' && 
        companyElement.checked) {
            companyNumberElement.style.borderColor = 'red';
        } else {
            companyNumberElement.style.borderColor = '';
        }

        let isInvalid = Array.from(document.querySelectorAll('input')).some(i => i.style.borderColor == 'red');

        if (isInvalid) {
            validDivElement.style.display = 'none';
        } else {
            validDivElement.style.display = 'block';
        }
    };
}
