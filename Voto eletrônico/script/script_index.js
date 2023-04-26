const registeredCandidates = [];
let whiteVote = 0;
let nullVote = 0;
const candidateName = document.querySelector('.candidate-name');
const candidateNumber = document.querySelector('.candidate-number');
const containerRegister = document.querySelector('.container-register');
const containerVote = document.querySelector('.container-vote');
const insertVote = document.querySelector('.insert-vote');
const ul = document.createElement('ul');
const ul2 = document.createElement('ul');
const displayMessage = document.querySelector('.alert');
const container = document.querySelector('.container');
const votePage = document.querySelector('.vote-page');

containerRegister.appendChild(ul);
containerVote.appendChild(ul2);

const candidates = (name, number) => {
    return {
        name: name,
        number: number,
        vote: 0
    }
}

const alertMessage = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;
        
        if(element.classList.contains('candidate-name')) {
            displayMessage.style.display = 'none';
            return;
        }
        if(element.classList.contains('candidate-number')){
            displayMessage.style.display = 'none';
            return;
        }
    });
}

const message = (text) => {
    displayMessage.innerText = `${text}`;
    displayMessage.style.display = 'block';
}

const clearCamp = () => {
    candidateName.value = '';
    candidateNumber.value = '';
}

const generateList = (name, number) => {
    const p = document.createElement('p');

    ul.appendChild(p);
    p.innerText = (`Nome: ${name} - Número: ${number}`);
}

const generateListTwo = (name, number) => {
    const p = document.createElement('p');

    ul2.appendChild(p);
    p.innerText = (`Nome: ${name} - Número: ${number}`);
}

const register = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;

        if(element.classList.contains('register')) {
            if(candidateName.value === '' || candidateNumber.value === '') {
                message('Preencha os campos corretamente para efetuar o cadastro');
                alertMessage();
                return;
            }
            if(isNaN(candidateNumber.value)) {
                message('Você deve inserir apenas números');
                candidateNumber.value = '';
                alertMessage();
                return;
            }
            registeredCandidates.push(candidates(candidateName.value, candidateNumber.value));
            generateList(candidateName.value, candidateNumber.value);
            generateListTwo(candidateName.value, candidateNumber.value);
            clearCamp();
            alertMessage();
        }
        if(element.classList.contains('finalize')) {
            if(registeredCandidates.length < 1) {
                message('Não há candidatos cadastrados para efetuar a votação.');
                alertMessage();
                return;
            }
            if(registeredCandidates.length < 2) {
                message('Você não pode realizar uma votação com apenas um candidato.');
                alertMessage();
                return;
            }
            alert('Você será direcionado para a tela de votação');
            container.style.display = 'none';
            votePage.style.display = 'block';
        }
        if(element.classList.contains('to-go-back')) {
            alert('Você será direcionado para a tela de cadastro e todos os dados serão perdidos.');

        }
        if(element.classList.contains('confirm')) {
            registeredCandidates.filter((value) => {
                if(value.number === insertVote.value) {
                    value.vote++;
                    insertVote.value = '';
                    return;
                }
                if(value.number != insertVote.value) {
                    nullVote ++; //O incremento está ocorrendo a cada iteração do laço, verificar.
                    insertVote.value = '';
                    console.log(nullVote);
                    alert('Você anulou seu voto.');
                    return;
                }
            });
        }
        if(element.classList.contains('white')) {
            whiteVote ++;
            alert('Você votou em branco.');
        }
    });
}

register();