const maoPlayer2 = document.querySelector('.player2mao')
const maoPlayer1 = document.querySelector('.player1mao')

const baralho = [
    {nome: "Geralt of Rivia", forca: 15, posicao: "neutra"},
    {nome: "Yennefer of Vengerberg", forca: 7, posicao: "neutra"},
    {nome: "Cirilla Fiona Elen Riannon", forca: 15, posicao: "neutra"},
    {nome: "Triss Merigold", forca: 7, posicao: "neutra"},
    {nome: "Eredin", forca: 15, posicao: "neutra"},
    {nome: "Dandelion", forca: 2, posicao: "neutra"},
    {nome: "Vesemir", forca: 6, posicao: "neutra"},
    {nome: "Sigismund Dijkstra", forca: 4, posicao: "neutra"},
    {nome: "Crach an Craite", forca: 10, posicao: "neutra"},
    {nome: "Zoltan Chivay", forca: 5, posicao: "neutra"}
];

function criarCartas() {
    const baralhoPronto = []
    baralho.forEach(element => {
        const carta = document.createElement('div')
        carta.classList.add('card')
        carta.innerHTML = 
        `<div>Nome: ${element.nome}</div> 
        <div>Poder: ${element.forca}</div> 
        <div>Posição: ${element.posicao}</div>`
        baralhoPronto.push(carta)
    })
    return baralhoPronto
}

function randomizarBaralho(baralhoPronto) {
    baralhoPronto.Math.floor(Math.random() *10)
    return
}

/*function exibirCartas(randomizarBaralho) {  
    for (let i = 0; i <5; i++) {
        const cartaSorteada = cartasEmbaralhadas[i]
    }
    
    push.maoPlayer2.appendChild(randomizarBaralho)
    push.maoPlayer1.appendChild(randomizarBaralho)
}

exibirCartas() */