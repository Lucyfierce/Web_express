const express = require('express')

const app = express ()

app.use(express.json())

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

app.get('/musicos', (req, res) => {
    res.send(musicos)
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})