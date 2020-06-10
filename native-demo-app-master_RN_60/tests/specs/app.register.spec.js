import TabBar from '../screenobjects/components/tab.bar';
import LoginScreen from '../screenobjects/login.screen';
import NativeAlert from '../helpers/NativeAlert';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(() => {
        $('~Home').waitForDisplayed(20000);
        /*Login element is in Router.js*/
        $('~Login').click();
    });

    it('should be able to fill in forms, show an alert and sign up successfully', () => {
        /*button-sign-up-container is in LoginForm.js, it has
        sign-up-container as testID, the "button-" part gets added to
        the testID by the Button.js class*/
        $('~button-sign-up-container').click();
        $('~input-email').setValue('hi@test.de');
        $('~input-password').setValue('Test1234!');
        $('~input-repeat-password').setValue('Test1234!');

        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
        /*SIGN UP button is in LoginForm.js, selector defined in login.screen.js*/
        $('~button-SIGN UP').click();
        NativeAlert.waitForIsShown();
        expect(NativeAlert.text()).toEqual('Signed Up!\nYou successfully signed up!');

        NativeAlert.pressButton('OK');
        NativeAlert.waitForIsShown(false);
    });
});

/*Same tests in abstract form, these tests were
already included in the boilerplate code (https://github.com/webdriverio/appium-boilerplate/tree/master/tests/specs)
describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
        TabBar.openLogin();
        LoginScreen.waitForIsShown(true);
    });

    it('should be able sign up successfully', () => {
        LoginScreen.signUpContainerButon.click();
        LoginScreen.email.setValue('hi@test.de');
        LoginScreen.password.setValue('Test1234!');
        LoginScreen.repeatPassword.setValue('Test1234!');

        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
        LoginScreen.signUpButton.click();
        LoginScreen.alert.waitForIsShown();
        expect(LoginScreen.alert.text()).toEqual('Signed Up!\nYou successfully signed up!');

        LoginScreen.alert.pressButton('OK');
        LoginScreen.alert.waitForIsShown(false);
    });
});*/