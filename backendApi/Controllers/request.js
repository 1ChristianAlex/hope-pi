const request = require('request');
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
module.exports = getSpotifyToken;
