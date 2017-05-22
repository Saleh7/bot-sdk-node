/*
  * hackerNews Bot for Wire
  *
*/
const path = require('path');

module.exports = {
  getOptions() {
    return {
      port: 8051,
      key: 'server.key',
      cert: 'server.crt',
      storePath: 'store',
      auth: '<put your auth token here>',
    }
  },
};
