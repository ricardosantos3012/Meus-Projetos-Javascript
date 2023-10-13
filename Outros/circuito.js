const p1 = true;
const p2 = true;
const p3 = false;
const p4 = false;
const q1 = true;
const q2 = false;
const q3 = true;
const q4 = false;

function portaOu() {
    console.log(p1, 'or', q1, '=', p1 || q1);
    console.log(p2, 'or', q2, '=', p2 || q2);
    console.log(p3, 'or', q3, '=', p3 || q3);
    console.log(p4, 'or', q4, '=', p4 || q4);
}

function negacaoOu() {
    console.log(p1, 'nOr', q1, '=', !(p1 || q1));
    console.log(p2, 'nOr', q2, '=', !(p2 || q2));
    console.log(p3, 'nOr', q3, '=', !(p3 || q3));
    console.log(p4, 'nOr', q4, '=', !(p4 || q4));
}

function ouExclusivo() {
    console.log(p1, 'xor', q1, '=', !p1 || !q1);
    console.log(p2, 'xor', q2, '=', p2 || !q2);
    console.log(p3, 'xor', q3, '=', !p3 || q3);
    console.log(p4, 'xor', q4, '=', !(!p4 || !q4));
}

function nOrExclusivo() {
    console.log(p1, 'xor', q1, '=', !(!p1 || !q1));
    console.log(p2, 'xor', q2, '=', !(p2 || !q2));
    console.log(p3, 'xor', q3, '=', !(!p3 || q3));
    console.log(p4, 'xor', q4, '=', !(p4 || q4));
}

function portaE() {
    console.log(p1, 'and', q1, '=', p1 && q1);
    console.log(p2, 'and', q2, '=', p2 && q2);
    console.log(p3, 'and', q3, '=', p3 && q3);
    console.log(p4, 'and', q4, '=', p4 && q4);
}

function negacaoE() {
    console.log(p1, 'nAnd', q1, '=', !(p1 && q1));
    console.log(p2, 'nAnd', q2, '=', !(p2 && q2));
    console.log(p3, 'nAnd', q3, '=', !(p3 && q3));
    console.log(p4, 'nAnd', q4, '=', !(p4 && q4));
}

function negacao() {
    console.log(p1, '= ~', !p1);
    console.log(p3, '= ~', !p3);
}

console.log('Porta lógica OU (OR)');
portaOu();
console.log('-------------------------------');
console.log('Porta lógica NEGAÇÃO OU (NOR)');
negacaoOu();
console.log('-------------------------------');
console.log('Porta lógica OU EXCLUSIVO (XOR)');
ouExclusivo();
console.log('-------------------------------');
console.log('Porta NÃO OU EXCLUSIVO (NXOR)');
nOrExclusivo();
console.log('-------------------------------');
console.log('Porta lógica E (AND)');
portaE();
console.log('-------------------------------');
console.log('Porta lógica NEGAÇÃO E (NAND)');
negacaoE();
console.log('-------------------------------');
console.log('Porta lógica NEGAÇÃO (NOT)');
negacao();