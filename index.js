const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fsceenry&psig=AOvVaw1gQxNHuOisWyptpQiPIDx7&ust=1722859650165000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjjsr-m24cDFQAAAAAdAAAAABAE">

    <h1>Welcome to My Homepage</h1>
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