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


//ou

let objetoPessoaModificado = Object.assign(pessoa, objGato);//objeto pessoa recebe as propriedades do objGato



//Forma mais simples de fazer o merge de objetos


let ob1 = {
    dvd_favorito:'calcinha preta'
};

let ob2 = {
    filme_favorito:'velozes e furiosos'
};

//Criamos um objeto que tem mais dois objetos dentro dele, mas não fizemos a junção propriamente
//dita dos elementos

/*
ob3 = {
    ob1,
    ob2
}

console.log(ob3);
*/


let ob3 = {
    ...ob1,
    ...ob2
};


console.log(ob3); 

//Sempre que eu quiser que o nome da minha propriedade seja o valor de uma variável, basta
//colocá-lo entre []

let variavel = 'estado';
let teste = {
    [variavel]:'rio de huezeiro'
};


//Getters e setters


//array de objetos



let arrayObj = [
    {
        nome:'joao',
        idade:27
    }, {
        nome:'pedro',
        idade:15
    }, {
        nome:'ana',
        idade:2
    }


];


console.log(arrayObj[0].nome, arrayObj[0].idade);

/*
let usuarioLoc = {
    posicao:0,
    atual:function(){
        return arrayObj[this.posicao];
    },
    proximo:function(){
        return ++this.posicao;
    },
    anterior:function(){
        return --this.posicao;
    }
};


console.log(usuarioLoc.atual());

usuarioLoc.proximo();

console.log(usuarioLoc.atual());

*/


//Se eu quiser chamar uma função como uma propriedade, uso a palavra reservada get



let usuarioLoc = {
    posicao:0,
    get atual(){
        return arrayObj[this.posicao];
    },
    set atual(posicao){
        this.posicao = posicao;
    },
    proximo:function(){
        return ++this.posicao;
    },
    anterior:function(){
        return --this.posicao;
    }
};

//desse modo

console.log(usuarioLoc.atual);
usuarioLoc.atual = 2;

console.log(usuarioLoc.atual);


//Salvando o estado das propriedades


let amor = {

   nome:'ana', 
   idade:38, 
   peso:90

}

//Extraindo as propriedades nome e idade do objeto amor
let { nome, idade } = amor;

console.log(nome, idade);

//Depois posso dar outro nome à variável


let {peso:excessoDeGostosura} = amor;

console.log(excessoDeGostosura);






