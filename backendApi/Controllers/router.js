const router = require('express').Router();
const getSpotifyToken = require('./request');
router.get('/spotify', (req, resF, next) => {
  getSpotifyToken()
    .then(res => {
      resF.json(res);
      next();
    })
    .catch(err => {
      resF.json(err);
    });
});
router.get('/teste', (req, res) => {
  res.json('work!');
});
module.exports = router;
