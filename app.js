const express = require('express')
const app = express()
const port = 7000

app.use(express.json())

app.get('/', (req, res) => {
  console.log(`get request has come`)
  res.send('<h1>Hello World !<h1/>')
})
app.get('/customer', (req, res) => {
    console.log(req.body)
    res.send('Hello customer!')
  })

app.get('/customer/:id', (req, res) => {
    console.log(req.params)
    res.send('Hello customer id!')
  })  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})