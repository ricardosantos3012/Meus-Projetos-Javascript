const age = document.querySelector('.age');
const display = document.querySelector('.display');
display.innerText = '';

const clickButton = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;
        const currentDate = new Date;
        const formatDate = currentDate.toLocaleDateString('pt-br', {timezone: 'UTC'});
        const currentAge = Number(formatDate.value- age.value);
        console.log(formatDate);
        console.log(formatAge);

        if(element.classList.contains('check')) {
            if(age - formatDate < 18) {
                display.innerText = (`Você tem ${currentAge}, portanto ainda é de menor idade`);
            }
            display.innerText = (`Você tem ${currentAge}, portanto já é de maior idade`);
        }
    });
}

clickButton();