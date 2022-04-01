//Objetos em Javascript são pares chave/valor entre chaves, como em Python


let usuario = {
    nome:'lucas',
    idade: 27
}


//console.log(usuario.nome);

//ou assim


//console.log(usuario['nome']);


//Mesmo depois que o objeto é criado, eu consigo adicionar novas propriedades/chaves


usuario.ano = 2019;

usuario.hobbies = ['viajar', 'sexo'];

//Posso colocar outro objeto dentro do objeto

usuario.competencias = {linguagens:['Python', 'C', 'Java']};


console.log(usuario);


let pessoa = {
    nome:'lucas',
    cachorro: {cor:'preto'}
};


console.log(pessoa);



let objGato = {
    gatoMia:function(meow){
       return `Ola ${meow}`;
    }
}


console.log(objGato.gatoMia('neweirewiruewoureuworoewu'));

//Podemos também abstrair a palavra reservada function, fazendo:

let objGato2 = {
    gatoMia(meow){
       return `Ola ${meow}`;
    }
}

console.log(objGato2.gatoMia('mewoerwelrew'));


let cor = 'amarelo';


let objNovo = {
    //mesma coisa de deixar só o nome da variável
    //Redundância fazer cor:cor
    cor
}


console.log(objNovo.cor);

//Merge de dois ou mais objetos


let objPessoaGato = Object.assign({}, pessoa, objGato);


console.log(objPessoaGato.cachorro.cor);

