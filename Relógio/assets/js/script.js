const displayClock = document.querySelector('.hour');
const displayDate = document.querySelector('.displayDate');

function clock () {
    const date = new Date();
    return date.toLocaleTimeString();
}

function displayDay () {
    const date = new Date();
    const formatDate = date.toLocaleDateString('pt-br', {timezone: 'UTC'});
    return displayDate.innerHTML = (`${formatDate}`);
}

const returnClock = setInterval(function () {
    displayDate.innerHTML = displayDay()
    displayClock.innerHTML = clock(); 
});
