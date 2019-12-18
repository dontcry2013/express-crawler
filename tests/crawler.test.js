const Crawler = require('crawler');

describe('Crawler test', () => {
  let crawler = null;

  beforeAll(() => {
    crawler = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback(error, res, done) {
        if (error) {
          console.log(error);
        } else {
          const { $ } = res;
          // $ is Cheerio by default
          // a lean implementation of core jQuery designed specifically for the server
          console.log($('title').text());
        }
        done();
      },
    });
  });

  test('should crawl one request', (done) => {
    const callback = (error, res) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Grabbed', res.body.length, 'bytes');
        expect(res.body.length > 0).toEqual(true);
      }
      done();
    };

    crawler.queue({
      uri: 'http://www.google.com.au',
      callback,
    });
  });
});
