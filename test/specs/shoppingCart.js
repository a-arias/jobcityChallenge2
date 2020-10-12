const LandingPage = require('../pageobjects/landing.page');
const SearchResultsPage = require('../pageobjects/searchResults.page');
const InformationPage = require('../pageobjects/InformationPageForProduct.page');
const CheckoutPage = require('../pageobjects/checkout.page');


describe('Shopping Cart Functionality',  () =>{
    xit('should be able to add an item to the cart and then reflect the product quantity ', () =>{
      LandingPage.open();
      LandingPage.SearchProduct('Faded Short Sleeve T-shirts');

      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');
      InformationPage.clickAddToCarButton();
      InformationPage.clickContinueShoppingButton();


      const cartItemCount = $('span.ajax_cart_quantity');
      expect(cartItemCount).toHaveText('1');
    });

    xit('should be able to remove an item from the shopping cart summary', () =>{
      LandingPage.open();
      LandingPage.SearchProduct('Faded Short Sleeve T-shirts');

      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');
      InformationPage.clickAddToCarButton();
      InformationPage.clickProceedToCheckout();

      CheckoutPage.deleteItemFromCartSummary(0);

      const successDeletedItemMessage = $('p.alert-warning');
      expect(successDeletedItemMessage).toHaveText('Your shopping cart is empty.');

    });

    it('should be able to remove an item from the shopping cart Header', () =>{
      LandingPage.open();
      LandingPage.SearchProduct('Faded Short Sleeve T-shirts');

      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');
      InformationPage.clickAddToCarButton();
      InformationPage.clickContinueShoppingButton();

      LandingPage.open();
      LandingPage.deleteFirstItemFromShoppingCart();

      const cartItemCount = $('p.cart_block_no_products');
      expect(cartItemCount).toHaveText('No products');

    });
});
