# Mobile Automation Framework [ Appium + WDIO + TS ]

## Based on

This framework is currently based on:

- **WebdriverIO:** `8.x` [Webdriver setup docs](https://webdriver.io/docs/typescript/)
- **Appium:** `2.x` [Appium quickstart docs](https://appium.io/docs/en/latest/quickstart/)

## Installation

1. Clone this project by running

    ```sh
    git clone repo
    ```

2. Install all dependencies

    ```sh
    npm install
    ```

    > [!TIP]
    > Use the [appium-installer](https://github.com/AppiumTestDistribution/appium-installer) package to setup Appium on your local machine. This will also help you configure Android Emulators/ iOS Simulators.
    >
    > [!TIP]
    > Use the [webdriver-io](https://webdriver.io/docs/gettingstarted) to add a full WebdriverIO setup to an existing or new project using the WebdriverIO Starter Toolkit, run: `npm init wdio@latest` .
    >
    > [!NOTE]
    > You don't need Appium installed on you local machine When running test in a cloud

3. Create a `./apps` directory at the root of this project. Download the app files (`.zip` / `.apk`) with version >= `1.0.0`, which can be found [here](https://github.com/webdriverio/native-demo-app/releases), into the `./apps` folder.

4. Adjust the configuration file(s) for [Android](./config/wdio.android.app.conf.ts) and [iOS](./config/wdio.ios.app.conf.ts) regarding the device configuration you've created on your local machine.

5. Running tests locally
    - **Android App:** `npm run android.app`
    - **iOS App:** `npm run ios.app`

## Configuration files

This framework uses a specific config for iOS and Android, see [configs](./config). The configs are based on a shared config
[`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts).
This shared config holds **all the defaults** so the iOS and Android configs only need to hold the capabilities and specs that are needed for running on iOS and or Android.
Notes are added for why a different value has been selected in comparison to the default values WebdriverIO provides.
Since we do not have Appium installed as part of this package we are going to use the globally installed version of Appium. This is configured in [`wdio.shared.local.appium.conf.ts`](./config/wdio.shared.local.appium.conf.ts).

## Native App Tests

All tests can be executed on the devices as configured in [`wdio.android.app.conf.ts`](./config/wdio.android.app.conf.ts) or [`wdio.ios.app.conf.ts`](./config/wdio.ios.app.conf.ts). Please check the below tests on what they do or how to run them separately.

```sh
# For Android local execution
npm run android.app

# For iOS local execution
npm run ios.app
```

You can run the single test with the following commands

```sh
# For Android local execution
npm run android.app -- --spec=test/specs/<testfile>.ts

# For iOS local execution
npm run ios.app -- --spec=test/specs/<testfile>.ts
```

**NOTE:**

- The tests are written with `async`/`await` and TypeScript
- Run the linting process with `npm run lint` to check your code for errors and enforce coding standards, and use `npm run lint:fix` to automatically fix issues
- Before running your mobile automation project using Appium, use `appium-installer` to verify that your setup is correct, including ANDROID_HOME, JAVA_HOME, and Node.js configurations
- Make sure to have utilities like Xcode, Android Studio, and Appium Inspector, as they are essential and handy tools for mobile automation.
