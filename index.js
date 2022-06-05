const express = require('express')
const path = require('path');
const ejs = require('ejs');
const app = express()
require('dotenv').config()

const port = (process.env.PORT || 3200)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/about.html'))
})

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/contact.html'))
})

app.get('/home', (req, res) => {
	res.render('home')
})

// static files
app.use(express.static(path.join(__dirname, 'public')))


app.listen(port, () => console.log(`server port ${port}`))
