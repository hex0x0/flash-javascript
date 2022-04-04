//This assume uma referência ao objeto mais importante que é o Window

console.log(this);

//Uma função comum herda o escopo do objeto pai

function usuario(){
    //console.log(this);
    this.nome='lucas';
    this.idade=27;
}

//Quando usamos new, passamos a fazer referência exclusivamente ao objeto em questão


//new usuario();
//console.log(new usuario());

let usuarioValues = new usuario();

console.log(usuarioValues.nome);

//O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.

let person = {
    nome:'lucas'
}

function personagem(){
    console.log(this);
}

personagem.call(person);




//O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).


personagem.apply(person, [21, 4, 5]);


//Retorna uma nova function


let retorno = personagem.bind(person, 'Ola', 'mundo', '!');















