window.addEventListener('load', solution);

function solution() {

    let fNameElement = document.getElementById('fname').value;
    let emailElement = document.getElementById('email').value;
    let phoneElement = document.getElementById('phone').value;
    let addressElement = document.getElementById('address').value;
    let postCodeElement = document.getElementById('code').value;
    let submitBtn = document.getElementById('submitBTN');


    
    submitBtn.addEventListener('click', addInfo);
    
    function addInfo(event) {
        event.preventDefault();
        
        if(!fNameElement || !emailElement) {
            return;
        }
        
        let fNameLi = document.appendChild('li');
        let emailLi = document.appendChild('li');
        let phoneLi = document.appendChild('li');
        let addressLi = document.appendChild('li');
        let postCodeLi = document.appendChild('li');
        
        fNameLi.textContent = `Full name: ${fNameElement}`;
        emailLi.textContent = `Email: ${emailElement}`;
        phoneLi.textContent = `Phone Number: ${phoneElement}`;
        addressLi.textContent = `Address: ${addressElement}`;
        postCodeLi.textContent = `Postal Code: ${postCodeElement}`;
        
        let infoPreviewElement = document.getElementById('infoPreview');

        infoPreviewElement.appendChild(fNameLi);
        infoPreviewElement.appendChild(emailLi);
        infoPreviewElement.appendChild(phoneLi);
        infoPreviewElement.appendChild(addressLi);
        infoPreviewElement.appendChild(postCodeLi);

        fNameElement,
         emailElement,
          phoneElement,
           addressElement,
            postCodeElement = '';
        
        submitBtn.disabled = true;

        let editBtn = document.getElementById('editBTN');
        let continueBtn = document.getElementById('continueBTN');
        
        editBtn.disabled = false;
        continueBtn.disabled = false;
        

        editBtn.addEventListener('click', (event) => {
            event.preventDefault();

            while (infoPreviewElement.firstChild) {
                infoPreviewElement.removeChild(infoPreviewElement.firstChild);
            }

            fNameElement = fNameLi;
            emailElement = emailLi;
            phoneElement = Number(phoneLi);
            addressElement = addressLi;
            postCodeElement = Number(postCodeLi);

            submitBtn.disabled = true;
            editBtn.disabled = true;
            continueBtn.disabled = true;
        });

        continueBtn.addEventListener('click', (event) => {
            event.preventDefault();

            let mailDivElement = document.getElementById('block');
            while (mailDivElement.firstChild) {
                mailDivElement.removeChild(mailDivElement.firstChild);
            }

            let finalHeader = document.createElement('h3');
            finalHeader.textContent = 'Thank you for your reservation!';
            mailDivElement.appendChild(finalHeader);
        });
    }
}
