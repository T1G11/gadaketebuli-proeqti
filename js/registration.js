let registerBtn = document.getElementById('registration-btn');

const removeErrorMessage = (errorFieldId) => {
    document.getElementById(errorFieldId).innerHTML = "";
}

document.getElementById('firstname').addEventListener('change', () => removeErrorMessage('firstname-input-error'));
document.getElementById('lastname').addEventListener('change',() => removeErrorMessage('lastname-input-error'));
document.getElementById('email').addEventListener('change',() => removeErrorMessage('email-input-error'));
document.getElementById('password').addEventListener('change',() => removeErrorMessage('password-input-error'));
document.getElementById('confirm-password').addEventListener('change',() => removeErrorMessage('confirm-password-error'));


const isCorrectEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const validateFirstNameField = () => {
    let field = document.getElementById('firstname');
    let value = field.value

    if (value.length == 0) {
        let errorField = document.getElementById('firstname-input-error');
        errorField.innerHTML = "The First name field is required."
    }

}

const validateLastNameField = () => {
    let field = document.getElementById('lastname');
    let value = field.value

    if (value.length == 0) {
        let errorField = document.getElementById('lastname-input-error');
        errorField.innerHTML = "The Last name field is required."
    }
}



const validateEmailField = () => {
    let field = document.getElementById('email');
    let errorField = document.getElementById('email-input-error');
    let value = field.value

    if (value.length == 0) { 
        errorField.innerHTML = "The Email field is required."
    }
    if(!isCorrectEmail(value)){
        errorField.innerHTML = "Please enter a valid email address."
    }

}


const validatePasswordField = () => {
    let field = document.getElementById('password');
    let value = field.value

    if (value.length == 0) {
        let errorField = document.getElementById('password-input-error');
        errorField.innerHTML = "The Password field is required."
        return;
    }

    if (value.length < 8) {
        let errorField = document.getElementById('password-input-error');
        errorField.innerHTML = "Please enter minimum 8 symbols."
    }


}
const validateConfirmPasswordField = () => {
    let confiramtion = document.getElementById('confirm-password');
    let password = document.getElementById('password');
    let value = confiramtion.value
    let errorField = document.getElementById('confirm-password-error');

    if (value.length == 0) {
        errorField.innerHTML = "The confiramtion password field is required."
        return;
    }

    if (value.length < 8) {
        let errorField = document.getElementById('confirm-password-error');
        errorField.innerHTML = "Please enter minimum 8 symbols."
    }

    if(confiramtion.value !== password.value && password.value.length > 0){
        errorField.innerHTML = "The passwords doesn't match."
    }


}




const validateFields = () => {
    validateFirstNameField();
    validateLastNameField();
    validateEmailField();
    validatePasswordField();
    validateConfirmPasswordField();
}



registerBtn.addEventListener('click', function () {
    validateFields();
});