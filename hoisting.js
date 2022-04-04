//Basicamente, toda as declarações de variáveis usando var são colocadas no topo do escopo da função/escopo local
//quando declaradas dentro da função  ao ao topo do escopo global  (se declaradas fora da função)
//Atalhos para comentar código no vscode
//shift+alt+a -> comenta todo código
//ctrl + : -> comenta linha a linha

console.log(a);
var a = 12;

//retorna undefined


//temporal dead zone
// console.log(ddd);
// let ddd = 061

//ReferenceError
//O mesmo acontece ao utilizarmos const

// var soma;

// console.log(soma(10, 5));

// soma = function(a, b){
//     return a + b;
    
// }

//typeError -> var is not a function


console.log(mult(3, 4));


function mult(a, b){
    return a*b;
}

//Sofre hoisting do escopo em que ela está (vai para o topo)



function testaHoisting(){
    console.log(`${nome} é perfeito`);
    var nome = 'lucas';
}


testaHoisting();


function calc(){


    return geraResultado();

    function soma(a, b){
        return a + b;
    }

    function geraResultado(){
        return soma(2, 4) / 3;
    }


}

console.log(calc());    