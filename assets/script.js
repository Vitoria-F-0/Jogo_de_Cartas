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

function criarCartas(element) {

        const carta = document.createElement('div')
        carta.classList.add('card')
        carta.innerHTML = 
        `<div>Nome: ${element.nome}</div> 
        <div>Poder: ${element.forca}</div> 
        <div>Posição: ${element.posicao}</div>`
    
    return carta
}

function randomizarBaralho() {

    const baralhoRandom = []

    while (baralhoRandom.length < 10) {
        const indice = Math.floor(
            Math.random() * baralho.length
        )

        const cartaSorteada = baralho[indice]

        if (!baralhoRandom.includes(cartaSorteada)) {
            baralhoRandom.push(cartaSorteada)
        }
    }

    return baralhoRandom
}

function exibirCartas() {
    const resultadoPlayer1 = randomizarBaralho()
    const resultadoPlayer2 = randomizarBaralho()
    const baralhoExibir1 = []
    const baralhoExibir2 = []

    for (let i = 0; i <5; i++) {

        const cartaPlayer2 = criarCartas(resultadoPlayer2[i])
        const cartaPlayer1 = criarCartas(resultadoPlayer1[i])

        criarCartas(resultadoPlayer2)
        baralhoExibir2.push(cartaPlayer2)
        criarCartas(resultadoPlayer1)
        baralhoExibir1.push(cartaPlayer1)
    }

    baralhoExibir2.forEach(card => {
        maoPlayer2.appendChild(card)
    })
   

    baralhoExibir1.forEach(card => {
        maoPlayer1.appendChild(card)
    })
}

exibirCartas()