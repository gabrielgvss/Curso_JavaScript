/* A definição de objetos pode ser dada similar a de um objeto da vida real,
sendo algo que representa uma entidade que possui estado e comportamento. 
Em JavaScript tais entidades abstratadas existem como tipagem de dados que
por sua vez possuem atributos(características) e métodos(funções próprias): */
//ex:

const caneta = {
    marca: 'Bic',
    tamanhoEmCm: 10,
    cor: 'Preta'
};
// Acima foi definido o objeto caneta, declarando seus atributos
console.log(typeof caneta);
console.log(caneta);
console.log(caneta.cor,"\n");

let dadosPessoais = {
    nome: "Fernando",
    sobrenome: "Dantas",
    idade: 29,
    endereco: 'Parque Timbira',
    confirmarDados(nome,sobrenome,idade,endereco) { //MÉTODO = FUNÇÃO PRÓPRIA DE UM OBJETO
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} e moro no(a)/em: ${this.endereco}`);
    }
};
dadosPessoais.confirmarDados(); //execução do método criado

//É possível também criar funções para instanciar objetos, como:
function preencherDados(nome,sobrenome,idade,endereco){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        endereco: endereco,
    };
}
let novosDados = preencherDados('Gabriel','Vinicius',18,'Residencial Sideral');
console.log(novosDados);







