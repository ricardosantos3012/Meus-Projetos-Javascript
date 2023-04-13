const display = document.querySelector('.display');
display.value = 0;

const clickButton = () => {
    document.addEventListener('click', (event) => {
        const element = event.target;

        if(element.classList.contains('sum')) {
            display.innerText++;  
        }
        if(element.classList.contains('subtract')) {
            display.innerText--;
        }
        if(element.classList.contains('zero')) {
            display.innerText = 0;
        }
    });
}

clickButton();