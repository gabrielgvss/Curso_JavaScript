/* Exercício 02:

>Tendo as variáveis a,b e c cujos valores equivalem respectivamente a
'A','B' e 'C', construa um programa que faça:
- a passagem do valor de b para a variável a;
- a passagem do valor de c para a variável b;
- a passagem do valor de a para a variável c;
exemplo de saída: {B, C, A}

*/

//resolução do exercício:
let a = 'A';
let b = 'B';
let c = 'C';

let d = a;//criação de nova variável para armazenar o valor de a = 'A';

a = b;//a = 'B'
b = c;//b = 'C'
c = d;//c = d = 'A'

console.log("{",a,b,d,"}");

