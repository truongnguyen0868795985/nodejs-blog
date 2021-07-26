const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000
const route = require('./routes/index')
// 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

// View engine - Handlebars

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Logger
// app.use(morgan('combined'))

// Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})