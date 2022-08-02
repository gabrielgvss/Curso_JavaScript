/* Em JS, há um objeto denominado Math, que, assim como o nome sugere, se
trata de funcionalidades matemáticas possíveis de serem realizadas na linguagem*/

//Math.floor() -> arredonda o número para um outro inteiro menor 
let numero = 12.4898;
console.log(Math.floor(numero));

//Math.ceil() -> arredonda o número para um outro inteiro maior
console.log(Math.ceil(numero));

//Math.round() -> arredonda o número para um outro inteiro maior ou menor, dependendo da proximidade 
console.log(Math.round(numero));
let numero1 = 12.5;
console.log(Math.round(numero1));

//Math.max() -> acha o maior número de uma sequência
console.log(Math.max(1,2,3,4,5,6,7,192192));//retorna o maior, no caso 192192

//Math.min() -> retorna o menor valor de uma sequência
console.log(Math.min(-1,-1,0,2,2));//

//Math.random() -> retorna um valor aleatório entre 0 e 1:
console.log(Math.random())
//Para que possamos definir um intervalo para inserção deste número aleatório, podemos:
//const aleatorio = Math.random() * (numero final limite - numero inicial limite) * numero inicial limite;
const aleatorio = Math.random() * (100-0) + 0
console.log(Math.floor(aleatorio));
//De tal maneira nunca passará de 100 e será maior que 0


