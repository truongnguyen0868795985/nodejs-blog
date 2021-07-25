const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000

// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

// View engine - Handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))

// Logger
// app.use(morgan('combined'))

// Routes
app.get('/', (req, res) => {
  console.log('path', path.join(__dirname, 'public'))
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})