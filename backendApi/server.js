const request = require('request');
const express = require('express');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
const getSpotifyToken = () => {
  return new Promise((res, rej) => {
    const url = 'https://accounts.spotify.com/api/token';
    request(
      url,
      {
        method: 'POST',
        headers: {
          Authorization:
            'Basic YjlkYThmOTc0MGJjNGNmNGFlNzU1ODJhYjM3N2NiN2Y6OGUxOWUyYTJiZDIyNDQ5YzhiYTNiNTBmZDJmMzU1ODE=',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
      },
      (error, response) => {
        if (response) {
          let body = response.body;
          res(JSON.parse(body));
        } else {
          rej(error);
        }
      }
    );
  });
};
app.get('/', (req, resF, next) => {
  getSpotifyToken()
    .then(res => {
      resF.json(res);
      next();
    })
    .catch(err => {
      resF.json(err);
    });
});
app.listen(3000, 'localhost', () => {
  console.log('Listesing on port 3000');
});
