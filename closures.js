//lexical scope
//memorização de escopo


function printName(){
    let name = 'lucas';


   return function(){
       return name;
    }

}



let fn = printName();

console.log(fn());

function minhaBiblioteca(){
    function auxiliar(valor){
        return 10 + valor;
    }
    return {
        add5(){
            return auxiliar(5)
        },
        add7(){
            return auxiliar(10);
        }
    }
}


var bb = minhaBiblioteca();


console.log(bb.add5());

//setTimeOut() executa um bloco de código x milissegundos depois

function inicializa(){
    let nome='Jose';


    setTimeout(function(){
        console.log(nome);
    },2000)

}

inicializa();


function printCompleteName(name){
    return function(){
        console.log(name);
    }
}

function init(){
    let name = 'lucas';


    setTimeout(printCompleteName(name), 2000);



}

init();

