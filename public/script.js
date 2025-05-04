// ==== ELEMENTOS DA INTERFACE ====
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const panteraLogo = document.getElementById('pantera-logo');
const rugido = new Audio('sons/pantera-rugido.mp3');

// ==== FUNÇÃO PARA ADICIONAR MENSAGENS NO CHAT ====
function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender === 'FURIA Bot' ? 'bot' : 'user');

  const content = document.createElement('div');
  content.classList.add('message-text');
  content.innerHTML = text;
  msg.appendChild(content);

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;

  return content;
}

// ==== ENVIO DE MENSAGEM ====
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  addMessage("Você", message);

  const botMessage = addMessage("FURIA Bot", "");

// Simula digitação com "..."
  let dots = 0;
  const typingInterval = setInterval(() => {
    if (dots < 3) {
      botMessage.textContent += ".";
      dots++;
      botMessage.parentElement.scrollIntoView({ behavior: "smooth" });
    } else {
      clearInterval(typingInterval);
    }
  }, 300);

// Aguarda resposta do servidor
  setTimeout(async () => {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
  
    const text = await response.text();
    botMessage.innerHTML = text;
  
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1300);
});

// ==== MENSAGEM INICIAL AO CARREGAR ====
window.onload = function() {
  const welcomeMessage = `🖤 Fala, <b>FURIOSO(A)</b>! 🐾
Bem-vindo ao canal oficial da <b>FURIA CS</b>. Eu sou o bot <b>PANTERA</b>, sempre pronto pra te ajudar.

🗓️ Quer saber quando rola o <b>próximo jogo</b>?
📢 Buscando as últimas <b>notícias</b> do time?
💡 Quer <b>dicas</b> insanas de CS pra subir para o próximo nível?
🤯 Que tal algumas <b>curiosidades</b>?

Pode contar comigo! É só mandar ver 🔥`;

  addMessage("FURIA Bot", welcomeMessage);
};

// ==== EXIBIÇÃO CHEAT CODES ===
const cheatToggle = document.getElementById("cheat-codes-toggle");
const cheatContent = document.getElementById("cheat-codes-content");

cheatToggle.addEventListener("click", () => {
  cheatContent.classList.toggle("show");
});

// ==== RUGIDO DO PANTERA ====
panteraLogo.addEventListener('click', () => {
  rugido.pause();
  rugido.currentTime = 2.7;
  rugido.play();
});