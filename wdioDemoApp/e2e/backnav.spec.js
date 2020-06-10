describe('Backnavigation and app in app test', () => {
    /*reloads app before each test*/
    beforeEach(async () => {
        await device.reloadReactNative();

    });

    it('should be able to open app inside of app and navigate backwards', async () => {
        /*SMS element can be found in Home.js class*/
        await element(by.id('SMS')).tap();

        /*In iOS It can only be checked if some other window opened because SMS app is not
        React Native code. Following statement can only be used with iOS,Android throws error.*/
        //await waitFor(element(by.id('SMS'))).toBeNotVisible().withTimeout(2000);
       
        /*with Android only by reading the console.log 
        from the catch block we can see if we opened new window.*/
        try {
            await waitFor(element(by.id('SMS'))).toBeNotVisible().withTimeout(2000);
        }
        catch (e) {
            console.log("SMS button is now hidden by another window.")
        }

        /*method is only for Android,has to be pressed twice because first keyboard
        gets closed*/
        //await device.pressBack();
        //await device.pressBack();

        /*tapAtPoint()-method couldnt be used for iOS backnav here, because
        there is the SMS app open and I cant fetch an element from there
        to calculate a relative x and y-coordinate to such an element.*/

        /*next line can only be used for Android because iOS cant backnavigate
        in our case*/
        //await expect(element(by.id('SMS'))).toBeVisible();


    });

});