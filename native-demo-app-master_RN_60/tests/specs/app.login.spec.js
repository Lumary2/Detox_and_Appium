import TabBar from '../screenobjects/components/tab.bar';
import LoginScreen from '../screenobjects/login.screen';
import NativeAlert from '../helpers/NativeAlert';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(() => {
        $('~Home').waitForDisplayed(20000);
        /*Login element is in Router.js*/
        $('~Login').click();
    });

    it('should be able to fill in forms, show an alert and login successfully', () => {

        /*button-login-container is in LoginForm.js, it has
        login-container as testID, the "button-" part gets added to
        the testID by the Button.js class*/
        $('~button-login-container').click();
        $('~input-email').setValue('hi@test.de');
        $('~input-password').setValue('Test1234!');

        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
         /*LOGIN element is in LoginForm.js, selector defined in login.screen.js*/
        $('~button-LOGIN').click();
        NativeAlert.waitForIsShown();
        expect(NativeAlert.text()).toEqual('Success\nYou are logged in!');

        NativeAlert.pressButton('OK');
        //for Android you could also use this command:
        //driver.execute('mobile: acceptAlert');

        //and for iOS:
        //driver.execute('mobile: alert', {'action': 'accept'});

        NativeAlert.waitForIsShown(false);

    });

    

});
