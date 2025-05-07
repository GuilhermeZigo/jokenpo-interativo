// script.js
const vitorias = {
    tesoura: 'papel',
    pedra: 'tesoura',
    papel: 'pedra'
};

const emojis = {
    pedra: '🪨',
    papel: '📄',
    tesoura: '✂️'
};

const opcoes = ['pedra', 'papel', 'tesoura'];

function jogar(jogador) {
    const computador = opcoes[Math.floor(Math.random() * 3)];

    let resultado;
    if (jogador === computador) {
        resultado = '🤝 Empate!';
    } else if (vitorias[jogador] === computador) {
        resultado = '🎉 Você venceu!';
    } else {
        resultado = '💥 Você perdeu!';
    }

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('escolhas').innerHTML = `Você: ${emojis[jogador]} (${jogador})<br>Computador: ${emojis[computador]} (${computador})`;
}

