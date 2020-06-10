describe('Picture and zooming in and out test', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should be able to show picture and zoom in and zoom out of it', async () => {

        /*PictureView element is in Router.js and I dont use
        by.id here because it didnt work*/
        await element(by.text('PictureView')).tap();
        
         /*I didnt find a possibility to compare the images before and
        after zoom.*/

        //pinchWithAngle()-method is only for iOS, (direction,speed,angle)
        await element(by.type('RCTImageView')).pinchWithAngle('outward', 'slow', 0);

        await element(by.type('RCTImageView')).pinchWithAngle('inward', 'slow', 0);

    });

});