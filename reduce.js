
const numeros = [2, 4, 9, 109, 20, 30];

const reduceValues = numeros.reduce(function(valorAcumulador, valorArray){
    return valorAcumulador + valorArray;
}, 0);

console.log(reduceValues);


let alunos =  [

    {
        nome:'lucas',
        idade:27
    },
    {
        nome:'ana',
        idade:12
    }



];

const alunos_reduce = alunos.reduce(function(acc, currentValue){
    const p = currentValue.idade >= 18 ? 'maiores':'menores';

    acc[p].push(currentValue);


    return acc;



}, {menores:[], maiores:[]});


console.log(alunos_reduce);