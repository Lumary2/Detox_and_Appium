import TabBar from '../screenobjects/components/tab.bar';
import LoginScreen from '../screenobjects/login.screen';
import NativeAlert from '../helpers/NativeAlert';

describe('Picture and zooming in and out test', () => {
    beforeEach(() => {
        $('~Home').waitForDisplayed(20000);

    });

    it('should be able to show picture and zoom in and zoom out of it', () => {
        /*PictureView element is in Router.js*/
        $('~PictureView').click();
        /*we cant check if picture is visible after clicking on
        the PictureView button because the isDisplayed()-method
        also returns true before clicking on 'PictureView' in our case.*/
        driver.pause(2000);

        /*I didnt find a possibility to compare the images before and
        after zoom. Tried to include Visual Regression V5 but installation
        didnt work.*/

        //coordinates are relative to upper left corner of the screen.
        driver.multiTouchPerform([
            [{ action: 'press', options: { x: 150, y: 342 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 100, y: 342 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'release' },
            ],
            [{ action: 'press', options: { x: 150, y: 342 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 200, y: 342 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'release' },
            ],
        ]);

        driver.multiTouchPerform([
            [{ action: 'press', options: { x: 100, y: 342 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 150, y: 342 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'release' },
            ],
            [{ action: 'press', options: { x: 200, y: 342 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 150, y: 342 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'release' },
            ],
        ]);




    })
});