const candidates = [];
const candidateName = document.querySelector('.candidate-name');
const candidateNumber = document.querySelector('.candidate-number');

const clearCamp = () => {
    candidateName.value = '';
    candidateNumber.value = '';
    candidateName.focus();
}

const display = (name, number) => {
    const list = document.querySelector('.list');
    const listCand = document.createElement('p');

    list.appendChild(listCand);
    listCand.innerText += (`Nome: ${name} - Número: ${number}`);
}

const register =  () => {
    document.addEventListener('click', (event) => {
        const element = event.target;
    
        if (element.classList.contains('register')) {
            if(candidateName.value === '' || candidateNumber.value === '') {
                alert('Insira todos os dados para prosseguir com o cadastro');
                clearCamp();
                return;
            }
            if(isNaN(candidateNumber.value)) {
                alert('Você deve inserir apenas números');
                candidateNumber.value = '';
                return;
            }
            candidates.push({name: candidateName.value, number: candidateNumber.value});
            console.log(candidates);
            alert('Candidato cadastrado com sucesso');
            display(candidateName.value, candidateNumber.value);
            clearCamp();
        }
        if(element.classList.contains('finalize-registration')) {
            alert('Você será direcionado para a tela de votação');
        }
    });
}

register();