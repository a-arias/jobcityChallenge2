const LandingPage = require('../pageobjects/landing.page');
//const { percySnapshot } = require('@percy/webdriverio');

describe('Pixel Perfect testing',  async function(){
    it('should display pixel-perfect on Chrome browser, viewport 1200px and above.', async function(){
      LandingPage.open();
      
      await percySnapshot(browser, "first screenshot",{ widths: [1200, 1400, 1800] })
    });
});

