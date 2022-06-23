       /* Tipos primitivo em JS */
//variaveis = espaços da memória do computador que guardam dados.

/*tipos de dados básicos em programação:
- char: caracteres, como "c" ou " " ou "A" e etc.
- string: conjunto de caracteres como "abcdefg", "Pedro", "12345".
- int(inteiro): conjunto de dados numéricos do tipo inteiro, como "2" ou "450".
- float: conjunto de dados com possibilidade decimal, como "9.87".
*/

/* tipos de variável em JavaScript
- var: variável de acesso global no programa;
- let: variável com escopo do bloco de código na qual foi declarada (loop, função, condicional,etc);
- const: funciona parecido com o let, porém possuindo valor fixo.

/* Criação de Variáveis:
- let/var(maneira mais antiga);
- let nomedavariavel = dadosdavariavel ou let nomedavarivel;(Há a possibilidade de inicializar aa mesma sem valor prévio);
- o nome da variavél não pode:
    >utilizar uma palavra reservada da linguagem;
    >possuir espaços em branco;
    >começar com números ou letra maiúscula;
- Case sensitive: modelo de letra apresenta diferença. ex: nomeCliente != nomecliente;
- é melhor que o nome da variável seja significativo;
- nomeVariavel, idadeAlunos, notasTrabalho -> modelo padrão;
ex: */
let nome = "Gabriel Vinícius";
let idade = 18;
let sexo = 'M';
let cidade = "São Luís";

console.log("O morador de",cidade,"que se chama",nome,"possui",idade,"e é do sexo",sexo);
//ou:
let age;
age = 17+1;
console.log("Tenho",age,"anos");



