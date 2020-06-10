export default class TabBar {
    static openHome () {
        $('~Home').click();
    }

    static openPictureView () {
        $('~PictureView').click();
    }

    static openLogin () {
        $('~Login').click();
    }

    static openForms () {
        $('~Forms').click();
    }

    static openSwipe () {
        $('~Swipe').click();
    }

    static waitForTabBarShown () {
        $('~Home').waitForDisplayed(20000);
    }
}
