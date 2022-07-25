/* Na linguagem JS há, assim como em quase todas as linguagens, funções e
aparatos para tratamento do dado String:
*/

//utilização e exibição de aspas internas:
let string1 = "Utilização de 'aspas'"; 
console.log(string1);//exibirá aspas simples normalmente

let string2 = 'Utilização de "aspas"';
console.log(string2);//exibirá aspas duplas normalmente

let string3 = "Utilização de \"aspas\"";
//deve se utilizar barra invertida(\) para imprimir aspas duplas dentro de string com aspas duplas;
console.log(string3);


/* Na linguagem JS, as Strings são indexadas(cada caractere possui um índice).
ex: macaco (6 letras = 6 posições)
    012345 (6 índices)

    Todavia é importante ressaltar que o número do índice é diferente da posição que cada caracter ocupa
    na String, sendo:
    > n° do índice = posição - 1;
    > ex: macaco -> 1° posição tem índice 0, 2° posição tem índice 1, 3°posição tem índice 2 ...

    Assim sendo, se torna possível acessar diferentes caracteres de uma String
    por meio de seu índice:
*/
//ex01:
let string = "macaco"; 
console.log("\n");//apenas uma quebra de linha
console.log(string[0]);//imprimirá o caracter "m", da primeir a posição e índice 0;
console.log(string[5]);//imprimirá o caracter "o", da última posição e de índice 5;

//Também é possível utilizar o método char.At() para localizar um caracter específico;
console.log("\n");
console.log(string.charAt(2));//exibirá o "c";

//console.log(string[8]); 
//apontaria para undefined pois não há dados definidos em tal espaço de memória; 

//o Método indexOf() é úti para localização do índice de determinado elemento;
console.log(string.indexOf("a"));//exibirá o índice do primeiro "a" encontrado
console.log(string.indexOf('a',2));//exibirá o índice do segundo "a" a partir do índice do terceiro elemento("c");

//Já o método lastIndexOf() informa a localização do índice de determinado elemento fazenddo a busca de trás para frente;
console.log(string.lastIndexOf("a"));//exibirá o índice 3 correspondente ao último a de macaco;
console.log(string.lastIndexOf("c",3));//exibirá onde está a letra c de trás para frente a partir do índice 3;

//length -> define o tamanho de uma string;
console.log(string.length);// da o tamanho da string macaco = 6 índices = 6 caracteres = 6 posições;






