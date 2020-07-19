const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb+srv://musika:musikadb@cluster0.vulbs.mongodb.net/musika?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => console.log('DB Connected')).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Test')
})

app.listen('5000')