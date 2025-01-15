const { isUtf8 } = require('buffer')
const express = require('express')
const path = require('path')

const app = express()

// Configuração do EJS como view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração para ler dados do formulário
app.use(express.urlencoded({ extended: true }))

// Configuração para servir arquivos estáticos
app.use(express.static('public'))

app.get("/",(req,res)=>{
const title = "Projeto MVC"
const mensage = "Bem vindo ao projeto MVC"
    res.render('index',{title,mensage})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}/`))

