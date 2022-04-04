//Métodos para manipular array




//Método sem o map
const numeros = [2, 3, 6, 5, 10];


let novoArray = [];

for(let i = 0; i < numeros.length; i++){
    novoArray.push(numeros[i]*2);
}

console.log(novoArray);


const arrayMap = numeros.map(function(n){
    return n*2;
});

console.log(arrayMap);

//Com arrow function

const ArrayArrow = numeros.map((n) => n*2);

console.log(ArrayArrow);

const nomes = ['LUCAS', 'PEDRO', 'ANA'];

const nomesLowerCase = nomes.map((nome)=>nome.toLowerCase());


console.log(nomesLowerCase);







