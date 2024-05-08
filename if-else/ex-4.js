// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a
//  7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


let nota01 = parseInt (prompt("digite a nota"))
let nota02 = parseInt  (prompt("digite a nota"))
let nota03 = parseInt (prompt("digite a nota"))
let nota04 = parseInt (prompt("digite a nota"))

let media= (nota01 + nota02 + nota03 + nota04) /4;





if (media >= 7 ){
alert("aprovado");
}
else if (media <= 5 ){
alert("reprovado");
}

