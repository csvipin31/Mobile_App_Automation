//import handleSpecificAlert from '../../helpers/alertHandler.js';
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('android=new UiSelector().resourceId("username")');
    }

    get inputPassword() {
        return $('android=new UiSelector().resourceId("password")');
    }

    get btnLogin() {
        return $('android=new UiSelector().text("Log In")');
    }

    get btnAccount() {
        return $('android=new UiSelector().resourceId("com.appetiser.mydeal.dev:id/navigation_bar_item_icon_view").instance(4)');
    }

    get btnLoginSignUp() {
        return $('id=com.appetiser.mydeal.dev:id/btnLogin');
    }

    get btnMydealApp() {
        return $('~Predicted app: MyDeal-Dev');
    }

    get labelEmail() {
        return $('[id=\'com.appetiser.mydeal.dev:id/tvUserEmail\']');
    }

    get btnSignOut() {
        return $('android=new UiSelector().text("Sign out of your account")');
    }

    get btnConfirm() {
        return $('android=new UiSelector().resourceId("android:id/button1")');
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
        await this.btnAccount.click();
        await this.btnLoginSignUp.click();
        //await driver.pause(5000);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        const eamil = await this.labelEmail;
        //await driver.pause(5000);
        eamil.waitForExist({ timeout: 5000 });
        console.log('email', await eamil.getText());
        const bottomElementSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Sign out"))';
        const bottomEl = await $(`android=${bottomElementSelector}`);
        await driver.pause(5000);
        //console.log("bottomEl ====>>", bottomEl)
        await bottomEl.waitForExist({ timeout: 50000 });
        await bottomEl.click();
        await this.btnConfirm.waitForExist({ timeout: 50000 });
        await this.btnConfirm.click();
        //await handleSpecificAlert(browser, "Are you sure you want to sign out", 'yes');
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
