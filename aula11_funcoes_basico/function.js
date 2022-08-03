/* Funções são blocos de código REUTILIZÁVEIS com instruções para 
realização de ações específicas em determinado programa, podendo retornar
valor ou não. Na linguagem JS, são declaradas da seguinte maneira: */

function olaMundo(){   //identificação da função e atribuição de nome
    console.log("Olá, Mundo!,\n"); //corpo da função
}
//Neste caso, quando chamada, tal função executará a ação de exibir um 'Olá, Mundo'
olaMundo(); //chamada da função, onde será executada sua ação delimitada

function saudacao(nome) {
    console.log(`Bom dia, ${nome}`);
}
saudacao("Gabriel");
/* Tal função neste caso, necessita da passagem de um PARÂMETRO, um elemento de referência
que definirá a aplicação da mesma, sendo o parâmetro a str "Gabriel"*/

function somarNumeros(num1,num2){
    let soma = num1 + num2;
    return soma;
}
//console.log(soma); - ERRADO
/* No caso acima, se tentarmos imprimir a variavel soma, o programa gera um erro de "soma is not defined",
o que acontece pois as variaveis criadas numa função tem seu proprio ESCOPO, isto é, sua área de atuação limitada
à própria função. Para resolver isto, adicionamos a função um RETORNO, onde em sua execução a mesma irá
gerar o retorno do valor de 'soma' na chamada da função: */
console.log(somarNumeros(2,2),"\n");
//3 e 5 são os parâmetros e o retorno será a soma dos mesmos

function multiplicarNumeros(a = 5, b = 1){
    let multiplicacao = a*b;
    return multiplicacao;
}
/* Perceba que nesta função criada podemos definir os parâmetros com valores pré-estabelecidos, todavia
ao passar outros valores de referência na chamada da função, os mesmos serão redefinidos: */
console.log(multiplicarNumeros()); 
// Nenhum valor passado como parâmetro => Execução com valores pré-estabelecidos
console.log(multiplicarNumeros(10));
// Valor passado como parâmetro de 'a' apenas => Execução com novo parâmetro para 'a' e valor padrão para 'b'
console.log(multiplicarNumeros(10,5),"\n");
// Dois novos valores passados como parâmetros => Nova execução com novos valores

//Podemos também atribuir funções a variáveis:
const raiz = function (n) {
    return Math.sqrt(n);  //Retorna raiz quadrada
};
console.log(raiz(9));
console.log(raiz(25));
console.log(raiz(121),"\n");

//ARROW FUNCTION - Simplificação de funções:
const raizQuadrada = n => n ** 0.5;
// n -> parâmetro ; a seta define o corpo e retorno da função 
console.log(raizQuadrada(900));
console.log(raizQuadrada(4900));











