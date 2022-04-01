/*
Para criar functions, utiliza-se a palavra reservada function

function ola(msg){
    alert(msg);
}



ola('ola mundo');


var msg = ola('ola mundo');

retorna undefined


function soma(n1, n2){
    return n1 + n2;
}


var  res = soma(2, 4);

alert(res);




*/



function somaArray(numeros){
    let soma = 0;
    for(num of numeros){
        soma += num;
    }

    return soma;
}


console.log(somaArray([1, 2, 3, 4, 5]));

/*Parameter rest -> nos permite representar um número indefinido de argumentos como um array*/


function somaArrayParameterRest(...arrayNumeros){
    let soma = 0;
    for(n of arrayNumeros){
        soma = soma + n;
    }

    return soma;
}

console.log(somaArrayParameterRest(2, 3, 5, 2));


/*De outra forma */

function valores(nome, idade, ...endereco){
    console.log(nome);
    console.log(idade);
    console.log(endereco); //isso é um array
}


valores('lucas', 'pedro', 'Quadra 05', 'Conj. 19', 'Lote 05', 'Setor Oeste');



//Funções autoinvocáveis
//Muito usado para proteger funções

(function meChamoSozinha(){
    console.log('me chamei');
}())


/*
(function mostraPares(){
    for(let i = 0; i < 50; i++){
        i % 2 === 0 ? alert(`Numero ${i} eh par`): alert(`Numero ${i} eh impar`);
    }
}())

*/

//Se uma variável recebe uma função então ela é uma função


let funcaoSomaDois = function soma(a, b){
    return a + b;
};

//Retorna 7
funcaoSomaDois(3, 4);


//Função anônima é uma função sem nome

let subtraiTres = function (a, b, c){
    return a - b - c;
}

//Retorna 0
subtraiTres(3, 2, 1);

//Funções callback 
//São funções que são passadas como parâmetros de outras funções e executadas dentro dela


function multiplica(a, b, fnCallBack){
    return fnCallBack(a*b);
}


let ret = multiplica(2, 4, function (total){
    return total / 2;
})

console.log(ret);


//Valores padrões

function somaX(a, b = 2){
    return a + b;
}


console.log(somaX(4));






