import handleSpecificAlert from '../../helpers/alertHandler.js';
import Page from '../page.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        let selector = '**/XCUIElementTypeTextField[`name == "MyDeal Email*"`]';
        return $(`-ios class chain:${selector}`);
    }

    get inputPassword() {
        let selector = '**/XCUIElementTypeSecureTextField[`name == "Password*"`]';
        return $(`-ios class chain:${selector}`);
    }

    get btnLogin() {
        const selector = 'name == "Log In"';
        return $(`-ios predicate string:${selector}`);
    }

    get btnAccount() {
        return $('~iconUser');
    }

    get btnLoginSignUp() {
        const selector = '**/XCUIElementTypeButton[`name == "Login / Sign Up"`]';
        return $(`-ios class chain:${selector}`);
    }

    get btnMydealApp() {
        return $('~Predicted app: MyDeal-Dev');
    }

    get labelEmail() {
        const selector = '**/XCUIElementTypeStaticText[`name == "tmydeal@gmail.com"`]';
        return $(`-ios class chain:${selector}`);
    }

    get btnSignOut() {
        return $('~Sign Out');
    }

    get btnConfirm() {
        return $('~Confirm');
    }

    get btnAccounts() {
        return $('android=new UiSelector().text("My Wallet")');
    }
    get btnAccountBack() {
        return $('android=new UiSelector().className("android.view.View").instance(2)');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username: string | number, password: string | number) {
        //await this.btnMydealApp.click();
        await driver.pause(5000);
        await this.btnAccount.click();
        await this.btnLoginSignUp.click();
        //await driver.pause(5000);
        await this.inputUsername.setValue(username);
        // await driver.pause(5000);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        const eamil = await this.labelEmail;
        // await driver.pause(5000);
        eamil.waitForExist({ timeout: 5000 });
        console.log('email', await eamil.getText());
        await driver.execute('mobile: scrollToElement', { elementId: await this.btnSignOut });
        // await driver.pause(5000);
        await this.btnSignOut.click();
        await handleSpecificAlert(browser, 'Do you want to Sign Out', 'confirm');
        // await this.btnConfirm.waitForExist({ timeout: 50000 });
        // await this.btnConfirm.click();
        await driver.pause(5000);
        await this.btnLoginSignUp.waitForExist({ timeout: 10000 });
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    // public open() {
    //     return super.open('login');
    // }
}

export default new LoginPage();
