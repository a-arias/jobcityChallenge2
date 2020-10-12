const LandingPage = require('../pageobjects/landing.page');

describe('Pixel Perfect testing',  async function(){
    it('should display pixel-perfect on Chrome browser, viewport 1200px and above.', async function(){
      //Opening the landing page.
      LandingPage.open();

      //Taking Snapshot using percy to validate pixel perfect page on Percy backed.
      await percySnapshot(browser, "first screenshot",{ widths: [1200, 1400, 1800] })
    });
});

