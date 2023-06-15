class UrnaEletronica {
    constructor () {
        this.registeredCandidates = [];
        this.whiteVote = 0;
        this.nullVote = 0;
        this.candidateName = document.querySelector('.candidate-name');
        this.candidateNumber = document.querySelector('.candidate-number');
        this.containerRegister = document.querySelector('.container-register');
        this.containerVote = document.querySelector('.container-vote');
        this.insertVote = document.querySelector('.insert-vote');
        this.ul = document.createElement('ul');
        this.ul2 = document.createElement('ul');
        this.displayMessage = document.querySelector('.alert');
        this.container = document.querySelector('.container');
        this.votePage = document.querySelector('.vote-page');
        
        this.containerRegister.appendChild(this.ul);
        this.containerVote.appendChild(this.ul2); 
    }

    candidates (name, number) {
        return {
            name: name,
            number: number,
            vote: 0
        }
    }
    
    alertMessage() {
        document.addEventListener('click', (event) => {
            const element = event.target;
            
            if(element.classList.contains('candidate-name')) {
                this.displayMessage.style.display = 'none';
                return;
            }
            if(element.classList.contains('candidate-number')){
                this.displayMessage.style.display = 'none';
                return;
            }
        });
    }

    message(text) {
        this.displayMessage.innerText = `${text}`;
        this.displayMessage.style.display = 'block';
    }
    
    clearCamp() {
        this.candidateName.value = '';
        this.candidateNumber.value = '';
    }
    
    generateList(name, number) {
        const p = document.createElement('p');
    
        this.ul.appendChild(p);
        p.innerText = (`Nome: ${name} - Número: ${number}`);
    }
    
    generateListTwo(name, number) {
        const p = document.createElement('p');
    
        this.ul2.appendChild(p);
        p.innerText = (`Nome: ${name} - Número: ${number}`);
    }
    
    register() {
        document.addEventListener('click', (event) => {
            const element = event.target;
    
            if(element.classList.contains('register')) {
                if(this.candidateName.value === '' || this.candidateNumber.value === '') {
                    this.message('Preencha os campos corretamente para efetuar o cadastro');
                    this.alertMessage();
                    return;
                }
                if(isNaN(this.candidateNumber.value)) {
                    this.message('Você deve inserir apenas números');
                    this.candidateNumber.value = '';
                    this.alertMessage();
                    return;
                }
                this.registeredCandidates.push(this.candidates(this.candidateName.value, this.candidateNumber.value));
                console.log(this.registeredCandidates);
                this.generateList(this.candidateName.value, this.candidateNumber.value);
                this.generateListTwo(this.candidateName.value, this.candidateNumber.value);
                this.clearCamp();
                this.alertMessage();
            }
            if(element.classList.contains('finalize')) {
                if(this.registeredCandidates.length < 1) {
                    this.message('Não há candidatos cadastrados para efetuar a votação.');
                    this.alertMessage();
                    return;
                }
                if(this.registeredCandidates.length < 2) {
                    this.message('Você não pode realizar uma votação com apenas um candidato.');
                    this.alertMessage();
                    return;
                }
                alert('Você será direcionado para a tela de votação');
                this.container.style.display = 'none';
                this.votePage.style.display = 'block';
            }
            if(element.classList.contains('to-go-back')) {
                alert('Você será direcionado para a tela de cadastro e todos os dados serão perdidos.');
    
            }
            if(element.classList.contains('confirm')) {
                if(this.insertVote.value === '') {
                    this.whiteVote++;
                    alert(`Voto branco registrado.`);
                } else {
                    for(let value of this.registeredCandidates) {
                        if(value.number === this.insertVote.value) {
                            value.vote++;
                            alert(`Voto válido registrado`);
                            console.log(value);
                            this.insertVote.value = '';
                        }
                    }
                    for(let value of this.registeredCandidates) {
                        if(this.insertVote.value === '') {
                            return;
                        }
                        break;
                    }
                    for(let value of this.registeredCandidates) {
                        if(value.number !== this.insertVote.value) {
                            this.nullVote++;
                            alert(`Voto nulo registrado.`);
                            this.insertVote.value = '';
                            console.log(this.nullVote);
                        }
                        break;
                    }
                }
            }
        });
    }
}

const urna = new UrnaEletronica();

urna.register();