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

let guerreiro = new Heroi("carniceiro", "47 anos", "Guerreiro", "espada");
let magoBapsa = new Mago("bapsa", "75 anos", "magia");

function adicionarMensagem(mensagem) {
    const dialogContainer = document.getElementById('dialog-container');
    const mensagemElement = document.createElement('p');
    mensagemElement.textContent = mensagem;
    dialogContainer.appendChild(mensagemElement);
}

guerreiro.ataque(magoBapsa);
magoBapsa.contraAtaque(guerreiro);
magoBapsa.revancheEspecial(guerreiro);
