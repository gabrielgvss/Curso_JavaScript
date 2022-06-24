//comandos no navegador:

alert('MENSAGEM');//faz a exibição de uma caixa de mensagem no navegador;
window.alert("MENSAGEM ALERTA");
// faz a exibição de uma mensagem de alerta com o objeto window

window.confirm("Você confirma que visualizou a janela de alerta?");//ou apenas confirm();
/*exibe uma caixa de mensagem para o usuário para que este execute ou cancele
um comando por meio desta escolha.
>retorna true se a resposta escolhida for OK ;
>retorna false se a resposta escohida for Cancelar;  
*/

const confirmacao = confirm("Realmente deseja apagar?");
if(confirmacao == true){
    alert('APAGAREI');//exibirá uma janela com o retorno de confirmacao, true ou false
}else{
    alert('NÃO APAGAREI');
}
/*Usando uma condicional da para definir o rumo do que será feito na aplicação. Neste caso,
se o usuário escolher OK(retorno true) será exibida a mensagem na caixa do navegador('APAGAREI'),
senão, será exibido ('NÃO APAGAREI'); Assim sendo há a possibilidade de redirecionamentos e operações
com os dados e comandos do navegador*/


window.prompt("Digite seu nome:");
//abrirá uma caixa de texto para entrada de dados(input);

