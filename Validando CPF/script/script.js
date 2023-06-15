// 705.484.450-52 * 070.987.720-03
const cpf = document.querySelector('.input-cpf');
const display = document.querySelector('.display');
let cpfClean = '';

const validCpf = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;

        if(element.classList.contains('valid-button')) {
            cpfClean = cpf.value.replace(/\D+/g, '');
            const cpfArray = [...cpfClean];
            let firstNumbers = cpfArray.splice(0, 9);
            firstNumbers = firstNumbers.map(Number);
            let sum = [];
            let j = 0;
            for(let i = 10; i >= 2; i--) {
                sum.push(firstNumbers[j] * i);
                j++;
            }
            let partialResult = sum.reduce((ac, vl) => ac += vl);
            partialResult = 11 - (partialResult % 11);

            if(partialResult > 9) partialResult = 0;

            firstNumbers.push(partialResult);
            
            j = 0;
            sum = [];
            for(let i = 11; i >= 2; i--) {
                sum.push(firstNumbers[j] * i);
                j++;
            }
            partialResult = sum.reduce((ac, vl) => ac += vl);
            partialResult = 11 - (partialResult % 11);

            if(partialResult > 9) partialResult = 0;

            firstNumbers.push(partialResult);
            let cpfComparator = firstNumbers.join('');
            
            if(cpfComparator === cpfClean) {
                display.innerHTML = 'CPF Válido';
                display.style.display = 'block';
            } else {
                display.innerHTML = 'CPF inválido';
                display.style.display = 'block';
            }
         }
         if(element.classList.contains('input-cpf')) {
            cpf.value = '';
            display.style.display = 'none';
         }
    })
}

validCpf();