const os = require('os');
let networkI = os.networkInterfaces();
let ip = networkI.Ethernet.map(item => item.address);

module.exports = ip[1];
