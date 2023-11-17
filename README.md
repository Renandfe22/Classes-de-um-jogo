# Console Log Viewer

Este projeto foi desenvolvido para fins educacionais, como parte de um estudo sobre a integração do JavaScript com CSS e HTML. O objetivo é criar uma visualização de console interativa que simula um diálogo durante uma batalha entre um Guerreiro e um Mago. A implementação inclui uma animação de digitação para aprimorar a experiência do usuário.

## Estrutura do Projeto

- **index.html**: Página HTML básica que inclui o arquivo de estilo e script.
- **style.css**: Folha de estilo para a formatação da página.
- **script.js**: Script JavaScript que define as classes `Heroi` e `Mago` e simula a batalha entre o Guerreiro e o Mago.

## Classes

### `Heroi`

- **Atributos**: `nome`, `idade`, `classe` e `arma`.
- **Métodos**:
  - `ataque(inimigo)`: Realiza um ataque ao inimigo causando 50 de dano.
  - `dano(valor)`: Recebe uma quantidade de dano.

### `Mago` (herda de `Heroi`)

- **Métodos**:
  - `contraAtaque(inimigo)`: Realiza um contra-ataque ao inimigo causando 75 de dano.
  - `revancheEspecial(inimigo)`: Desafia o inimigo para uma revanche especial, onde o inimigo causa 400 de dano.

## Funções

- **`adicionarMensagem(mensagem)`**: Adiciona mensagens ao elemento com o id `dialog-text`, simulando uma conversa com efeito de digitação.
- **`adicionarMensagemNaFila(mensagem)`**: Adiciona mensagens à fila para controle da ordem de exibição.

## Estilo

- O corpo da página é estilizado para centralizar o conteúdo.
- O elemento `#dialog-text` é estilizado com uma borda, cores de texto e de fundo específicas, e uma fonte monoespaçada para melhorar a leitura.

## Uso

O script simula uma breve batalha entre um Guerreiro e um Mago. O resultado da batalha é exibido no elemento `#dialog-text` com efeitos de digitação.

### Exemplo de Uso

```javascript
let guerreiro = new Heroi("carniceiro", "47 anos", "Guerreiro", "espada");
let magoBapsa = new Mago("bapsa", "75 anos", "magia");

adicionarMensagemNaFila("-");
adicionarMensagemNaFila("-");
adicionarMensagemNaFila("-");

guerreiro.ataque(magoBapsa);
magoBapsa.contraAtaque(guerreiro);
magoBapsa.revancheEspecial(guerreiro);

Estilo Adicional

A classe .typing possui uma borda para realçar o efeito de digitação.
Utilização de uma animação CSS para simular um cursor piscando.
Este é um projeto simples, desenvolvido para estudo da integração do JavaScript com CSS e HTML. 
