const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send(`
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Static Homepage</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            font-family: Arial, sans-serif;
        }
        body {
            background-image: url('https://www.shutterstock.com/image-photo/scenic-view-green-plants-trees-260nw-2156703881.jpg'); /* Make sure to place the background.jpg image in the same directory */
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: black;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        h1 {
            font-size: 4em;
            margin: 0.2em 0;
        }
        p {
            font-size: 1.5em;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Homepage</h1>
    <p>This is a static homepage with a background image.</p>
    <img src="https://qph.cf2.quoracdn.net/main-qimg-fcfe20644eeb9c0b5062ede20a44933f-lq">
</body>
</html>


`)
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