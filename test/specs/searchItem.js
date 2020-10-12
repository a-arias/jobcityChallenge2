const LandingPage = require('../pageobjects/landing.page');
const SearchResultsPage = require('../pageobjects/searchResults.page');
const InformationPage = require('../pageobjects/InformationPageForProduct.page');
const CheckoutPage = require('../pageobjects/checkout.page');


describe('Search item functionality',  () =>{
    it('should be able to search a product and then buy it', () =>{
      LandingPage.open();
      LandingPage.SearchProduct('Faded Short Sleeve T-shirts');

      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');
      InformationPage.clickAddToCarButton();
      InformationPage.clickProceedToCheckout();

      CheckoutPage.completeBuyOut();


      const successMessageElem = $('p.alert-success');
      expect(successMessageElem).toHaveText('Your order on My Store is complete.')
      expect(browser).toHaveTitle('Order confirmation - My Store')
    });

    it('should be able add a product from category section and buy it', () =>{
      LandingPage.open();

      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');
      InformationPage.clickAddToCarButton();
      InformationPage.clickProceedToCheckout();

      CheckoutPage.completeBuyOut();

      const successMessageElem = $('p.alert-success');
      expect(successMessageElem).toHaveText('Your order on My Store is complete.')
      expect(browser).toHaveTitle('Order confirmation - My Store')
    });
});
