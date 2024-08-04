const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html>
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
            background-image: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fsceenry&psig=AOvVaw1gQxNHuOisWyptpQiPIDx7&ust=1722859650165000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjjsr-m24cDFQAAAAAdAAAAABAE"); /* Make sure to place the background.jpg image in the same directory */
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
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
</body>
</html>
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