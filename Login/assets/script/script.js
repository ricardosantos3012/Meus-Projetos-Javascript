let user;
let passwordCurrent;

function cadastrarUsuario() {

    const nomeUser = document.querySelector('#login_user');
    const password = document.querySelector('#password_cad');
    const passwordRepeat = document.querySelector('#password_repeat');
    passwordRepeat.style = "border-color:white;";

    if(password.value !== passwordRepeat.value) {
        
        passwordRepeat.style = "border-color: red;";
        alert('A senha não confere.');
        passwordRepeat.focus();

    } else {
        
        user = nomeUser.value;
        let convert = (password.value * 1200) + 325;
        passwordCurrent = convert.toString(16);
        alert('Usuário Cadastrado com sucesso.');
        nomeUser.value = '';
        password.value = '';
        passwordRepeat.value = '';

    }

}

function userValid(user_valid, passw_valid) {
    const user = document.querySelector('#login');
    const password = document.querySelector('#password');
    let convert = parseInt(passw_valid, 16);
    let toCompare = (convert - 325) /1200;

    if(user.value === '' || password.value === '') {
       if(user.value === '') {
        alert('Você deve informar o nome de usuário.');
        user.focus();
       } else {
        alert('Você deve informar a senha.');
        password.focus();
       }
    } else if(user.value !== user_valid || Number(password.value) !== toCompare)  {
        alert('Usuário não encontrado.');
        user.value = '';
        password.value = '';
    } else {
        alert('Acesso liberado');
        user.value = '';
        password.value = '';
    }
}

function btn_cadstrar() {
    

    document.addEventListener('click', (event) => {

        const element = event.target;
        const divCadastro = document.querySelector(".cadastrar");
        const divLogin = document.querySelector(".login");

        if(element.classList.contains('btn_ncad')) {
            
            divLogin.style.display = "none";
            divCadastro.style.display = "block";

        }
        if(element.classList.contains('btn_exit')) {
            
            divLogin.style.display = "block";
            divCadastro.style.display = "none";
        }

        if(element.classList.contains('btn_cad')) {
            
            cadastrarUsuario();

        }

        if(element.classList.contains('btn_login')) {

            userValid(user, passwordCurrent);

        }
    })
}

btn_cadstrar();
