/* Exercício 02:

>Tendo as variáveis a,b e c cujos valores equivalem respectivamente a
'A','B' e 'C', construa um programa que faça:
- a passagem do valor de b para a variável a;
- a passagem do valor de c para a variável b;
- a passagem do valor de a para a variável c;
exemplo de saída: {B, C, A}

*/

/* Há também uma segunda maneira de ser construído tal programa, diferente
da maneira lógica apreentada no ex02.js.
Em tal resolução mais avançada, é feita a construção de um array com as três 
variáveis e depois apenas atribuído a ele os valores desejados em ordem para
cada elemento: 

*/
let a = 'A';
let b = 'B';
let c = 'C';

[a,b,c] = [b,c,a];

console.log([a,b,c]);
