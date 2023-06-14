# Build Guide in Capacitor in Ionic 7

## Close development server.

-   ctrl + c

## Complete a fresh build of your project, fixing any errors that it reports.

-   ionic build

## Next, create both the IOS and Adroid projects.

-   ionic cap add ios
-   ionic cap add android

Both android and ios folders at the root of the project are created! These are entirely stanalone native projects that should be considered part of your ionic app

## Everytime you preform a build (a change is made or added) you'll need to copy those changes into your native projects.

-   ionic build
-   ionic cap copy

## Note: After making updates to the native portion of the code (such as adding a new plugin), use the sync command

-   ionic cap sync

# Splash screen and icon generation

## Install the assets plugin

-   npm install @capacitor/assets --save-dev

## Next create an assets folder on the root of the project containing the splash.png(2732 X 2732) & icon.png(1024 X 1024) files.

## Next, run the assets command to generate the splash screen and icons for all the platforms.

-   npx capacitor-assets generate

# iOS Deployment

## Capacitor iOS apps are configured and managed through Xcode (Apple’s iOS/Mac IDE), with dependencies managed by CocoaPods. Before running this app on an iOS device, there's a couple of steps to complete.

## First, run the Capacitor open command, which opens the native iOS project in Xcode.

-   ionic cap open ios

## In order for some native plugins to work, user permissions must be configured. See link below...

https://capacitorjs.com/docs/ios/configuration?_gl=1*150m5ra*_ga*MTc5MzQzNTc1OC4xNjg2Mjg2OTA3*_ga_REH9TJF6KF*MTY4NjU1MDIxMS4xMy4xLjE2ODY1NTQ1NzIuMC4wLjA.

# Android Deployment

## First, run the Capacitor open command, which opens the native Android project in Android Studio.

-   ionic cap open android

## Similar to iOS, we must enable the correct permissions to use the Camera. Configure these in the AndroidManifest.xml file. Android Studio will likely open this file automatically, but in case it doesn't, locate it under android/app/src/main/.

## Scroll to the Permissions section and ensure these entries are included:

<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

## Save the file. With permissions in place, we are ready to try out the app on a real device! Connect an Android device to your computer. Within Android Studio, click the "Run" button, select the attached Android device, then click OK to build, install, and launch the app on your device.
