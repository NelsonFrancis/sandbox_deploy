const express = require('express')
const app = express()
const port = 4000

var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ddd', (req, res) => {
  res.send('Hello nelson!')
})

const jsondata = {
    "name": "Nelson",
    age: 36
}

app.get('/data', (req, res) => {
    res.json(jsondata)
})

app.get('/api/more', (req, res) => {
    const moredata = [
        {
            id: 1,
            color: "blue",
            sports: ['Cricket', 'Football'] 
        },
        {
            id: 2,
            color: "green",
            sports: ['Hockey', 'Tennis'] 
        },
    ]
    res.send(moredata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
