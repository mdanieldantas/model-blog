const express = require('express')
const path = require('path')
const router = require('./router')

const app = express()

// Configuração do EJS como view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração para ler dados do formulário
app.use(express.urlencoded({ extended: true }))

// Configuração para servir arquivos estáticos
app.use(express.static('public'))

// Adiciona as rotas do roteador na aplicação
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}/`))




















// const express = require('express')
// const path = require('path')

// const app = express()

// const storedUsers = []

// // Configuração do EJS como view engine
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))


// // Configuração para ler dados do formulário html para que o express entenda e manipule os dados do formulário html para o servidor express ler as instrings do formulário
// app.use(express.urlencoded({ extended: true }))

// // Configuração para servir arquivos estáticos
// app.use(express.static('public'))

// // app.get("/",(req,res)=>{
// // const title = "Projeto MVC"
// // const mensage = "Bem vindo ao projeto MVC"
// //     res.render('index',{title,mensage})
// // })

// app.get("/formulario",(req,res)=>{
//     res.render("form")
// })

// app.post("/register",(req,res)=>{
// const username = req.body.username
// const password = req.body.password

//     // Cria um objeto user com as propriedades username e password
//     const user = { username, password };
    

//     // Adiciona o objeto user à lista storedUsers
//     storedUsers.push(user);

// res.redirect("/usuarios")
// })

// app.get("/usuarios",(req,res)=>{
//     res.render("users",{users:storedUsers})
// });

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}/`))

