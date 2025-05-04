const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Função que verifica se alguma palavra-chave está presente na mensagem do usuário
function contarSinonimos(listaSinonimos, mensagem) {
  return listaSinonimos.some(palavra => mensagem.includes(palavra));
}
// Endpoint principal que recebe mensagens do usuário via POST (e as converte em minúsculas)
app.post("/chat", (req, res) => {
    const userMessage = req.body.message.toLowerCase();

// Respostas possíveis categorizadas por tipo, possibilidade de aumentar a lista com facilidade  
    const noticias = [
      "📰 <b>Notícia:</b> <b>FURIA venceu</b> o último confronto contra a LEGACY!",
      "📰 <b>Notícia:</b> <b>FURIA</b> anuncia <b>novo coach</b> para temporada 2025!",
      "📰 <b>Notícia:</b> <b>FURIA</b> entra para o <b>top 5 do ranking mundial</b>!",
      "📰 <b>Notícia:</b> <b>FURIA brilha</b> com <b>25 eliminações</b> em mapa decisivo!"
    ];
  
    const curiosidades = [
      "🤯 <b>Curiosidade:</b> KSCERATO começou a jogar CS aos <b>9 anos</b>!",
      "🤯 <b>Curiosidade:</b> Yuurih já jogou mais de <b>8.000 horas</b> de CS:GO!",
      "🤯 <b>Curiosidade:</b> O nome <b>FURIA</b> foi inspirado no <b>espírito intenso<b> da equipe!",
      "🤯 <b>Curiosidade:</b> <b>FURIA</b> foi o primeiro time brasileiro a ter um <b>gaming house nos EUA</b>!"
    ];
  
    const dicas = [
      "🎯 <b>Dica:</b> Sempre <b>comunique sua posição após morrer</b> — isso ajuda muito sua equipe.",
      "🎯 <b>Dica:</b> Treine o spray control com a <b>AK-47</b> no mapa <b>Aim Botz</b>.",
      "🎯 <b>Dica:</b> Use <b>smoke e flash</b> para entrada no bomb, não vá no seco!",
      "🎯 <b>Dica:</b> Configurar bem a <b>sensibilidade do seu controle</b> é o primeiro passo para evoluir."
    ];

    const jogador = [
      "🐾 <b>Jogador:</b> <b>Yuurih</b> — Nome real: <b>Yuri Boian</b>, conhecido pelo seu spray preciso e constância em torneios internacionais.",
      "🐾 <b>Jogador:</b> <b>KSCERATO</b> — Nome real: <b>Kaike Cerato</b>, destaque pela mira afiada e decisões rápidas em clutch.",
      "🐾 <b>Jogador:</b> <b>FalleN</b> — Nome real: <b>Gabriel Toledo</b>, o <b>Professor</b> das Américas e um dos líderes mais respeitados do CS mundial.",
      "🐾 <b>Jogador:</b> <b>molodoy</b> — Nome real: <b>Danil Golubenko</b>, jovem promessa do Cazaquistão, trazendo agressividade e talento à equipe."
    ];

    const proximo = [
      "🗓️ <b>Próximo Jogo:</b> A partida seguinte da <b>FURIA</b> será contra a Liquid na <b>terça-feira às 20h</b>!"
    ];

    const resultado = [
      "🏆 <b>Resultado:</b> <b>FURIA venceu</b> o último confronto contra a LEGACY em um placar de <b>16 x 12</b>!"
    ];

    const live = [
      "🔥 <b>Rodada 14:</b> <b>FURIA</b> pressiona no ataque! <b>KSCERATO elimina três jogadores</b> da G2 com um spray impecável. A torcida vibra com a virada!"
    ];

// Palavras-chave associadas a cada categoria, fácil manutenção    
    const dicasChaves = ["dica", "conselho", "macete"];
    const noticiasChaves = ["notícia", "noticia", "novidade"];
    const curiosidadesChaves = ["curiosidade","fato"];
    const resultadoChaves = ["resultado", "placar", "score"];
    const proximoChaves = ["proximo", "próximo", "próxima", "próximas", "seguinte", "futuro"];
    const liveChaves = ["ao vivo", "aovivo", "live", "tempo real", "temporeal"];
    const liveJogador = ["jogador", "player", "atleta"];

// Verifica quais categorias a mensagem do usuário acionou
// Mesmo que o usuário mencione várias palavras da mesma categoria, será retornada apenas uma resposta daquela categoria
    let quantidadeDicas = contarSinonimos(dicasChaves, userMessage) ? 1 : 0;
    let quantidadeNoticias = contarSinonimos(noticiasChaves, userMessage) ? 1 : 0;
    let quantidadeCuriosidades = contarSinonimos(curiosidadesChaves, userMessage) ? 1 : 0;
    let quantidadeResultado = contarSinonimos(resultadoChaves, userMessage) ? 1 : 0;
    let quantidadeProximo = contarSinonimos(proximoChaves, userMessage) ? 1 : 0;
    let quantidadeLive = contarSinonimos(liveChaves, userMessage) ? 1 : 0;
    let quantidadeJogador = contarSinonimos(liveJogador, userMessage) ? 1 : 0;

// Armazena todas as respostas selecionadas aleatoriamente
    let respostas = [];

// Para cada categoria identificada, sorteia aleatoriamente uma resposta e adiciona ao array final de respostas
    for (let i = 0; i < quantidadeDicas; i++) {
      respostas.push(dicas[Math.floor(Math.random() * dicas.length)]);
    }

    for (let i = 0; i < quantidadeNoticias; i++) {
      respostas.push(noticias[Math.floor(Math.random() * noticias.length)]);
    }

    for (let i = 0; i < quantidadeCuriosidades; i++) {
      respostas.push(curiosidades[Math.floor(Math.random() * curiosidades.length)]);
    }

    for (let i = 0; i < quantidadeResultado; i++) {
      respostas.push(resultado[Math.floor(Math.random() * resultado.length)]);
    }

    for (let i = 0; i < quantidadeProximo; i++) {
      respostas.push(proximo[Math.floor(Math.random() * proximo.length)]);
    }

    for (let i = 0; i < quantidadeLive; i++) {
      respostas.push(live[Math.floor(Math.random() * live.length)]);
    }

    for (let i = 0; i < quantidadeJogador; i++) {
      respostas.push(jogador[Math.floor(Math.random() * jogador.length)]);
    }

// Se nenhuma palavra-chave foi identificada, envia resposta padrão com instruções
    let resposta;
    if (respostas.length === 0) {
      resposta = "Não peguei esse comando... 😅 Mas se estiver procurando algo, manda ver! Posso te contar <b>curiosidades</b>, <b>notícias</b>, <b>dicas de CS</b>, <b>resultados</b> ou até te contar sobre a <b>próxima partida da FURIA</b> ou sobre os nossos <b>jogadores</b>! 🕹️ Fala aí o que você quer saber!";
    } else {
      resposta = respostas.join("<br><br>");
    }

    res.send(resposta);
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});