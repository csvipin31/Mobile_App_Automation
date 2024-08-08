# Mobile Automation Framework [ Appium + WDIO + TS + Bitrise]

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

## Download Apps/Artifacts from Bitrise

This project includes a set of scripts to automate the process of downloading artifacts from Bitrise for both Android and iOS builds. Follow the instructions below to set up and use these scripts.

### Prerequisites

```sh
#jq: Ensure jq is installed on your system. You can install it using Homebrew:
bash
brew install jq
```

### Setting Up Environment Variables

1. Copy the `.env.template` file to `.env` in the project root:

   ```bash
   cp .env.template .env

2. Open the `.env` file and replace the placeholder values with your actual credentials and settings.
3. Make sure the `.env` file is not committed to version control by ensuring it is listed in your `.gitignore`.

### Provide Envirnoment Variables values

Open the .env file and replace the placeholder values with your actual Bitrise credentials and configuration:

```sh
# Bitrise Personal Access Token
BITRISE_PAT=<your_personal_access_token_here>

# Branch name to fetch builds from
BRANCH_NAME=<branch_name>

# Android app slug on Bitrise
ANDROID_APP_SLUG=<your_android_app_slug_here>

# iOS app slug on Bitrise
IOS_APP_SLUG=<your_ios_app_slug_here>
```

### Running the Scripts

1. The scripts are located in the scripts/ directory. Here's how to run them:

    ```sh
    chmod +x scripts/*.sh
    ```

2. Run the main script: Execute the main.sh script to orchestrate the entire process:

    ```sh
    ./scripts/main.sh
    ```

3. This will perform the following actions:

    - Load environment variables from the .env file.
    - Retrieve the latest successful build slugs for the specified branch.
    - Download artifacts for both Android and iOS builds.

### Script Details

- `load-env.sh`: Loads environment variables from the `.env` file.
- `get-build-slug.sh`: Retrieves the latest successful build slug for a given app slug and branch.
- `download-artifacts.sh`: Downloads artifacts for a given build slug.
- `process-android.sh`: Handles the Android-specific process of retrieving and downloading artifacts.
- `process-ios.sh`: Handles the iOS-specific process of retrieving and downloading artifacts.
- `main.sh`: Orchestrates the entire process by calling the above scripts.

## **NOTE:**

- The tests are written with `async`/`await` and TypeScript
- Run the linting process with `npm run lint` to check your code for errors and enforce coding standards, and use `npm run lint:fix` to automatically fix issues
- Before running your mobile automation project using Appium, use `appium-installer` to verify that your setup is correct, including ANDROID_HOME, JAVA_HOME, and Node.js configurations
- Make sure to have utilities like Xcode, Android Studio, and Appium Inspector, as they are essential and handy tools for mobile automation.
