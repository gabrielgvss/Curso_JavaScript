/* Os operadores de conversão servem justamente para mudar a tipagem de um 
dado de uma determinada variável a fim de impedir que haja a possibilidade 
de erro com o tratamento de dados no programa. São eles:
    >parseInt(variavel): passa o dado já numérico de uma variável para o tipo numérico Int - inteiro
    >parseFloat(variavel): passsa o dado já numérico de uma variável para o tipo numérico decimal Float
    >String(variavel): passa o dado de uma variável para o tipo String;
    >método toString();
    >método Number();
*/
//ex01: parseInt() e parseFloat()
let a = "450.79";
let b = parseInt(a);
let c = parseFloat(a);
console.log("A variável 'a', possui o valor",typeof(a),"'",a,"'");
console.log("Seu valor em Int",typeof(b),"é igual a",b);
console.log("Seu valor em Float",typeof(c),"é igual a",c);

//ex02: String()
let booleano = true;
let string = String(booleano);
console.log("\nA variável booleano é do tipo",typeof(booleano));
console.log("Seu novo tipo é",typeof(string));

//ex03: método toString();
console.log("\nA variável 'b', possui o valor Int",typeof(b),b,);
b = b.toString();
console.log("O novo tipo de b é igual a:",typeof(b));
/* No exemplo 01 e 02, criei outras variáveis para receber as conversões, porém no exemplo 03
demonstrei como também é possível apenas "atualizar" o novo tipo da variável sem necessitar de
outra*/

//ex04: Number()
console.log("\nA variável 'a' que antes era uma",typeof(a),"com valor",a);
a = Number(a);//transforma direto para Float
console.log("agora é do tipo Float",typeof(a),"com valor",a);
console.log(typeof(a));

//ex04.1:
booleano = Number(booleano);
console.log(typeof(booleano));
console.log(booleano);
/*Aqui utilizei a transformação de boolean para number. Sempre que for true o retorno será 1 e
sempre que for false o retorno será 0, pois essa é a representação numérica padrão de tais 
conceitos*/

