const http = require('http');

const queryOrder = function getUrlContentWithHttpGet() {
  // eslint-disable-next-line prefer-rest-params
  const arg = arguments;
  return new Promise(((resolve) => {
    http.get(arg[0], (res) => {
      const chunks = [];
      res.on('data', (chunk) => {
        chunks.push(chunk);
      });
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        console.log(`**********************${arg[0]}**********************`);
        resolve([buffer.toString(), arg[1]]);
      });
    });
  }));
};

module.exports = queryOrder;
