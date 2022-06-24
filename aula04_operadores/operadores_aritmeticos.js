/*  A utilização dos operadores aritméticos em JavaScript se dá de maneira semelhante
ao padrão utilizado na programação em geral, tal qual:
    - adição: + (pode se comportar como concatenação dependendo do tipo de dado)
    - subtração: -
    - divisão: /
    - resto da divisão: %
    - multiplicação: *
    - potenciação: **
A operação pode ser feita dentro de uma variável que recebe uma expressão numérica ou
dentro de uma própria função em si, tal qual:*/
//ex01:
let a = 10;
let b = a*2; //20
let c = b/a;//2
console.log(b,"dividido por ",a,"=",b/a); //ou
console.log(b,"dividido por ",a,"=",c);

//ex02:
console.log(a,"elevado a 2 é igual a",a**2);

/*Em JavaScript, assim como na matemática, há uma ordem de precedência nas operações, sendo:
1) Multiplicação / Divisão
2) Soma / Subtração
Para especificar a precedência de operações, é recomendável o uso de parênteses '()'*/
//ex03:
let d = (a+b*c+b);// primeiro será feito (b*c), depois (a + b*c) e depois (a+b*c)+b
let d1 = ((a+b)*(c+b));// primeiro será feito (a+b) e (c+b), e, logo após, (a+b)*(c+b)
console.log(d);//70
console.log(d1);//660



