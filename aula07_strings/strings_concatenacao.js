//concatenação("junção") de string:
let string = "oi";
let string1 = " tudo bem?";
let concatenacao = string+string1;// irá juntar duas strings como uma operação de soma;
console.log(concatenacao);

//também é possível concatenar por meio do método concat();
concatenacao = concatenacao.concat();
console.log(concatenacao);

//Por meio da utilização de template String também há possibilidade de concatenação: (mais recomendada);
console.log(`${string},${string1}`);//exibirá "oi, tudo bem?"


