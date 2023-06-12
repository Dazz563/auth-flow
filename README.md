# Build Guide in Capacitor in Ionic 7

## Close development server

Ctrl + c

## Complete a fresh build of your project, fixing any errors that it reports.

ionic build

## Next, create both the IOS and Adroid projects

-   ionic cap add ios
-   ionic cap add android

Both android and ios folders at the root of the project are created! These are entirely stanalone native projects that should be considered part of your ionic app

## IMPORTANT Everytime you preform a build (a change is made or added) you'll need to copy those changes into your native projects

-   ionic build
-   ionic cap copy
-   ionic cap sync

# iOS Deployment
