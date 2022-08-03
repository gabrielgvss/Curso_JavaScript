/* Operadores lógicos são ferramentas utilizadas pra checagem de mais 
de uma comparação, sendo eles:

- && -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO

Tabela verdade:
AND -> Todas as expressões necesssita, ser verdadeiras para que o retorno seja verdadeiro
VERDADEIRO && VERDADEIRO = TRUE
VERDADEIRO && FALSO = FALSE

OR -> Uma das expressões necessita ser verdadeira para que o retorno seja verdadeiro
VERDADEIRO || VERDADEIRO = TRUE
VERDADEIRO || FALSO = TRUE
FALSO || FALSO = FALSE

NOT -> Inverte uma expressão
!VERDADEIRO = FALSE
!FALSO = TRUE

*/

//exemplo:
let a = 141
let b = 139

console.log(a > 141 && b < 141); //false && true = false 
//false
console.log(a >= 141 || b<120); //true || false = true

console.log(!true);//inverte para verdadeiro
console.log(!false);//inverte para falso




