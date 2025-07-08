const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ddd', (req, res) => {
  res.send('Hello nelson!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
