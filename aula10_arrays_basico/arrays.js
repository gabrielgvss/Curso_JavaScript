/* Um array na linguagem JS é uma coleção de itens que se seguem ocupando
espaços de uma maneira ordenada no armazenamento da memória */
//ex:
let alunos = ['Lucas','Juca','Pedro','Cássia','Mirela','Cesar'];
console.log(alunos,"\n");

//Como visto anteriormente, cada item possui um índice, relativo a sua posição:
// indice = posição - 1
console.log(alunos[0]); // índice 0 = 1ªposição 
console.log(alunos[1]); //índice 1 = 2ªposição e assim por diante seguindo a mesma lógica
console.log("\n");

//Para consultar o tamanho de um array, utilizamos o método length:
console.log(`Qtd de elementos = ${alunos.length}`);//retorna qtd de elementos;

//É possível alterar o valor de uma array por meio de novas atribuições:
alunos[0] = 'Jairo';
console.log(alunos);
//Também é possível adicionar um novo elemento por nova atribuição neste caso:
alunos[6] = 'Novo Aluno';
console.log(alunos,);
// O mais ideal, porém, é a utilização do método push para adicionar um novo elemento no fim do array:
alunos.push('Gabigol');
console.log(alunos);
// Já para adicionar no início do array, movendo os demais para outras posições, usa-se unshift:
alunos.unshift('Primeiro aluno');
console.log(alunos,"\n");

//Já para remover elemento final de um array, podemos utilizar o método pop:
let removido = alunos.pop();
console.log(removido);//exibirá quem foi removido
console.log(alunos);//exibirá já com a remoção
// Podemos também utilizar delete para posições específicas, onde no lugar do elemento deletado fica um item vazio undefined
delete alunos[3];
console.log(alunos);
//Para remover o primeiro elemento utilizamos shift:
alunos.shift();
console.log(alunos,"\n");

//Podemos também utilizar alguns métodos já vistos anteriormente, como slice:
// ['Primeiro aluno','Jairo','Juca',<1 empty item>,'Cássia',Mirela','Cesar','Novo Aluno'] 
console.log(alunos.slice(0,4))//recortará os elementos do índice 0-3;
console.log(alunos.slice(0,-2));//recortará os elementos do índice 0 até (lenght-2), sem incluir o último;





