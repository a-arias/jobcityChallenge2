const LandingPage = require('../pageobjects/landing.page');

describe('Pixel Perfect testing', () => {
    it('should be able to verify UI with pixel perfect', () => {
      LandingPage.open();

      //browser.url('https://example.com/')
      // percySnapshot(browser, this.test.fullTitle())


      //percySnapshot('Dashboard')
      //LandingPage.takePercySnapshot('Homepage');

      percySnapshot('Dashboard', { widths: [1200, 1400], enableJavaScript: true, minimumHeight: 800 });
    });
});

