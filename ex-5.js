// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente.
//  Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.





let crescente01 = parseInt (prompt("digite um numero"))
let crescente02 = parseInt  (prompt("digite um numero"))
let crescente03 = parseInt (prompt("digite um numero"))



if (crescente01 > crescente02) {
    console.log ("decrescente")
}

if (crescente02 > crescente03) {
    console.log ("decrescente")
}

if (crescente02 < crescente03) {
    console.log ("crescente")
}

if (crescente01 < crescente02) {
    console.log ("crescente")
}