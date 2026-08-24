# Primeiro passo
- Defini que o visual deveria ser como o tabuleiro desse tipo: baralhos de cartas dos jogadores no topo e base, tabuleiro para posicionar cada carta no meio, um acima do outro e tudo estaria centralizado
- Para que esse projeto funcione, o primeiro passo tem que ser testar a exibição de uma carta
- Depois de um tempo pensando, lembrei da estrutura que usei no projeto anterior
- Nesse caso, deveria definir a carta com seus atributos dentro do JS em um array de objetos e criar elas para enviar para o HTML

# Segundo passo
- Para testar isso, decidi criar somente uma carta e enviar para a mão do jogador dois
- Seguir a linha de raciocínio do primeiro não foi tão complicado (claro que tive que revisar algumas vezes, ainda estou desenvolvendo habilidades de manipulação, criação e resolução de problemas) até esbarrar no problema de exibição
- Nessa parte demorei mais para atinar no que fazer e testar
- Primeiro teria que criar um div para cada carta criada para separar os conteúdos corretamente
- Depois, os textos das cartas estavam sendo exibidos em row e como estavam diretamente como textos dentro da div, não era possível manipular o conteúdo com o flexbox
- Pesquisei sobre o funcionamento de innerHTML (no MDN Web Docs), pois a questão de trabalhar com a constante mudança entre tags e textos é novidade e eu precisava saber se ia funcionar
- Após essa mudança, era só os textos dentro dos divs para manipulação no  CSS