const maoPlayer = document.querySelector('.player2mao')

const baralho = [
    {nome: "Geralt of Rivia", forca: 15, posicao: "neutra"},
];

function exibirCartas() {
    baralho.forEach(element => {
        const carta = document.createElement('div')
        carta.classList.add('card')
        carta.innerHTML = 
        `<div>Nome: ${element.nome}</div> 
        <div>Poder: ${element.forca}</div> 
        <div>Posição: ${element.posicao}</div>`
        maoPlayer.appendChild(carta)
    });
}

exibirCartas()