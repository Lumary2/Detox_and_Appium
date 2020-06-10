describe('Swipe test', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
        /*Swipe element is in Router.js*/
        await element(by.text('Swipe')).tap();

    });

    /*Swiping works only on iOS, on Android it jumps back to the previous card.*/
    it('should be able to swipe from left to right and back and contain correct text', async () => {
        /*the following texts are from Swipe.js*/
        text1 = 'FULLY OPEN SOURCE';
        text2 = 'CREATE COMMUNITY';
        text3 = 'JS.FOUNDATION';
        text4 = 'SUPPORT VIDEOS';
        text5 = 'EXTENDABLE';
        text6 = 'COMPATIBLE';


        await expect(element(by.text(text1))).toBeVisible();
        await element(by.text(text1)).swipe('left');

        await expect(element(by.text(text2))).toBeVisible();
        await element(by.text(text2)).swipe('left');

        await expect(element(by.text(text3))).toBeVisible();
        await element(by.text(text3)).swipe('left');

        await expect(element(by.text(text4))).toBeVisible();
        await element(by.text(text4)).swipe('left');

        await expect(element(by.text(text5))).toBeVisible();
        await element(by.text(text5)).swipe('left');

        await expect(element(by.text(text6))).toBeVisible();

        //swipe back and check text
        await element(by.text(text6)).swipe('right');

        await expect(element(by.text(text5))).toBeVisible();
        await element(by.text(text5)).swipe('right');

        await expect(element(by.text(text4))).toBeVisible();
        await element(by.text(text4)).swipe('right');

        await expect(element(by.text(text3))).toBeVisible();
        await element(by.text(text3)).swipe('right');

        await expect(element(by.text(text2))).toBeVisible();
        await element(by.text(text2)).swipe('right');

        await expect(element(by.text(text1))).toBeVisible();

    });



});