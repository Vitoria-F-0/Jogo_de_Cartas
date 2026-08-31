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

    const baralhoRandom = []

    while (baralhoRandom.length < 10) {
        const indice = Math.floor(
            Math.random() * baralhoPronto.length
        )

        const cartaSorteada = baralhoPronto[indice]

        if (!baralhoRandom.includes(cartaSorteada)) {
            baralhoRandom.push(cartaSorteada)
        }
    }

    return baralhoRandom
}

function exibirCartas(baralhoPronto) {
    const resultadoPlayer1 = randomizarBaralho(baralhoPronto)
    const resultadoPlayer2 = randomizarBaralho(baralhoPronto)
    const baralhoExibir1 = []
    const baralhoExibir2 = []

    for (let i = 0; i <5; i++) {
        baralhoExibir2.push(resultadoPlayer2[i])
        baralhoExibir1.push(resultadoPlayer1[i])
    }

    baralhoExibir2.forEach(card => {
        card.innerHTML
        maoPlayer2.appendChild(card)
    })
   

    baralhoExibir1.forEach(card => {
        card.innerHTML
        maoPlayer1.appendChild(card)
    })
}

exibirCartas(randomizarBaralho(criarCartas()))