import TabBar from '../screenobjects/components/tab.bar';
import SwipeScreen from '../screenobjects/swipe.screen';

describe('WebdriverIO and Appium', () => {
    beforeEach(() => {
        $('~Home').waitForDisplayed(20000);
        /*Swipe element is in Router.js*/
        $('~Swipe').click();

    });

    it('should be able to swipe from left to right and back and contain correct text', () => {
        /*the following texts are from Swipe.js*/
        text1 = 'FULLY OPEN SOURCE';
        text2 = 'CREAT COMMUNITY';
        text3 = 'JS.FOUNDATION';
        text4 = 'SUPPORT VIDEOS';
        text5 = 'EXTENDABLE';
        text6 = 'COMPATIBLE';

        //title element defined in SliderEntry.js
        expect($('~title').getText()).toEqual(text1);

        /*You can replace the statement SwipeScreen.carousel.swipeleft() with the 
        driver.touchPerform() method.The coordinates are relative to upper left corner
        of the screen.
        Flaky test, sometimes title matches and sometimes it doesnt. This code snippet is for 
        the Android coordinates. Webdriver.io method waitUntil() the text equals
        the expected text also didnt fix the flakiness.*/

        driver.touchPerform([
            { action: 'press', options: { x: 864, y: 766 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 216, y: 766 } },
            { action: 'release' },
        ]);

        //this code snippet is for the iOS coordinates.
        /*driver.touchPerform([
            { action: 'press', options: { x: 300, y: 339 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 75, y: 339 } },
            { action: 'release' },
        ])*/
        //also possible for iOS:
        //driver.execute('mobile: swipe', { direction: 'left' });
        
        driver.pause(1000);

        expect($('~title').getText()).toEqual(text2);

        SwipeScreen.carousel.swipeLeft();
        expect($('~title').getText()).toEqual(text3);

        SwipeScreen.carousel.swipeLeft();
        expect($('~title').getText()).toEqual(text4);

        SwipeScreen.carousel.swipeLeft();
        expect($('~title').getText()).toEqual(text5);

        SwipeScreen.carousel.swipeLeft();
        expect($('~title').getText()).toEqual(text6);

        /*You can replace the statement SwipeScreen.carousel.swipeRight() with the following
        4 lines.*/
        driver.touchPerform([
            { action: 'press', options: { x: 216, y: 766 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 864, y: 766 } },
            { action: 'release' }
        ]);

        expect($('~title').getText()).toEqual(text5);
        SwipeScreen.carousel.swipeRight();

        expect($('~title').getText()).toEqual(text4);
        SwipeScreen.carousel.swipeRight();

        expect($('~title').getText()).toEqual(text3);
        SwipeScreen.carousel.swipeRight();

        expect($('~title').getText()).toEqual(text2);
        SwipeScreen.carousel.swipeRight();

        expect($('~title').getText()).toEqual(text1);
    });
});


