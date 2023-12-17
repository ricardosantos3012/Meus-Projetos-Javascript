function primo(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

console.log(primo(5));