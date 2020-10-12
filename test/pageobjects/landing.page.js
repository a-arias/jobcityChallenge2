const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchInput () { return $('#search_query_top') }
    get buttonSearch () { return $('//*[@name="submit_search"]') }
    get signInButton () { return $("a*=Log in to your customer account") }


    /**
     * This method is going to perform a search on the landing page
     * param: text to search for
     */
    SearchProduct (text) {
        this.searchInput.setValue(text);
        this.buttonSearch.click(); 
    }

    /**
     * Clicks sing in button on the navbar page
     */
    clickSignInButton () {
      this.signInButton.click(); 
    }

    /**
     * Deletes the first added item on the header shopping cart
     */
    deleteFirstItemFromShoppingCart(){
        $("a[title='View my shopping cart']").moveTo();
        $("a[title='remove this product from my cart']").waitForDisplayed();
        $("a[title='remove this product from my cart']").click();
    }
    /**
     * Opens up the landing page 
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LandingPage();
