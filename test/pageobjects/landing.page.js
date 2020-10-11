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

    /**
     * This method is going to perform a search on the landing page
     * param: text to search for
     */
    SearchProduct (text) {
        this.searchInput.setValue(text);
        this.buttonSearch.click(); 
    }

    /**
     * Opens up the landing page 
     */
    open () {
        return super.open('/');
    }

  //   takePercySnapshot (screenshot) {
  //     return super.takePercySnapshot(screenshot);
  // }
}

module.exports = new LandingPage();
