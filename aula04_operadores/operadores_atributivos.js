/* Na linguagem JavaScript é possível reduzir determinadas operações
não tão complexas, a incrementos, decrementos ou atribuições de mesmo
valor, sendo os principais:
> a++ : soma +1 ao valor de a
> a--: reduz -1 ao valor de a
> a+=b: soma +b ao valor de a
> a-=b: reduz - b ao valor de a
> a*=b multiplica *b ao valor de a
> a/=b: divide o valor de a/b    

*É importante atentar para a ordem da utilização destes elementos, pois:
a++ é diferente de ++a, assim como a = b++ é diferente de a = ++b
> ++a = primeiro realiza a operação e depois passa o valor para a;
> a++ primeiro aciona a variável e depois realiza a operação
*/
//ex01:
let a = 10;
let b = 5;
console.log(a++);//exibirá a = 10 e logo após somente realizará o incremento;
console.log(a--);//exibirá a = 11 devido ao incremento anterior e realizará o novo incremento;
console.log(a);//exibirá a = 10 devido ao decremento anterior;
console.log(++a);//primeiro realizará o incremento e já irá exibir o novo valor a = 11;
console.log(--a);//primeiro realizará o decremento e já irá exibir o novo valor a = 10;
console.log(a+=b);//a = 10+5 -> 15
console.log(a-=b);// a = 15-5 -> 10
console.log(a*=b);// a = 10*5 -> 50
console.log(a/=b);// a = 50/5 -> 10


