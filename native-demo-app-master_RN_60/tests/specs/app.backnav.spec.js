import TabBar from '../screenobjects/components/tab.bar';
import LoginScreen from '../screenobjects/login.screen';
import NativeAlert from '../helpers/NativeAlert';

describe('Backnavigation and app in app test', () => {
    beforeEach(() => {
        $('~Home').waitForDisplayed(20000);
    });

    it('should be able to open app inside of app and navigate backwards', () => {

        //sms element is in Home.js file
        $('~sms').click();

        driver.pause(2000);

        //checks if sms button is now hidden
        expect($('~sms').isDisplayed()).toEqual(false);

        //only for Android. press back two times because first keyboard gets closed.
        driver.pressKeyCode(4);
        driver.pressKeyCode(4);

        //driver.touchPerform for iOS (IPhone X coordinates, relative to top left corner)
        /*driver.touchPerform([
            { action: 'press', options: { x: 54, y: 20 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'release' },
        ]);*/
        driver.pause(2000);

        expect($('~sms').isDisplayed()).toEqual(true);

    });

});
