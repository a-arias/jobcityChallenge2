const Page = require('./page');
class LoginPage extends Page {
    get emailInput () { return $('#email') }
    get passwordInput () { return $('#passwd') }
    get loginButton () { return $("#SubmitLogin") }

    loginAsNormalUser (email = 'arias.abram+1@gmail.com',password = 'nasadina') {
        this.emailInput.waitForDisplayed();
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }

    open () {
        return super.open('/index.php?controller=authentication&back=my-account');
    }
}

module.exports = new LoginPage();
