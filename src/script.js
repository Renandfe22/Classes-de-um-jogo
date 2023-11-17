class Heroi {
    constructor(nome, idade, classe, arma) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.arma = arma;
    }

    ataque(inimigo) {
        adicionarMensagem(`O ${this.nome} sendo um ${this.classe} de ${this.idade} avançou contra o inimigo usando a ${this.arma} e causou 50 de dano.`);
        inimigo.dano(50);
    }

    dano(valor) {
        adicionarMensagem(`${this.nome} recebeu ${valor} de dano.`);
    }
}

class Mago extends Heroi {
    constructor(nome, idade, arma) {
        super(nome, idade, "Mago", arma);
    }

    contraAtaque(inimigo) {
        adicionarMensagem(`${this.nome} o Mago contra-atacou ${inimigo.nome} o Guerreiro e causou 75 de dano.`);
        inimigo.dano(75);
    }

    revancheEspecial(inimigo) {
        adicionarMensagem(`${this.nome} o Mago foi desafiado para uma revanche especial por ${inimigo.nome} o Guerreiro.`);
        adicionarMensagem(`O ${inimigo.nome} o Guerreiro utilizou seu especial "Força Total" e causou 400 de dano.`);
        adicionarMensagem(`O ${this.nome} o Mago foi aniquilado pelo especial do ${inimigo.nome} o Guerreiro.`);
    }
}

function adicionarMensagem(mensagem) {
    const dialogText = document.getElementById('dialog-text');
    const mensagemElement = document.createElement('p');
    mensagemElement.classList.add('typing');
    dialogText.appendChild(mensagemElement);

    let index = 0;

    function type() {
        if (index < mensagem.length) {
            mensagemElement.innerHTML += mensagem.charAt(index);
            index++;
            setTimeout(type, Math.floor(Math.random() * 100) + 50);
        } else {
            // Após a conclusão da digitação, inicia o próximo texto
            adicionarMensagemQueue.shift();
            if (adicionarMensagemQueue.length > 0) {
                setTimeout(() => type(adicionarMensagemQueue[0]), 500); // Aguarda 500ms antes de iniciar o próximo texto
            }
        }
    }

    type();
}

// Fila para controlar a ordem dos textos
let adicionarMensagemQueue = [];

function adicionarMensagemNaFila(mensagem) {
    adicionarMensagemQueue.push(mensagem);

    // Se não houver nenhum processo de digitação em andamento, inicia o próximo
    if (adicionarMensagemQueue.length === 1) {
        adicionarMensagem(mensagem);
    }
}

let guerreiro = new Heroi("carniceiro", "47 anos", "Guerreiro", "espada");
let magoBapsa = new Mago("bapsa", "75 anos", "magia");

adicionarMensagemNaFila("-");
adicionarMensagemNaFila("-");
adicionarMensagemNaFila("-");

guerreiro.ataque(magoBapsa);
magoBapsa.contraAtaque(guerreiro);
magoBapsa.revancheEspecial(guerreiro);
