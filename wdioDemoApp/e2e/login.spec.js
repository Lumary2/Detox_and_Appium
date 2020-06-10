
describe('Login test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should be able to fill in forms, show an alert and login successfully', async () => {

    /*Login element is in Router.js*/
    await element(by.text('Login')).tap();
    /*button-login-container is in LoginForm.js, it has
    login-container as testID, the "button-" part gets added to
    the testID by the Button.js class*/
    await element(by.id('button-login-container')).tap();

    await element(by.id('input-email')).replaceText('hi@test.de');
    await element(by.id('input-password')).replaceText('Test1234!');

    /*LOGIN element is in LoginForm.js*/
    await element(by.text('LOGIN')).tap();

    await expect(element(by.text('Success', 'You are logged in!'))).toBeVisible();
    await element(by.text('OK')).tap();

  });

});
