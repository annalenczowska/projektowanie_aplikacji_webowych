window.onload = function () {

    let existUserName = ['admin', 'user'];
    let userNameInput = document.getElementById('username');
    let usernameError = document.getElementById('username-error');

    document.getElementById('form').addEventListener('submit', function (e)) {
        e.preventDefault();

        if (validUser()){
            window.alert('Poprawnie wysłany formularz');
        }
    }
    function validUser() {
        let userValid = true;

        if(!checkRequiredInput(userNameInput)) {
            userValid = false;
            usernameError.textContent='Podaj nazwę użytkownika';
            usernameError.removeAttribute('hidden');
        } else if (!checkMinMaxLength(userNameInput, 3, 12)) {
            userValid = false;
            setErrorText('Nazwa użytkownika powinna mieć długosc od 3 do 12 znaków')
        } else if (checkExistUserName(userNameInput)) {
            userValid = false;
            setErrorText('Nazwa użytkownika została juz wykorzystana')
        } else {
            usernameError.setAttribute('hidden','');
        }


        return userValid;
    }
    checkRequiredInput(input) {
        return input.value.length > 0;
    }

    function checkMinMaxLength(input, min, max) {
        return.input.value.length >= min && input.value.length <= max;
    }

    function checkExistUserName(input) {
        return existUserName.includes(input.value);
    }

}