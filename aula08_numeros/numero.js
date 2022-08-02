/* Assim como é realizado o tratamento de strings com funções e métodos na linguagem JS,
o mesmo pode ser feito com dados numéricos, porém com diferentes funcionalidades:
*/

// Método toString() -> converte o objeto do tipo numéricco para string
let num1 = 10;
let num2 = 11;
num2 = num2.toString();
console.log(num1 + num2);
console.log(typeof (num1+num2),"\n"); //a soma retornará um novo tipo concatenado de string

// Método toFixed() -> reduz a quantidade de casas decimais de determinado número
let numero_quebrado = 19.9182391273;
console.log(numero_quebrado.toFixed(2),"\n"); 
// Ocorrerá uma limitação a duas casas decimais junto a um arredondamento

// Método toInteger() -> verifica se o número é inteiro ou não
console.log(Number.isInteger(numero_quebrado));//retornará FALSE
console.log(Number.isInteger(num1),"\n"); //retornará TRUE

//Método isNaN() -> verifica se um dado não se encontra na forma numérica;
let palavra = "ola" * num1;
console.log(Number.isNaN(palavra));// retornará TRUE

//Na linguagem JS há determinada imprecisão no que tange a operações com números decimais:
let numero = 0.7;
let numero1 = 0.1;
let soma = numero + numero1;
console.log(soma);//A soma entre os dois deveria resultar em 0.8, porém devido a imprecisão, resulta em 0.7999...
//Para resolvermos esse problema, devemos utilizar para a soma Number(toFixed()) ou parsefloat(toFixed());
soma = parseFloat(soma.toFixed(2));
console.log(soma);//0.8

for(let i=0; i<5; i++){
console.log(soma+=soma);
}
//Todas as demais operações seguirão no padrão;
