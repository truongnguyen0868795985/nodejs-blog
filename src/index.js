const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let a = 1;
  let b = 2;
  c = a + b;

  res.send('Hello World!' + c)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})