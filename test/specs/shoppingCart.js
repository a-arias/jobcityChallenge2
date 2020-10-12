const LandingPage = require('../pageobjects/landing.page');
const SearchResultsPage = require('../pageobjects/searchResults.page');
const InformationPage = require('../pageobjects/InformationPageForProduct.page');
const CheckoutPage = require('../pageobjects/checkout.page');


describe('Shopping Cart Functionality',  () =>{
    it('should be able to add an item to the cart and then reflect the product quantity ', () =>{
      //Opening the landing page.
      LandingPage.open();
      //Performing search of the product: Faded Short Sleeve T-shirts.
      LandingPage.SearchProduct('Faded Short Sleeve T-shirts');

      //Clicks the results page item with a given name.
      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');
      
      //Clicks add to car button from the information item page.
      InformationPage.clickAddToCarButton();

      //Clicks continue shopping button in order to stay on the same page.
      InformationPage.clickContinueShoppingButton();

      //Obtaining the product quantity counter
      const cartItemCount = $('span.ajax_cart_quantity');
      //Asserts the product quantity is the correct one, in this case 1, since we only added 1 product to the shopping cart.
      expect(cartItemCount).toHaveText('1');
    });

    it('should be able to remove an item from the shopping cart summary', () =>{
      //Opening the landing page.
      LandingPage.open();
      //Performing search of the product: Faded Short Sleeve T-shirts.
      LandingPage.SearchProduct('Faded Short Sleeve T-shirts');

      //Clicks the results page item with a given name.
      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');

      //Clicks add to car button from the information item page.
      InformationPage.clickAddToCarButton();

      //Clicks Proceed To Checkout button from the information item page.
      InformationPage.clickProceedToCheckout();

      //Deleting item from shopping cart page using index of the item, in this case 0, since we only added 1 element to the shopping cart, wich is zero-based
      CheckoutPage.deleteItemFromCartSummary(0);

      //Obtaining the alert message of the shopping cart product quantity
      const successDeletedItemMessage = $('p.alert-warning');

      //Asserts the Shopping cart is empty because we deleted the only item on it.
      expect(successDeletedItemMessage).toHaveText('Your shopping cart is empty.');
    });

    it('should be able to remove an item from the shopping cart Header', () =>{
      //Opening the landing page.
      LandingPage.open();
      
      //Performing search of the product: Faded Short Sleeve T-shirts.
      LandingPage.SearchProduct('Faded Short Sleeve T-shirts');

      //Clicks the results page item with a given name.
      SearchResultsPage.clickItemFromList('Faded Short Sleeve T-shirts');

      //Clicks add to car button from the information item page.
      InformationPage.clickAddToCarButton();

      //Clicks continue shopping button.
      InformationPage.clickContinueShoppingButton();

      //Then we re open the landing page
      LandingPage.open();

      //And delete the first item from HEADER shopping cart
      LandingPage.deleteFirstItemFromShoppingCart();

      //Then we re open the Shopping cart page
      CheckoutPage.open();

      //And we Assert that we successfuly removed the item from the cart
      const itemsCount = $('p.alert-warning');
      expect(itemsCount).toHaveText('Your shopping cart is empty.');
    });
});
