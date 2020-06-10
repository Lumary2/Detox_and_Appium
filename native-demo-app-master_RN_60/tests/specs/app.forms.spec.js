import Gestures from '../helpers/Gestures';
import TabBar from '../screenobjects/components/tab.bar';
import FormScreen from '../screenobjects/forms.screen';
import LoginScreen from '../screenobjects/login.screen';
import NativeAlert from '../helpers/NativeAlert';
import SwipeScreen from '../screenobjects/swipe.screen';

describe('WebdriverIO and Appium, interacting with form elements,', () => {
    beforeEach(() => {
        $('~Home').waitForDisplayed(20000);
        /*Forms element is in Router.js*/
        $('~Forms').click();
    });

    it('should be able to fill in the input and validate the text', () => {
        const text = 'Hello, this is a demo app';
        //following elements from FormComponents.js file
        $('~text-input').setValue(text);
        expect($('~input-text-result').getText()).toEqual(text);

        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
    });

    //webdriver.io doesnt have a method for checking value of a switch
    //or if switch is active or inactive
    xit('should be able to turn on the switch', () => {

        expect(FormScreen.isSwitchActive()).toEqual(false);
        FormScreen.switch.click();
        expect(FormScreen.isSwitchActive()).toEqual(true);


    });

    it('should be able to select a value from the Dropdown menu', () => {
        const valueOne = 'This app is awesome';

        /*selector '~select-Dropdown' is in forms.screens.js, Dropdown element itself in
        FormComponents.js*/
        $('~select-Dropdown').click();
        //couldnt find an alternative way with webdriver.io for next 2 lines
        FormScreen.picker.selectValue(valueOne);
        expect(FormScreen.getDropDownText()).toContain(valueOne);

    });

    //on ios button is already visible before scrolling down
    it('should be able to scroll down', () => {

        //coordinates for Android, when testing with iOS comment this block out.
        driver.touchPerform([
            { action: 'press', options: { x: 459, y: 1296 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 459, y: 229 } },
            { action: 'release' }
        ]);

        //following line works only on iOS.
        //driver.execute('mobile: scroll', { direction: 'down' });

        /*selector '~button-Active' is in forms.screens.js, button element itself in
        FormComponents.js*/
        expect($('~button-Active').isDisplayed()).toEqual(true);
    });

});

//Same tests + additional tests in abstract form, these tests were
//already included in the boilerplate code (https://github.com/webdriverio/appium-boilerplate/tree/master/tests/specs)
/*describe('WebdriverIO and Appium, interacting with form elements,', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown(true);
        TabBar.openForms();
        FormScreen.waitForIsShown(true);
    });

    it('should be able type in the input and validate the text', () => {
        const text = 'Hello, this is a demo app';
        FormScreen.input.setValue(text);
        expect(FormScreen.inputTextResult.getText()).toEqual(text);


         /* IMPORTANT!!
         *  Because the app is not closed and opened between the tests
         *  (and thus is NOT starting with the keyboard hidden)
         *  the keyboard is closed here if it is still visible.*/

/*if (driver.isKeyboardShown()) {
driver.hideKeyboard();
}
});

it('should be able turn on and off the switch', () => {
expect(FormScreen.isSwitchActive()).toEqual(false);

FormScreen.switch.click();
expect(FormScreen.isSwitchActive()).toEqual(true);

FormScreen.switch.click();
expect(FormScreen.isSwitchActive()).toEqual(false);
});

it('should be able select a value from the select element', () => {
const valueOne = 'This app is awesome';
const valueTwo = 'webdriver.io is awesome';
const valueThree = 'Appium is awesome';

FormScreen.dropDown.click();
FormScreen.picker.selectValue(valueOne);
expect(FormScreen.getDropDownText()).toContain(valueOne);

FormScreen.dropDown.click();
FormScreen.picker.selectValue(valueTwo);
expect(FormScreen.getDropDownText()).toContain(valueTwo);

FormScreen.dropDown.click();
FormScreen.picker.selectValue(valueThree);
expect(FormScreen.getDropDownText()).toContain(valueThree);
});

it('should be able to open the alert and close it with all 3 buttons', () => {
Gestures.checkIfDisplayedWithScrollDown(FormScreen.activeButton, 2);
FormScreen.activeButton.click();
FormScreen.alert.waitForIsShown(true);
expect(LoginScreen.alert.text()).toEqual('This button is\nThis button is active');

FormScreen.alert.pressButton('Ask me later');
FormScreen.alert.waitForIsShown(false);
FormScreen.activeButton.click();
FormScreen.alert.waitForIsShown(true);
FormScreen.alert.pressButton('Cancel');
FormScreen.alert.waitForIsShown(false);
FormScreen.activeButton.click();
FormScreen.alert.waitForIsShown(true);
FormScreen.alert.pressButton('OK');
FormScreen.alert.waitForIsShown(false);
});

it('should be able to determine that the inactive button is inactive', () => {
Gestures.checkIfDisplayedWithScrollDown(FormScreen.inActiveButton, 2);
// In this case the button can't be asked if it is active or not with
// `expect(FormScreen.inActiveButton.isEnabled()).toEqual(false);`
// So use a click and check if shown, make sure the alert is not there
FormScreen.alert.waitForIsShown(false);
FormScreen.inActiveButton.click();
// Just wait 1 second to be sure it didn't appear
driver.pause(1000);
// Now validate it isn't there
FormScreen.alert.waitForIsShown(false);
});
});*/
