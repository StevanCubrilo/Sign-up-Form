document.addEventListener('DOMContentLoaded', function () {
    var password = document.getElementById('password');
    var rptpassword = document.getElementById('rptpassword');
    var passwordError = document.querySelector('.password_error');

    function checkPasswordsMatch() {
        if (password.value !== rptpassword.value) {
        passwordError.style.display = 'block';
        password.classList.remove('passwords_match');
        rptpassword.classList.remove('passwords_match');
        } else {
        passwordError.style.display = 'none';
        password.classList.add('passwords_match');
        rptpassword.classList.add('passwords_match');
        }
    }

    password.addEventListener('input', checkPasswordsMatch);
    rptpassword.addEventListener('input', checkPasswordsMatch);
});