require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
}); 

app.get('/twitter', (req, res) => {
    res.send('Twitter API endpoint');
});

app.get('/login', (req,res) =>{
    res.send('<h1>Successfully Login</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('YouTube API endpoint');
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 

