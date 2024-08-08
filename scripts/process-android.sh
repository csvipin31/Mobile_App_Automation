#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source "$SCRIPT_DIR/get-build-slug.sh"
source "$SCRIPT_DIR/download-artifacts.sh"

DOWNLOAD_DIR="$SCRIPT_DIR/../downloads/android"
mkdir -p "$DOWNLOAD_DIR"

ANDROID_BUILD_SLUG=$(get_latest_build_slug "$ANDROID_APP_SLUG")
echo "Latest Android build slug: $ANDROID_BUILD_SLUG"

if [ -n "$ANDROID_BUILD_SLUG" ]; then
    download_artifacts "$ANDROID_APP_SLUG" "$ANDROID_BUILD_SLUG" "android" "$DOWNLOAD_DIR"
else
    echo "No successful Android build found for branch: $BRANCH_NAME"
fi