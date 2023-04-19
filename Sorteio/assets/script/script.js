const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
let num1, num2 = undefined;
const list = document.querySelector('.list');
const p = document.createElement('p');
const pp = document.createElement('p');
const prizeDraw = document.querySelector('.sorteio');

list.appendChild(p);
prizeDraw.appendChild(pp);

function clearinput () {
    number1.value = '';
    number2.value = '';
}

function register () {
    if (number1.value === '' || number2.value === ''){
        alert(`Os dados informados são inválidos`);
        clearinput();
    } else if (isNaN(number1.value) || isNaN(number2.value)) {
        alert(`Você deve inserir apenas números`);
        clearinput();
    } else if (Number(number1.value) > Number(number2.value)){
        alert(`O primeiro valor não pode ser maior que o segundo.`);
        clearinput();
    } else { 
        p.innerHTML = (`O intervalo de números informados é ${number1.value} até ${number2.value}`);
        num1 = number1.value;
        num2 = number2.value;
        clearinput();
    }
}

function toGenerateRandom (num1, num2) {
    num1 = Math.ceil(num1);
    num2 = Math.floor(num2);
    return Math.floor(Math.random() * (num2 - num1) + num1);
}

function raffle () {
    if (num1 === undefined || num2 === undefined) {
        alert(`Você não inseriu os dados necessários para o sorteio`);
    } else {
        pp.innerHTML = (`O número sorteado é ${toGenerateRandom(num1, num2)}`);
        console.log(num1, '',num2);
    }
}

function clearAll () {
    p.innerHTML = '';
    pp.innerHTML = '';
    num1, num2 = undefined;
}

