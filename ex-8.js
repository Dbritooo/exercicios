//Exercício 8: Cálculo de IMC
//Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros. Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura).
//Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o usuário se encontra, de acordo com a tabela a seguir:
//IMC menor que 18.5: Abaixo do peso
//IMC de 18.5 a 24.9: Peso normal
//IMC de 25.0 a 29.9: Sobrepeso
//IMC de 30.0 a 34.9: Obesidade grau 1
//IMC de 35.0 a 39.9: Obesidade grau 2
//IMC maior ou igual a 40.0: Obesidade grau 3

let altura = parseFloat (prompt ("Digite sua altura em metros:"))
let peso = parseFloat (prompt ("Digite seu peso:"))

let atlura2 = altura * altura

let imc = peso / atlura2


if (imc <= 18.5 )
{
    alert ("Abaixo do peso")
}

if (imc > 18.5 && imc <= 25)
{
    alert ("Peso normal")
}

if (imc > 25 && imc <= 29.99)
{
    alert ("Sobrepeso")
}

if (imc > 30 && imc <= 34.9)
{
    alert ("Obesidade grau 1")
}

if (imc > 35 && imc <= 39.9)
{
    alert ("Obesidade grau 2")
}

if (imc >= 40)
{
    alert ("Obesidade grau 3")
}