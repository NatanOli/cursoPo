/* O cardápio de uma lanchonete é o seguinte:
Especificação   código  preço
Cachorro Quente 100     R$ 1,20
Bauru Simples   101     R$ 1,30
Bauro com Ovo   102     R$ 1,50
Hamburguer      103     R$ 1,20
Chesseburguer   104     R$ 1,30
Refrigerante    105     R$ 1,00

Faça um programa que leia o código dos itnes pedidos e as quantidades desejadas.
Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido.
O pedido é encerrado quando o cliente digitar o codigo 999.
Controlar para que o cliente só possa digitar os codigos do menu

cod 100     15      115,00
cod 101     10      100,00

valor total 215,00*/

/* adicionar um banco com as informações de valores
aceitar apenas os códigos ditos ali, outros voltar ao menu ou não aceitar (mensagens: Qual código do produto desejado? Qual quantidade desejada?)
apresentar o valor final do código pedido com a quantidade.*/


/*let Cachorro Quente 100  = 1.20;
Bauru Simples   101  = 1.30;
Bauro com Ovo   102  = 1.50;
Hamburguer      103  = 1.20;
Chesseburguer   104  = 1.30;
Refrigerante    105  = 1.00;*/

var prompt = require('prompt-sync')();

let vetor =[];
let i = 1;
let j = 1;
let l =1;

/*let i = 0;
let t = 0;
let totalDaCompra = 0;
let produto = 0;
let v = 1;
let lista = Array();*/

do {
    vetor[i] = Number(prompt('Código produto desejado: '));
    vetor[j] = Number(prompt('Quantidade desejada:  '));
     // total = (total + vetor[i]);

    i++;
} while (vetor [i-1] != 0)
        
console.log('O Código',vetor[i] ,'quantiadade', maiorPeso);