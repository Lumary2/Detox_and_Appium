describe('Register test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should be able to fill in forms, show an alert and sign up successfully', async () => {

    /*Login element is in Router.js*/
    await element(by.text('Login')).tap();
    /*button-sign-up-container is in LoginForm.js, it has
    sign-up-container as testID, the "button-" part gets added to
    the testID by the Button.js class*/
    await element(by.id('button-sign-up-container')).tap();

    await element(by.id('input-email')).replaceText('hi@test.de');
    await element(by.id('input-password')).replaceText('Test1234!');
    await element(by.id('input-repeat-password')).replaceText('Test1234!');

    /*SIGN UP element is in LoginForm.js*/
    await element(by.text('SIGN UP')).tap();

    await expect(element(by.text('Signed Up!',
      'You successfully signed up!'))).toBeVisible();
    await element(by.text('OK')).tap();

  });

});
