**native-demo-app-master_RN_60** contains example RN 60 app ([Github](https://github.com/webdriverio/native-demo-app/tree/8f734445db735e5f36d9fa22f1aebbec4c79afbd)) with Appium framework.

- run 'yarn install' to install the dependencies
- install Appium if you dont have it yet (npm install -g appium)

Before running tests:

- run matching Android virtual device from Android Studio AVD manager

- in first terminal run 'react-native start'

- in second terminal type react-native run-ios  or run-android

- in second terminal start Appium with 'appium'

Running tests:

- in third terminal run test with npm run android.app or ios.app

- When you changed code other than the files with the tests you neeed to run react-native run-ios
or react-native run-android again.

- The tests are in the folder /tests/specs
- Note: the example app often uses this line as an identifier for UI-elements (e.g.): <Input {...testProperties('nameForUIelement')}/>. You can also instead define the testID and accessibilityLabel in the UI element like e.g. this: <Input  testID={'nameForUIelement'} accessibilityLabel={'nameForUIelement'}/>
---
**WdioDemoAPP** contains example RN 60 app ([Github](https://github.com/webdriverio/native-demo-app/tree/8f734445db735e5f36d9fa22f1aebbec4c79afbd)) with Detox testing framework

- install dependencies with "yarn install"
- if you dont have Detox yet install it with "npm install -g detox-cli"

Before running tests:
- run matching Android virtual device from Android Studio AVD manager

- run 'react-native start'

- type react-native run-ios or run-android or "detox build -c android.emu.debug" for Android or (...) ios.sim.debug for iOS

Running tests:

- in second terminal run  'detox test -c android.emu.debug' oder -c ios.sim.debug

- When you changed code other than the files with the tests you neeed to run react-native run-ios
or react-native run-android again.

- The tests are in the folder /e2e
