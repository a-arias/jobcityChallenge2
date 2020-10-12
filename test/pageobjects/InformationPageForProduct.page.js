const Page = require('./page');

class InformationPage extends Page {
    get socialButtons () { return $('p.socialsharing_product') }
    get addToCartButton () { return $('p#add_to_cart') }
    get proceedToCheckoutButton () { return $("a[title='Proceed to checkout']") }
    get continueShoppingButton () { return $("span[title='Continue shopping']") }


    clickProceedToCheckout(){
      this.proceedToCheckoutButton.waitForDisplayed({ timeout: 5000 });
      this.proceedToCheckoutButton.click();
    }

    clickAddToCarButton(){
      this.addToCartButton.waitForDisplayed({ timeout: 5000 });
      this.addToCartButton.click();
    }

    clickContinueShoppingButton(){
      this.continueShoppingButton.waitForDisplayed({ timeout: 5000 });
      this.continueShoppingButton.click();
    }

    
    // makeSureSocialButtonsArePresentOnPage(){
    //   this.socialButtons();
    // }

    // makeSureAddToCarButtonisPresentOnPage(){
    //   this.addToCartButton();
    // }
}

module.exports = new InformationPage();