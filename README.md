Wildhacks 2017 QR Scanner
=========================

Install & Config
----------------
Follow [this guide](https://facebook.github.io/react-native/docs/getting-started.html).

TL;DR:
1. `brew install node`
2. `brew install watchman`
3. `npm i -g react-native-cli`
4. Install Xcode.
5. Install Android Studio according to the guide.

To run:
- `react-native run-ios`
- `react-native run-android`

Contributing
------------
I'm pretty new to react native so I guess I'll follow a file structure [like this](https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0).
`index.ios.js` and `index.android.js` are both going to point to **`app/index.js`**, so that file will be our unified entry point.
Basically, *we shouldn't need to edit anything outside of `app/`*.
