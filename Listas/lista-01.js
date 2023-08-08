// Operadores:
// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

/*
alert("Exercicio 1: Verificando a area de um retangulo")
let comprimento = prompt("Digite o comprimento do retangulo em cm:")
let largura = prompt("Digite a largura do retangulo em cm:")

let areaRetangulo = 0

if (isNaN(comprimento) || isNaN(largura) || comprimento < 0 || largura < 0) {
    alert("Erro: Digite um numero valido!")
} else {
    areaRetangulo = comprimento * largura
}

if (areaRetangulo != 0) {
    alert("A area do retangulo é: " + areaRetangulo + " cm2")
}
*/

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%). 
/*
alert("Exercicio 2: Verificando se o numero é par ou ímpar")
let numeroAvaliado = prompt("Por favor digite um numero:")

if (isNaN(numeroAvaliado) || numeroAvaliado == 0) {
    alert("Digite um numero valido!") 
} else {
    let modulo = numeroAvaliado % 2
    if (modulo == 0) {
        alert("Esse numero é par!")
    } else {
        alert("Esse numero é impar!")
    }
}
*/
// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript". 

/*
alert("Exercicio 3: Verificando existe a palava JavaScript na frase")

let fraseAvaliada

function promptUsuario() {
    fraseAvaliada = prompt("Por favor digite uma frase:")
    avaliacao()
}

function avaliacao() {
    if (fraseAvaliada != undefined && fraseAvaliada.includes("JavaScript")) {
        alert("A sua frase inclui a palavra JavaScript, obrigado!")
        return true
    } else {
        alert("A sua frase Não contém a palavra JavaScript")
        return false
    }
}
promptUsuario()
*/

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas. 

alert("Exercicio 4: Comparando duas strings")

let strOne
let strTwo

function promptUsuario4() {
    strOne = prompt("Por favor digite uma palavra:")
    strTwo = prompt("Por favor digite outra palavra:")
    avaliaStr()
}

function avaliaStr() {
    strOne = strOne.toLowerCase()
    strTwo = strTwo.toLowerCase()
    if (strOne == strTwo) {
        alert("As duas palavras são iguais!")
        return true
    } else {
        alert("As duas palavras NÃO são iguais!")
    }
}
promptUsuario4()



// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.








/*
Funções Nativas:
6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length. 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo". 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max(). 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos. 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.

Coerção e Tipos de Dados:
11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado. 12- Converta a string "123" em um número inteiro e armazene-o em uma variável. 13- Escreva um programa que adicione um número e uma string. 14- Explique o resultado e discuta a coerção que ocorre. 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo. 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

Operadores Matemáticos e Lógicos:
18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20. 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo. 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400. 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos). 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.
*/