function validate() {  
    let regex = /[a-z]+@[a-z]+.[a-z]+/;
    let email = document.getElementById('email');

    email.addEventListener('change', func)
    
    function func(event){
        if(regex.test(email.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}