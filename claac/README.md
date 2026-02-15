# This is the directory that contains our CLAAC React Native app!

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
Here is the [Expo documentation](https://docs.expo.dev/):

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

Note: the eas.json file in this project is written to expect an iOS simulator (build.ios.simulator=true). If you are using something else, you may need to modify this file for your configuration.

# Other important info

If you want to rebuild the project for development, maybe to test a change to native files, then run this to rebuild those changes:

   ```bash
   npx expo prebuild
   ```

Or if you want to fully regenerate the android and ios folders - which are the ios and android projects - then run:

   ```bash
   npx expo prebuild --clean
   ```

If you want to build the app again to get fully new binaries installed (e.g. to update icons) run this command:

Note: change the platform if not building for ios

   ```bash
   eas build --platform ios --profile development
   ```


FOR WINDOWS DEVELOPERS: Windows users should still be able build and develop within the project without any modifications, especially if using a real mobile device to test:

1. Download the Expo Go App on your mobile device: [Expo Go docs] https://expo.dev/go

2. Run commands from above:

   ```bash
   npm install
   ```

   ```bash
   npx expo start
   ```

And scan the QR code on your device.

***Nadia or other Windows Users can test to verify if these steps work, please***