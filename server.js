const express = require('express')
const app = express()
const PORT = 3000
const pokemon = require('./models/pokemon')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.get('/pokemon',(req, res) =>{
    res.render('index.ejs',{
        pokemon: pokemon
    })
})

app.get('/pokemon/:id',(req, res) =>{
    res.render('show.ejs',{
        pokemon: pokemon[req.params.id]
    })
})

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`))