alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1

//enquanto chute não for igual ao n. secr
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`)
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`)
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! acertou, o numero secreto é: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);







//HORA DA PRATICA 2
// N.1 
/*let diaSemana = prompt('hoje é Qual o dia da semana?')

if (diaSemana == 'sabado') {
    alert('Bom fim de semana!')
} else {
    if (diaSemana == 'domingo'){
        alert('bom fim de semana!')
    }else { 
        alert('boa semana')
    }
}*/

/* N.2 
let numero = prompt('digite um numero positivo ou negativo')

if (numero >0) {
    alert('numero digitado é positivo')
}else {
    alert('o numero digitado é negativo')
}*/

/* N.3
let ponto = 150;

if(ponto >= 100) {
    console.log('Parabéns, você venceu!')
} else {
    console.log('Tente novamente')
}*/

/*N.4

let saldo = 1500;

alert(`Seu saldo disponivel é: ${saldo}`);
*/

/*N.5

let seuNome = prompt('Digite seu nome');
alert(`Olá ${seuNome}, seja Bem-Vindo!!!`);
*/

//HORA DA PRATICA 3

/*N.1

let contador = 1;

while (contador <= 10) {
    console.log(contador)
    contador++
}*/


/*HORA DA PRATICA 3

//n.1
let mensagem = 'Boas vindas!!!'
console.log(mensagem);

//n.2
let nome = 'Emanuele'
console.log(`Ola ${nome}`);

//n.3

let nome = 'Emanuele'
alert(`Olá ${nome}`);

//n.4

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?')
console.log(linguagem);


//n.5

let valor1 = 10;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`a soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//n.6

let valor1 = 10;
let valor2 = 3;
let resultado = valor1 - valor2;
console.log(`a diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);


//n.7

let idade = prompt('Digite sua idade');
if (idade >= 18) {
    console.log('você possui maior idade');
}else {
    console.log('você ainda não possui maior idade');
}


//n.8

let numero = prompt('digite um valor positivo ou negativo');
if (numero > 0) {
    console.log('Este numero é positivo');
}else if (numero == 0) {
    console.log('Você digitou 0');
}else {
    console.log('Este numero é negativo');
}

//n.9

let numero = 1;

while (numero < 11) {
    console.log(numero);
    numero++;
}

//n.10

let nota = 5;

if(nota >= 7) {
    console.log('aprovado');
}else {
    console.log('reprovado');
}

//n.11

let aleatorio = parseInt(Math.random());
console.log(aleatorio);


//n.12

let aleatorio = parseInt(Math.random() * 10 + 1);
console.log(aleatorio);


//n.13

let aleatorio = parseInt(Math.random() * 1000 + 1);
console.log(aleatorio);*/