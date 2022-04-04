//Atribuição via desestruturação (destructuring assignment)
//A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript
//que possibilita extrair dados de arrays ou objetos em variáveis distintas.

//ad hoc -> para isto/para esta finalidade

/* function recebeValores({id, nome}){
    alert(id);
    alert(nome);
}


let user = {
    id:1,
    nome:'lucas'
}


recebeValores(user);



//Object.keys(param) retorna um array de propriedades enumeráveis de um determinado objeto

console.log(Object.keys(user));

//Objects.values

console.log(Object.values(user)); */

let obj = {
    nome:'lucas',
    sexo:'macho',
    idade:9000
}

let props = Object.keys(obj);

for(let i = 0; i < props.length; i++){
    console.log(obj[props[i]]);
}

for(prop of props){
    console.log(obj[prop]);
}

for(prop in obj){
    console.log(obj[prop]);
}

//HasOwnProperty garante que a propriedade foi criada dentro mesmo do objeto






