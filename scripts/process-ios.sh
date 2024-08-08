#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source "$SCRIPT_DIR/get-build-slug.sh"
source "$SCRIPT_DIR/download-artifacts.sh"

DOWNLOAD_DIR="$SCRIPT_DIR/../downloads/ios"
mkdir -p "$DOWNLOAD_DIR"

IOS_BUILD_SLUG=$(get_latest_build_slug "$IOS_APP_SLUG")
echo "Latest iOS build slug: $IOS_BUILD_SLUG"

if [ -n "$IOS_BUILD_SLUG" ]; then
    download_artifacts "$IOS_APP_SLUG" "$IOS_BUILD_SLUG" "ios" "$DOWNLOAD_DIR"
else
    echo "No successful iOS build found for branch: $BRANCH_NAME"
fi