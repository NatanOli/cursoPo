/* O cardápio de uma lanchonete é o seguinte:
Especificação   código  preço
Cachorro Quente 100     R$ 1,20
Bauru Simples   101     R$ 1,30
Bauro com Ovo   102     R$ 1,50
Hamburguer      103     R$ 1,20
Chesseburguer   104     R$ 1,30
Refrigerante    105     R$ 1,00

>Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
>Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido.
>O pedido é encerrado quando o cliente digitar o codigo 999.
>Controlar para que o cliente só possa digitar os codigos do menu (não pode aceitar letra).



cod 100     15      115,00
cod 101     10      100,00

valor total 215,00*/


var prompt = require('prompt-sync')();

/*var card = {
    100 : 1.20,
    101 : 1.30,
    102 : 1.50,
    103 : 1.20,
    104 : 1.30,
    105 : 1.00
};
var totalPedido = 0;

while(true) {
    let cod = Number(prompt('Digite o código desejado ou digite 999 para encerrar o pedido : '));
    
    if (cod === 999) {
        break;
    }
    if (cod in card){
        let quant = Number(prompt('Digite a quantidade desejada: '));
        let precoItem = card[cod];
        let valorItem = precoItem * quant;
        console.log(`Código: ${cod} - Quantidade: ${quant} - Valor a ser pago: R$ ${valorItem}`);
        totalPedido += valorItem;
    } else {
        console.log('Código inválido. Tente novamente.');
    }
}
console.log(`Total geral a ser pago: R$ ${totalPedido}`);*/


var totalPedido = 0;

while(true) {
    let cod = Number(prompt('Digite o código desejado ou digite 999 para encerrar o pedido : '));
    if (cod === 999) {
        break;
    } switch(cod){
        case 100 : //digitar o que eu quero aqui dentro
        let quant = Number(prompt('Digite a quantidade desejada: '));
         quant === Number;
     // cachorro_quente = 100;
            break;
        case 101 : 
            bauru_simples = 101;
            break;
        case 102 :
            bauro_com_ovo =  102;
            break;
        case 999 :
            return "Operação finalizada";
             
    }
    //    console.log('Código inválido. Tente novamente.'); 
   }