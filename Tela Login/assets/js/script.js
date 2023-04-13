const insertUser = document.querySelector('.insert-use');
const insertPassword = document.querySelector('.insert-pass-user');
const confirmPassword = document.querySelector('.confirm-pass-user');
const idUser = document.querySelector('.id-user');
const passUser = document.querySelector('.pass-user');

let user = [];
let creatUser = (user, password) => {
    return {
        user: user, password: password
    };
}

document.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('confirm')) {
        if(insertPassword.value != confirmPassword.value){
            alert('A senha não confere');
            clearPassword();
        }
        user.push(creatUser(insertUser.value, insertPassword.value));
        clearUser()
        clearPassword();
        alert('Usuário cadastrado com sucesso');
        window.history.back();
    }
    if (element.classList.contains('cancel')) {
        clearUser();
        clearPassword();
        alert('Você será redirecionado para a página de login');
        window.history.back();
    }
})

const clearPassword = () => {
    insertPassword.value = '';
    confirmPassword.value = '';
}
const clearUser = () => {
    insertUser.value = '';
}