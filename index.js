const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors());
const port = process.env.PORT
const gitdata = {
    "login": "aman-waterdip",
    "id": 162797207,
    "node_id": "U_kgDOCbQWlw",
    "avatar_url": "https://avatars.githubusercontent.com/u/162797207?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aman-waterdip",
    "html_url": "https://github.com/aman-waterdip",
    "followers_url": "https://api.github.com/users/aman-waterdip/followers",
    "following_url": "https://api.github.com/users/aman-waterdip/following{/other_user}",
    "gists_url": "https://api.github.com/users/aman-waterdip/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aman-waterdip/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aman-waterdip/subscriptions",
    "organizations_url": "https://api.github.com/users/aman-waterdip/orgs",
    "repos_url": "https://api.github.com/users/aman-waterdip/repos",
    "events_url": "https://api.github.com/users/aman-waterdip/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aman-waterdip/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-03-09T10:21:11Z",
    "updated_at": "2024-07-30T17:01:14Z"
  }
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


app.get('/jokes' , (req, res) => {
    const data = [
        {"id": 1, "title": "A joke", "content": "This is a joke"},
        {"id": 2, "title": "Another joke", "content": "This is another joke"},
        {"id": 3, "title": "A third joke", "content": "This is a third joke"},
        {"id": 4, "title": "A fourth joke", "content": "This is a fourth joke"},
        {"id": 5, "title": "A fifth joke", "content": "This is a fifth joke"}
    ]
    res.json(data)
})

app.get('/check', (req, res)=> {
    res.send('check')
})
app.get('/aman' , (req,res) => {
    res.send(`aman choudhary`)
})

app.get('/github', (req,res)=> {
    res.json(gitdata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})