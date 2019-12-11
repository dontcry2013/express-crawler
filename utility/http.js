const http = require('http');

const queryOrder = function getUrlContentWithHttpGet() {
  // eslint-disable-next-line prefer-rest-params
  const arg = arguments;
  let str = '';
  return new Promise(((resolve) => {
    http.get(arg[0], (res) => {
      res.on('data', (chunk) => {
        let chunkStr = chunk.toString();
        chunkStr = chunkStr.replace(/\r?\n|\r|\t/g, ' ');
        str += chunkStr;
      });
      res.on('end', () => {
        // const buffer = Buffer.concat(chunks);
        console.log(`**********************${arg[0]}**********************`);
        resolve([str, arg[1]]);
      });
    });
  }));
};

module.exports = queryOrder;
