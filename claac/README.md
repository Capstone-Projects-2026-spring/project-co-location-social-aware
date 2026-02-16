# This is the directory that contains our CLAAC React Native app!

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
Here is the [Expo documentation](https://docs.expo.dev/):

## Get started

1. Install dependencies

   ```bash
   npm install -g eas-cli
   ```

2. Create Expo account here: 
https://expo.dev/signup?utm_term=&utm_campaign=Starter+NDR-OTA-Performance+Max&utm_source=adwords&utm_medium=ppc&hsa_acc=6617584976&hsa_cam=23485562072&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=23490229162&gclid=EAIaIQobChMIgKiNrdHekgMVYmRHAR1thxM2EAAYASAAEgK9tvD_BwE

3. run ```eas login``` to login to your Expo account in your terminal

4. Start the app

   ```bash
   npx expo start
   ```

5. In the output, you'll find options to open the app - ***Select s*** to run in Expo Go and then ***i*** if you want to run on iOS simulator.

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