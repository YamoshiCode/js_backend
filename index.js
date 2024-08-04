const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('
    <h1>Welcome to My Homepage </h1>
    <p>This is a static homepage with a background image.</p>

')
})


app.get('/check', (req, res)=> {
    res.send('check')
})
app.get('/aman' , (req,res) => {
    res.send(`aman choudhary`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})