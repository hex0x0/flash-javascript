//Filter retorna um valor booleano (testa a validade)


//Sem usar o filter
let mult2 = [];

for(let i = 0; i < 10; i++){
   if(i % 2 === 0){
       mult2.push(i);
   }
}


const numeros = [2, 4, 9, 10, 20];


const numFiltrados = numeros.filter(function(numero){
    return numero % 2 === 0;
});


console.log(numFiltrados);


const mapFilter = numeros.filter(numero => numero % 2 == 0).map(numero => numero *100);

console.log(mapFilter);

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


