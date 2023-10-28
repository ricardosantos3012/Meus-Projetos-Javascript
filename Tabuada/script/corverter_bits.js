function executa() {
    const value = document.querySelector('#value');
    const result = document.querySelector('#result');
    const p = document.createElement('p');
    result.appendChild(p);
    
    function multiplica(value1, value2) {
        
        return value1 * value2;
    }

    function exibe() {
        for(i = 1; i <11; i++) {
            p.innerHTML += value.value + 'X' + i + '= ' + multiplica(value.value, i) + '<br>';
        }
    }

    document.addEventListener('click', (event) => {
        const element = event.target;

        if(element.classList.contains('calcula')) {
            if(value.value === '') {
                alert('Você deve informar um número válido');
            } else {
                exibe();
                value.value = '';
            }
        }

        if(element.classList.contains('limpa')) {
            p.innerHTML = '';
        }
    })

}

executa();

