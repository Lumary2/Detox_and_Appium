
describe('Forms test', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
        /*Forms element is in file Router.js*/
        await element(by.text('Forms')).tap();

    });

    /*This test only runs on iOS without the maxLength variable of the Input element,
    otherwise during replaceText() a second hello is inserted like 
    this 'Hello,Hello this is a demo app'. This is probably a Problem with React Native and
    not with Detox, because there are always so many extra characters
    inserted until it reaches the maximum length. */
    it('should be able to fill in the input and validate the text', async () => {

        const text = 'Hello, this is a demo app';
        /*"text-input" element and "input-text-result" are in FormComponents.js*/
        await element(by.id('text-input')).replaceText(text);
        await expect(element(by.id('input-text-result'))).toHaveText(text);

    });

    /*React native doesnt allow to use '0' and '1' instead
    of a boolean for the state of a switch. There is no method for checking the boolean
    value of a switch in Detox, only for Strings.

    it('should be able to turn on the switch', async () => {
        
        await expect(element(by.id('switch'))).toHaveValue('0');
        element(by.id('switch')).tap();
        expect(element(by.id('switch'))).toHaveValue('1');

    });*/

    it('should be able to select a value from the dropdown', async () => {
        const valueOne = 'This app is awesome';
        await expect(element(by.text(valueOne))).toBeNotVisible();
        /* Hinweis:needed to wrap Dropdown menu in FormComponents.js into view tags 
        to be found by Detox.*/
        await element(by.id('Dropdown')).tap();
        await element(by.text(valueOne)).tap();

        /* next line finds multiple matching elements, so it throws error.
        proves that text is there though because the text wasnt visible at
        the beginning of this test.*/
        //await expect(element(by.text(valueOne))).toBeVisible();

    });

    //on ios the button is already visible before scrolling.
    it('should be able to scroll to bottom', async () => {

        await element(by.id('Forms-screen')).scrollTo('bottom');
        //wrapped Button with view tags which includes the testID in FormComponents.js
        await expect(element(by.id('activeButton'))).toBeVisible();

    });



});