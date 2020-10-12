const Page = require('./page');

class SearchResultsPage extends Page {
    clickItemFromList (itemTittle) {
      return $("h5[itemprop='name']").$(`a[title='${itemTittle}']`).click();
    }
}

module.exports = new SearchResultsPage();