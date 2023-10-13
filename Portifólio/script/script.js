const ul = document.querySelector('ul');

function clickBurguer() {
    if(ul.classList.contains('menu-bar')) {
        ul.classList.remove('menu-bar');
    } else {
        ul.classList.add('menu-bar');
    }
}