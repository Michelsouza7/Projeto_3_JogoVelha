const prompt = require('prompt-sync')();
console.clear()

//Criação da Matriz de duas dimensões. (1,0)

//Solicitar coordenadas aos jogadores. (1,0)

//Laço de repetição que determinará se os jogadores querem continuar o jogo ou não. (2,0)

//Variável para controle do vencedor de cada rodada. (2,0)

//Mostrar o resultado e quem foi o grande vencedor. (2,0)

//Conteúdo de variáveis, arrays, matrizes, condicionais e laços bem aplicados. (2,0)

// Funcao para executar a posicao marcada pelo jogador
function coordenadas(linha, coluna, symbol) {
    if (linha == 0 && coluna == 0) {
        if (jogoVelha[0][0] != '') {
            return 'ocupado';
        } else {
            jogoVelha[0][0] = symbol;
            return 'aplicado';
        }
    } else if (linha == 0 && coluna == 1) {
        if (jogoVelha[0][1] != '') {
            return 'ocupado';
        } else {
            jogoVelha[0][1] = symbol;
            return 'aplicado';
        }
    } else if (linha == 0 && coluna == 2) {
        if (jogoVelha[0][2] != '') {
            return 'ocupado';
        } else {
            jogoVelha[0][2] = symbol;
            return 'aplicado';
        }
    } else if (linha == 1 && coluna == 0) {
        if (jogoVelha[1][0] != '') {
            return 'ocupado';
        } else {
            jogoVelha[1][0] = symbol;
            return 'aplicado';
        }
    } else if (linha == 1 && coluna == 1) {
        if (jogoVelha[1][1] != '') {
            return 'ocupado';
        } else {
            jogoVelha[1][1] = symbol;
            return 'aplicado';
        }
    } else if (linha == 1 && coluna == 2) {
        if (jogoVelha[1][2] != '') {
            return 'ocupado';
        } else {
            jogoVelha[1][2] = symbol;
            return 'aplicado';
        }
    } else if (linha == 2 && coluna == 0) {
        if (jogoVelha[2][0] != '') {
            return 'ocupado';
        } else {
            jogoVelha[2][0] = symbol;
            return 'aplicado';
        }
    } else if (linha == 2 && coluna == 1) {
        if (jogoVelha[2][1] != '') {
            return 'ocupado';
        } else {
            jogoVelha[2][1] = symbol;
            return 'aplicado';
        }
    } else if (linha == 2 && coluna == 2) {
        if (jogoVelha[2][2] != '') {
            return 'ocupado';
        } else {
            jogoVelha[2][2] = symbol;
            return 'aplicado';
        }
    }
}

// Funcao para validar se houve ganhador
function validadorVitoria(a) {
    let contagem = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i][0] == a[i][1] && a[i][0] == a[i][2] && a[i][0] != '') {
            return 'vitoria';
        }
    }
    for (let i = 0; i < 3; i++) {
        if (a[0][i] == a[1][i] && a[0][i] == a[2][i] && a[0][i] != '') {
            return 'vitoria';
        }
    }
    if (a[0][0] == a[1][1] && a[0][0] == a[2][2] && a[0][0] != '') {
        return 'vitoria';
    } else if (a[0][2] == a[1][1] && a[0][2] == a[2][0] && a[0][2] != '') {
        return 'vitoria';
    }
    for (let i of a) {
        for (let i2 of i) {
            if (i2 == 'X' || i2 == 'O') {
                contagem++;
                if (contagem == 9) {
                    return 'velha';
                }
            }
        }
    }
    contagem = 0;
}

// Declarando variáveis globais
let simbolo = 'O';
let linha;
let coluna;
let nomeJogador;
let pts1 = 0;
let pts2 = 0;
let continuar = 'sim';

// Tabuleiro
let jogoVelha = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

// Apresentando o jogo e seleção dos nomes
console.log('Olá jogadores sejam vindo ao jogo da velha!');
console.log();
console.log('As regras são bem simples!');
console.log();
console.log(`O jogador 1 será o 'X' e o jogador 2 será 'O'`);
console.log();
console.log(`Quem finalizar fazer a reta ou diagonal com 3 simbolos primeiro vencedor!`)
console.log();
console.log('Bora lá!!!');

let nomeJogador1 = prompt('Digite o nome do jogador 1 (X): ');
console.log();

let nomeJogador2 = prompt('Digite o nome do jogador 2 (O): ');
console.log();

console.log (`${nomeJogador1} será 'X' e 
${nomeJogador2} será 'O'`);

prompt('Pressione ENTER para continuar.');
console.clear();

// Início do jogo
while (continuar == 'sim') {
    // Informações ao jogador (nomes e símbolos)
    if (simbolo == 'O') {
        simbolo = 'X';
        nomeJogador = `${nomeJogador1}`;
    } else if (simbolo == 'X') {
        simbolo = 'O';
        nomeJogador = `${nomeJogador2}`;
    }
    console.clear();

    // Exibindo tabuleiro
    console.table(jogoVelha);

    // Escolha e validação da linha
    console.log(`${nomeJogador} escolha sua jogada: `);

    linha = +prompt('Linha: ');

    while (linha != 0 && linha != 1 && linha != 2) {
        console.log('Digite uma linha válida!');
        linha = prompt('Linha: ');
    }

    // Escolha e validação da coluna
    coluna = +prompt('Coluna: ');

    while (coluna != 0 && coluna != 1 && coluna != 2) {
        console.log('Digite uma coluna válida!');
        coluna = prompt('Coluna: ');
    }

    // Analisando se a posição escolhida já esta ocupada!
    while (coordenadas(linha, coluna, simbolo) == 'ocupado') {
        console.clear();

        console.table(jogoVelha);

        console.log('Posição já ocupada! Escolha outra:');

        linha = prompt('Linha: ');

        while (linha != 0 && linha != 1 && linha != 2) {
            console.log('Digite uma linha válida!');
            linha = prompt('Linha: ');
        }

        coluna = prompt('Coluna: ');

        while (coluna != 0 && coluna != 1 && coluna != 2) {
            console.log('Digite uma coluna válida!');
            coluna = prompt('Coluna: ');
        }
    }

    // Chamando a função que executa as jogadas
    coordenadas(linha, coluna, simbolo);

    console.clear();

    console.table(jogoVelha);

    // Verificando e exibindo caso haja vencedor
    if (validadorVitoria(jogoVelha) == 'vitoria') {
        if (nomeJogador == nomeJogador1) {
            console.log(`${nomeJogador1} ganhou!`);
            pts1++;
        } else if (nomeJogador == nomeJogador2) {
            console.log(`${nomeJogador2} ganhou!`);
            pts2++;
        }
    } else if (validadorVitoria(jogoVelha) == 'velha') {
        console.log('Deu velha!');
    }

    // Perguntando se o usuario deseja rodar mais uma vez o programa
    // e fazendo o 'reset' do tabuleiro caso ele queira
    if (
        validadorVitoria(jogoVelha) == 'vitoria' ||
        validadorVitoria(jogoVelha) == 'velha'
    ) {
        continuar = prompt('Deseja jogar novamente? ').toLowerCase();

        while (continuar != 'sim' && continuar != 'nao') {
            console.log('Digite "sim" ou "nao"!');

            continuar = prompt('Deseja jogar novamente? ').toLowerCase();
        }
        if (continuar == 'sim') {
            jogoVelha = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
        } else if (continuar == 'nao') {
            console.clear();
        }
    }
}

// Declarando o grande vencedor do jogo
if (pts1 > pts2) {
    console.log(`E o grande vencedor é: ${nomeJogador1}???`);
} else if (pts1 < pts2) {
    console.log(`E o grande vencedor é: ${nomeJogador2}????`);
} else {
    console.log(`E o grande vencedor é: DEU EMPATE!!!`);
}

console.log('Fim de jogo, obrigado!!!');
