require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello from the backend!');
}); 

app.get('/github', (req, res) =>{
  const gitHubdata =
{
  "login": "Sudesh3103",
  "id": 121598949,
  "node_id": "U_kgDOBz9z5Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/121598949?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sudesh3103",
  "html_url": "https://github.com/Sudesh3103",
  "followers_url": "https://api.github.com/users/Sudesh3103/followers",
  "following_url": "https://api.github.com/users/Sudesh3103/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sudesh3103/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sudesh3103/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sudesh3103/subscriptions",
  "organizations_url": "https://api.github.com/users/Sudesh3103/orgs",
  "repos_url": "https://api.github.com/users/Sudesh3103/repos",
  "events_url": "https://api.github.com/users/Sudesh3103/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sudesh3103/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sudesh Kalokhe",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Java Fullstack Developer || Software Tester (Selenium)",
  "twitter_username": null,
  "public_repos": 34,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-12-29T06:10:47Z",
  "updated_at": "2026-03-28T10:07:01Z"
}
    res.json(gitHubdata);
})

app.get('/twitter', (req, res) => {
    res.send('Twitter API endpoint');
});

app.get('/login', (req,res) =>{
    res.send('<h1>Successfully Login</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('YouTube API endpoint');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 

