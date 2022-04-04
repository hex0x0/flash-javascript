let soma = (a, b) =>{
    return a + b;
}


console.log(soma(2, 4));




let mult = (a, b) => a*b;


console.log(mult(3, 4));


//Retornando objetos

let returnUser = () => (

    {
        nome:'ana',
        status:'casada'
    }

)

console.log(returnUser());


let addServer = (cidade) => (
    {
        cidade
    }

)

console.log(addServer('brasília'));


//se você não usar var na declaração da variável, o escopo dela é global