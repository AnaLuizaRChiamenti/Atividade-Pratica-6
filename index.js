/* 1. Crie uma variável para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.  */

function exercicio1() {

    let idadeMotora = Number(prompt("Digite sua idade: "))
    if (!idadeMotora) {
        document.write("Valor invalido. Tente novamente!")
        return;
    }

    if (idadeMotora >= 18) {
        document.write("Pode dirigir.")
    } else {
        document.write("Não pode dirigir.")
    }
}

/* 2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”. */

function exercicio2() {

    let idadeMotora = Number(prompt("Digite sua idade: "))
    if (!idadeMotora) {
        document.write("Valor invalido. Tente novamente!")
        return;
    }

    if (idadeMotora < 18) {
        document.write("Voce é menor de idade, não pode dirigir!")
        return;
    }

    let habilitaçãoMotora = prompt("Voce tem habilitação?")
    if (!habilitaçãoMotora) {
        document.write("Valor invalido. Tente novamente!")
        return;
    }

    if (idadeMotora >= 18 && habilitaçãoMotora == 'Sim') {
        document.write(`Voce é maior de 18 anos e é habilitado`)
    } else if (idadeMotora >= 18 && habilitaçãoMotora == 'Não') {
        document.write(`Voce é maior de 18 anos e não é habilitado`)
    } else {
        document.write("Voce não pode dirigir")
    }
}

/* 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. */

function exercicio3() {
    let numeros = Number(prompt("Digite um numero de 1 a 7"))
    if (!numeros) {
        document.write("Valor digitado invalido")
        return;

    }
    if (numeros === 1) {
        document.write("Domingo")
    } else if (numeros === 2) {
        document.write("Segunda")
    } else if (numeros === 3) {
        document.write("Terça")
    } else if (numeros === 4) {
        document.write("Quarta")
    } else if (numeros === 5) {
        document.write("Quinta")
    } else if (numeros === 6) {
        document.write("Sexta")
    } else if (numeros === 7) {
        document.write("Sabado")
    } else {
        document.write("Dia não reconhecido.")
    }
}

/* 4. Reescreva o exercício 3, utilizando apenas o SWITCH. */

function exercicio4() {
    let numeros = Number(prompt("Digite um numero de 1 a 7"))
    if (!numeros) {
        document.write("Valor digitado invalido")
        return;
    }

    switch (numeros) {
        case 1:
            document.write("Domingo")
            break;

        case 2:
            document.write("Segunda")
            break;

        case 3:
            document.write("Terça")
            break;

        case 4:
            document.write("Quarta")
            break;

        case 5:
            document.write("Quinta")
            break;

        case 6:
            document.write("Sexta")
            break;

        case 7:
            document.write("Sabado")
            break;

        default:
            document.write("Dia não reconhecido.")
    }

}

/* 5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
os números pares. */

function exercicio5() {

    let contagem = 0;

    for (contagem = 0; contagem <= 10; contagem++) {
        let resto = contagem % 2
        if (resto === 0) {
            document.write(`${contagem} `)
        }
    }
}

/* 6. Insira no html 30 ( trinta ) números ímpares. */

function exercicio6() {
    let contagem = 0;

    for (contagem = 0; contagem <= 60; contagem++) {
        let resto = contagem % 2
        if (resto === 1) {
            document.write(`${contagem} `)
        }
    }
}

/* 7. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100. */


function exercicio7() {
    let soma = 0;
    let contagem = 0;

    do {
        contagem++
        soma += contagem;
    } while (contagem < 10 || contagem < 100) {
    }

    document.write(`${soma}`)
}

/* 8. Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, insira no html
"ISENTO DE IR";
- caso contrário insira "TRIBUTADO NO IR". */

function exercicio8() {
    let salario = 1000.00

    if (salario < 1903.98) {
        document.write("ISENTO DE IR")
    } else {
        document.write("TRIBUTADO NO IR")
    }
}

/* 9. Informe um valor a uma variável e imprima no console se o número
é primo. */

function exercicio9() {
    let numero = Number(prompt("Digite um numero: "))

    if (!numero) {
        alert("Numero invalido. Tente novamente!")
        return;
    } else {
        numero = parseInt(numero)
    }

    if (numero <= 0 || numero === 1) {
        alert("Digite um numero valido")
        return false;
    }

    if (numero == 2) {
        document.write(`O numero ${numero} é primo.`)
        return;
    }


    let divisores = 2;

    for (let contador = 2; contador < numero; contador++) {
        if (numero % contador === 0) {
            divisores++
        }
    }
    if (divisores > 2) {
        document.write(`O numero ${numero} não é primo.`)
    } else {
        document.write(`O numero ${numero} é primo.`)
    }

}

/* 10. Tendo como entrada a altura e o sexo (codificado da seguinte
    forma: 1 para sexo feminino e 2 para sexo masculino) de uma
    pessoa, construa um programa que calcule e mostre seu peso ideal,
    utilizando as seguintes fórmulas:
    - para homens: (72.7 * Altura) – 58
    - para mulheres: (62.1 * Altura) – 44.7 */

function exercicio10() {
    let altura = prompt("Digite sua altura")

    if (altura !== null) {
        altura = Number(altura.replace(',', '.'))
    }

    if (!altura) {
        alert("Altura digitada invalida. Tente novamente!")
        return;
    }

    let sexo = Number(prompt("Genero: '1' para sexo feminino e '2' para sexo masculino "))

    if (!sexo) {
        alert("Altura digitada invalida. Tente novamente!")
        return;
    }

    if (sexo != 1 && sexo != 2) {
        alert("Valor invalido")
        return;
    }

    if (sexo === 1) {
        let peso = (62.1 * altura) - 58;
        document.write(`O peso ideal para voce de acordo com a sua altura é ${peso.toFixed(2)}kg.`)
    } else {
        let peso = (72.7 * altura) - 44.7;
        document.write(`O peso ideal para voce de acordo com a sua altura é ${peso.toFixed(2)}kg.`)
    }
}

/*     11. Utilizando Switch, faça um programa que pergunte em que turno
você estuda. Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Mostre um alerta com a mensagem
“Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
conforme o caso. */

function exercicio11() {
    let turno = prompt("Digite em que turno voce estuda: M para matutino - V para vespertino - N para noturno")

    if (!turno) {
        alert("Valor digitado invalido")
        return;
    }



    switch (turno.toUpperCase()) {
        case 'M':
            alert("Bom dia!")
            break;

        case 'V':
            alert("Boa tarde!")
            break;

        case 'N':
            alert("Boa noite!")
            break;

        default:
            alert("Valor inválido")
    }
}

/* 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
(&&). */

function exercicio12() {
    let idade = parseInt(prompt("Digite sua idade: "))

    if (idade !== null) {

    }
    if (!idade) {
        alert("Valor digitado invalido!")
        return;
    }
    if (idade >= 18 && idade <= 67) {
        document.write("Voce pode doar sangue")
    } else {
        document.write("Voce não pode doar sangue")
    }

}

/* 13. Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado. */

function exercicio13() {
    let numero = Number(prompt("Digite um numero: "))

    for (let contador = 1; contador <= numero; contador++) {
        let restoDivisao = contador % 2;

        if (restoDivisao === 1) {
            document.write(` ${contador} é impar`)
        }
    }
}

/* 14. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor */

function exercicio14() {
    let numero = Number(prompt("Digite um numero: "))

    if (!numero) {
        alert("Digite um numero valido!");
        return;
    }

    let soma = 0;

    while (soma < 500) {
        numero * 3;
        soma += numero;
    }
    soma -= numero;
    document.write(`${soma}`)
}

/* 15. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.

a. Para verificar se os lados fornecidos formam um triângulo: 
A < B + C e B < A + C e C < A + B.

b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);

c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);

d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C); */

function exercicio15() {
    let A = Number(prompt("Digite um numero"))

    if (!A) {
        alert("Valor inserido invalido. Tente novamente!")
        return;
    }

    let B = Number(prompt("Digite um numero"))

    if (!B) {
        alert("Valor inserido invalido. Tente novamente!")
        return;
    }

    let C = Number(prompt("Digite um numero"))

    if (!C) {
        alert("Valor inserido invalido. Tente novamente!")
        return;
    }

    if (A < B + C && B < A + C && C < A + B) {

        if (A == B && B == C) {
            document.write("Triângulo equilátero.")
        }
        else if (A === B || A === C || B === C) {
            document.write("Triângulo isósceles.")
        }
        else if (A !== B && B !== C && A !== C) {
            document.write("Triângulo escaleno.")
        }
    } else {
        alert("O valor digitado não é um triangulo")
    }
}

/* 16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu). */

function exercicio16() {
    let anoAtual = Number(prompt("Digite o ano atual: "))
    if (!anoAtual) {
        alert("Valor invalido. Tente novamente!");
        return;
    }

    let anoNascimento = Number(prompt("Digite o ano do seu nascimento: "))
    if (!anoNascimento) {
        alert("Valor invalido. Tente novamente!");
        return;
    }

    let idade = anoAtual - anoNascimento;
    if (idade < 18) {
        document.write("Você é menor de idade, não pode votar!")
    } else if (idade <= 65) {
        document.write("Você é maior de idade, é obrigatorio votar!")
    } else {
        document.write("Você é maior de idade, mas não é mais obrigatorio votar!")
    }
}

/* 17. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores. */

function exercicio17() {
    let numeroTotalEleitores = Number(prompt("Digite o numero total de eleitores: "))
    if (!numeroTotalEleitores) {
        alert("Digite um numero de eleitores valido")
        return;
    }

    let numeroVotosBrancos = Number(prompt("Digite o numero de votos brancos: "))
    if (!numeroVotosBrancos || numeroVotosBrancos > numeroTotalEleitores) {
        alert("Digite um numero de votos valido")
        return;
    }

    let numeroVotosNulos = Number(prompt("Digite o numero de votos nulos: "))
    if (!numeroVotosNulos || (numeroVotosNulos + numeroVotosBrancos) > numeroTotalEleitores) {
        alert("Digite um numero de votos valido")
        return;
    }

    let numeroVotosValidos = Number(prompt("Digite um numero de votos válidos: "))
    if (!numeroVotosValidos || (numeroVotosBrancos + numeroVotosNulos + numeroVotosValidos) < numeroTotalEleitores) {
        alert("Digite um numero de votos valido e correspondente ao total de votos do municipio!")
        return;
    }

    let percentualBrancos = (numeroVotosBrancos * 100) / numeroTotalEleitores;

    let percentualNulos = (numeroVotosNulos * 100) / numeroTotalEleitores;

    let percentualValidos = (numeroVotosValidos * 100) / numeroTotalEleitores;

    document.write(`<p>Percentual total de votos brancos ${percentualBrancos.toFixed(2)}%</p>`)
    document.write(`<p>Percentual total de votos nulos ${percentualNulos.toFixed(2)}%</p>`)

    document.write(`<p>Percentual total de votos válidos ${percentualValidos.toFixed(2)}%</p>`)


}

/* 18. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console. */

function exercicio18() {
    let total = 0;
    let totalParcial = 0;
    let precoTabela = prompt("Digite o preço do produto: ")

    if (precoTabela !== null) {
        precoTabela = Number(precoTabela.replace(',', '.'))
    }
    if (!precoTabela) {
        alert("Digite um valor valido!")
        return;
    }

    let precoVezes = Number(prompt("Digite em quantas vezes o pagamento sera feito: "))

    if (!precoVezes) {
        alert("Digite um valor valido!")
        return;
    }

    if (precoVezes === 1) {
        total = precoTabela - (2.5 / 100) * precoTabela;
        totalParcial = total
    } else if (precoVezes >= 2 && precoVezes <= 5) {
        total = precoTabela;
        totalParcial = total / precoVezes;

    } else if (precoVezes >= 6 && precoVezes <= 10) {
        total = precoTabela + (6 / 100) * preço;
        totalParcial = total / precoVezes;

    } else if (precoVezes >= 11 && precoVezes <= 15) {
        total = precoTabela + (13 / 100) * precoTabela;
        totalParcial = total / precoVezes
    } else {
        alert("Quantidade de parcela invalidas!")
        return;
    }
    document.write(`O total da compra foi R$${total.toFixed(2)} reais, foi feita em ${precoVezes}x 
    de R$${totalParcial.toFixed(2)} reais!`)

}