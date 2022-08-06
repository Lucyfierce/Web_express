const express = require('express')

const app = express ()

let musicos = [
    {
        id: 1,
        nome: 'Herbie Hancock',
        instrumento: 'piano',
        musica: 'Cantaloupe Island',
    },
    {
        id: 2,
        nome: 'Nina Simone',
        instrumento: 'piano',
        musica: 'Feel Good',
    },
    {
        id: 3,
        nome: 'Pat Metheny',
        instrumento: 'guitarra',
        musica: 'Bright Size Life',

    },
]

app.use(express.json())

app.get('/musicos', (req, res) => {
    res.send(musicos)
})

app.post('/musicos', (req, res) => {
    musicos.push(req.body)
    res.send(musicos)
})

app.put('/musicos/:id', (req, res) => {
    let musico = musicos.find(mus => mus.id == req.params.id)

    if (!musico){
         
    return res.status(400).json({ error: 'Usuário não encontrado.' });
    }
    musico.nome = req.body.nome
    musico.instrumento = req.body.intrumento
    musico.musica = req.body.musica
    res.send(musicos)
})

app.delete('/musicos/:id', (req, res) => {
    let musico = musicos.find(mus => mus.id == req.params.id)
    musicos.splice(musicos.indexOf(musico), 1)
    res.status(200).send(musicos)
})


app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})