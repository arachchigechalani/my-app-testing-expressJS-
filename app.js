const express = require('express')
const app = express()
const port = 7000

app.use(express.json())

app.get('/', (req, res) => {
  console.log(`get request has come`)
  res.send('<h1>Hello World get!<h1/>')
})

app.post('/customer', (req, res) => {
    console.log(req.body.name);
    res.send('Hello customer post!')
  })

  //params wlin ena ekk alla ganima
app.delete('/customer/:id', (req, res) => {
    console.log(req.params)
    res.send('Hello customer id using params!')
  })
  
  //Query parameter wlin ena ekk allaganima
  app.delete('/customer', (req, res) => {
    console.log(req.query.id)
    res.send('delete id using query parameter!')
  })  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})