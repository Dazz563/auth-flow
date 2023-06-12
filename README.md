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
-   ionic cap sync

# iOS Deployment

## Capacitor iOS apps are configured and managed through Xcode (Apple’s iOS/Mac IDE), with dependencies managed by CocoaPods. Before running this app on an iOS device, there's a couple of steps to complete.

## First, run the Capacitor open command, which opens the native iOS project in Xcode.

-   ionic cap open ios

## In order for some native plugins to work, user permissions must be configured. See link below...

https://capacitorjs.com/docs/ios/configuration?_gl=1*150m5ra*_ga*MTc5MzQzNTc1OC4xNjg2Mjg2OTA3*_ga_REH9TJF6KF*MTY4NjU1MDIxMS4xMy4xLjE2ODY1NTQ1NzIuMC4wLjA.

# Android Deployment

## First, run the Capacitor open command, which opens the native Android project in Android Studio.

-   ionic cap open android
