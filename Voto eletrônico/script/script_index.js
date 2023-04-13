var nomecand = document.getElementById('txtnome');
var numcand = document.getElementById('txtnum');
var lista = document.getElementById('lista');
var candidato = {};

function cadastrar(){
    candidato.nome = nomecand.value;
    candidato.numero = numcand.value;
    
    if(nomecand.value == '' || numcand.value == 0){
        window.alert('Dados inválidos ou inesistentes');
    } else{
        inserir(candidato.nome, candidato.numero);
        nomecand.value = '';
        numcand.value = '';
    }
}
function inserir(nome, num){
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Excluir';
    button.className = 'excluir';
    button
    var add = document.createElement('li');
    lista.appendChild(add);
    lista.appendChild(button);
    add.innerHTML = (`Nome: ${nome} - Número: ${num}`);
}
function finalizar(){
    window.alert('Você será direcionado para a tela de votação');
}

