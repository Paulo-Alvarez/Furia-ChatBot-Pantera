# 🐾 Pantera - Chatbot FURIA CS

# Introdução

**Pantera** é um ChatBot interativo feito para fãs da equipe de CS da **FURIA**. Ele responde perguntas sobre **dicas de CS**, **notícias**, **curiosidades**, **resultados de jogos**, **próximas partidas**, etc.
 Foi idealizado para aproximar os torcedores do time e trazer informações valiosas para os fãs da equipe.

![image](https://github.com/user-attachments/assets/565748dd-bed5-4ca8-96c8-b4fca547b582)

A tela inicial é simples e com uma pegada tecnológica que buscar trazer uma estética parecida com plataformas usadas pelo público gamer, como o Discord.
Além disso, busquei utilizar predominantemente cores que remetam ao time da **FURIA** para manter a coesão estética da marca.

Para além do chat, e com o objetivo principal de **aumentar a imersão** do usuário, foi adicionado um botão de **Cheat-Codes** no canto inferior esquerdo da página para evidenciar os comandos de interação com o Pantera.
Outro detalhe é que ao clicar na logo da FURIA, um som de um rugido de Pantera pode ser ouvido pelo fã da equipe.


# Como Utilizar

O usuário poderá interagir com o ChatBot principalmente através da caixa de mensagens central, digitando comandos ou perguntas sobre o time.
O bot responderá de maneira direta e personalizada, com uma linguagem descontraída e voltada ao público que acompanha o cenário competitivo de CS.

Logo ao acessar a página, o Pantera dá as boas-vindas e já apresenta algumas sugestões de comandos que podem ser utilizados.

![image](https://github.com/user-attachments/assets/c8fdc656-f866-4438-a722-57879c718837)

*Exemplos de comandos:*

**Dica** — Devolve uma dica prática para melhorar seu desempenho em partidas.  
**Notícia** — Devolve as últimas novidades envolvendo o time.  
**Curiosidade** — Devolve fatos interessantes sobre jogadores ou momentos históricos da FURIA.  
**Jogador** — Devolve o lineup atual do time e o papel de cada jogador.  
**Próximo** — Informa qual será o próximo jogo da FURIA.  
**Resultado** — Informa o placar da partida mais recente.  
**Ao Vivo** — Informa atualizações do jogo que estiver acontecendo no momento. (Esse comando deve devolver aviso que não há jogo acontecendo no momento, caso esse seja o caso)

Ao digitar qualquer um desses comandos ou uma variação deles, o bot irá interpretar e responder com a informação correspondente.

# Como Funciona

O backend do Pantera foi desenvolvido em **Node.js**, utilizando o **framework Express** para lidar com as requisições e estruturar a lógica do chatbot.

Toda vez que o usuário envia uma mensagem no chat, ela é enviada via POST para o endpoint principal (/chat). A mensagem é automaticamente convertida para letras minúsculas e, então, comparada com uma série de palavras-chave associadas a diferentes categorias: notícias, curiosidades, dicas, resultados, jogadores, próximas partidas e informações em tempo real.

A lógica central consiste em:

**Verificação de palavras-chave:**
Uma função verifica se a mensagem do usuário contém palavras associadas a cada uma das categorias possíveis. Isso permite que o Pantera entenda a intenção do usuário, mesmo que ele escreva de formas diferentes (ex: "dica", "conselho" ou "macete" são entendidos como a mesma coisa).

**Resposta dinâmica e aleatória:**
Para deixar as respostas mais naturais e variadas, cada categoria possui um conjunto de frases pré-definidas. Quando identificada uma categoria, o bot escolhe aleatoriamente uma resposta daquela categoria para enviar ao usuário.

**Respostas múltiplas:**
Se a mensagem do usuário mencionar mais de uma categoria (por exemplo, "me dá uma dica e uma curiosidade"), o Pantera responde com uma resposta de cada, mantendo a conversa fluida e rica.

![image](https://github.com/user-attachments/assets/5fae5506-81b3-4838-b846-aa9cd84976b9)


**Fallback inteligente:**
Se nenhuma palavra-chave for encontrada, o Pantera retorna uma mensagem padrão, explicando como o usuário pode interagir e quais comandos estão disponíveis.

![image](https://github.com/user-attachments/assets/c0356296-2012-45a5-9791-df501c11f339)

# Tecnologias Utilizadas

O desenvolvimento do bot envolveu o uso de tecnologias simples, mas eficientes, com foco em fácil manutenção e rápida escalabilidade:

**HTML, CSS e JavaScript:** Responsáveis por estruturar, estilizar e dar interatividade à interface do chatbot.

**Node.js:** Utilizado no backend para criar um servidor leve e rápido, capaz de processar as mensagens do chat de forma eficiente.

**Express:** Framework minimalista do Node.js, que organiza as rotas e gerencia as requisições HTTP de forma limpa e direta.

**Render:** Plataforma de hospedagem escolhida para publicar o projeto na web com praticidade.

# Considerações Finais

A estrutura pensada para o Pantera torna o ChatBot **flexível, escalável e fácil de manter**: novos comandos ou frases podem ser adicionados com rapidez, sem precisar alterar a lógica principal do servidor.

A combinação de **simplicidade técnica** com **interação contextualizada** torna a experiência com o Pantera mais divertida e próxima da comunidade gamer que acompanha a FURIA.

