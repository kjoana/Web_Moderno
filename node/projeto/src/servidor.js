const porta =  3003

const express = require('express')
const app = express()
const bancodedados = require('.../bancodedados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})