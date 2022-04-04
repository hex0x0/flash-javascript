var nome = 'lucas';


function imprimeNome(){
    //Nome é visível para function
    console.log(nome);
}

//mas se eu fizer assim, não é possível


function imprimeEndereco(){
    var endereco = 'Quadra 05 Conj. 09';
}

//console.log(endereco);//dá um erro 


//Porém, se eu fizer assim já é possível



function novoTesteEndereco(){
    endereco = 'Quadra 05 Conj. 09';
}

//console.log(endereco);


function imprimeThis(){
    console.log('imprime this', this);
}

function imprimeMensagem(){
    imprimeThis.call({msg:'Sou um objeto'});
}

function imprimeMensagem2(){
    imprimeThis.call(['sou um array']);

}


imprimeMensagem();
imprimeMensagem2();
imprimeThis();

//Procure evitar this

//Escopo léxico

function usuario(){
    var nome = 'lucas';
    console.log(nome);

    return function(nome){
        var sobrenome='correia'
        console.log(nome, sobrenome);
    }
}

let fn = usuario();

//O let só existe no bloco onde foi declarado



if(true){
    var idade = 2;
    let sexo = 'f';
}


console.log(idade);
//console.log(sexo);

var x = 0;

function foo() {
    var x = 10;
    return function() {
        return x;
    }
}
var bar = foo();

function baz() {
    var x = 20;
    console.log(x);
    console.log(bar());
}
baz(); // O que é retornado?

//Escopo dinâmico: só sabemos o valor da variável this em tempo de execução

