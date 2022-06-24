/* Exercício 01:

> Faça um código para execução no navegador que permita com que o usuário
digite dois numeros e logo após mostre a soma entre os mesmos.

*/

//resolução ex01:
let num1 = (prompt("Digite um número:"));//input do 1°número;
num1 = Number(num1);//conversão
let num2 = (prompt("Digite outro número:"));//input do 2°número;
num2 = Number(num2);//conversão
let soma = num1+num2;//atribuição da soma dos números para uma variável;
alert(`A soma entre os números digitados é igual a ${soma}`);//exibição do resultado;
