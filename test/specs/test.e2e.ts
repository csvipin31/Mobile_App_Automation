import androidLoginPage from '../pageobjects/android/login.page.js';
import iosLoginPage from '../pageobjects/ios/login.page.js';

describe('My Login application', () => {
    it.only('should login with valid credentials on android device', async () => {
        //await androidLoginPage.open()

        await androidLoginPage.login('tmydeal@gmail.com', 'Change@2024!');

    });

    it('should login with valid credentials on ios device ', async () => {
        //await iosLoginPage.open()

        await iosLoginPage.login('tmydeal@gmail.com', 'Change@2024!');
    });

});