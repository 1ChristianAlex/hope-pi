const os = require('os');
let networkI = os.networkInterfaces();
let key = Object.keys(networkI)[0];
let ip = networkI[key].map(item => item.address);
module.exports = ip[0];
