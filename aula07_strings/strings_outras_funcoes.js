//método replace() substitui determinado elemento da string por outro desejado;
let string = "Sopa de cebola";
console.log(string.replace("cebola","tomate"));//imprimirá a sopa de tomate, substituindo uma string por uma nova;

let string1 = "O rato roeu a roupa do rei de roma.";
console.log(string1.replace(/r/,"p"));//substutuirá apenas o primeiro r encontrado por p;
console.log(string1.replace(/r/g,"p"));//substituirá TODOS os "r" por p;

console.log(`A string "${string1}" possui ${string1.length} caracteres`);//.lenght - define tamanho da string;

//o rato roeu a roupa do rei de roma.
//0123456789
//slice() fatia a string até um determinado local.
console.log(string1.slice(32));//cortou da string do início até a posição 32;
console.log(string1.slice(-3));//irá cortar do 32(35-3) até o final;
console.log(string1.slice(-5,string1.length-1));//irá cortar do 30(35-5) até a posição final - 1;

//split -> divide a string na quantidade de arrays desejada;
console.log(string1.split("a",2)); //divide a string onde tiver a letra a em um array de 2 positions;

//toUpperCase() e toLowerCase(), transformam todos os caracteres, para maiúscula(upper) ou minúscula(lower)
console.log(string1.toUpperCase());

let a = "MAIUSCULA";
console.log(a.toLowerCase());




