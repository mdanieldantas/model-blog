// Importa o módulo Express, que é um framework para criar servidores web e APIs no Node.js
const express = require('express');

// Importa o módulo Path, que fornece utilitários para trabalhar com caminhos de arquivos e diretórios
const path = require('path');

// Cria uma instância do servidor Express
const app = express();

// Configura o motor de template EJS para renderizar HTML dinâmico
app.set('view engine', 'ejs');

// Define o diretório onde os templates EJS estão localizados
app.set('views', path.join(__dirname, 'views'));

// Middleware para analisar o corpo das solicitações HTTP com dados codificados em URL
app.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos (como imagens, CSS, JavaScript) da pasta 'public'
app.use(express.static('public'));

// Define a porta na qual o servidor irá escutar. Usa a porta definida em process.env.PORT ou 3000 se não estiver definida
const PORT = process.env.PORT || 3000;

// Inicia o servidor e faz com que ele escute na porta definida. Exibe uma mensagem no console quando o servidor está pronto
app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}/`));

