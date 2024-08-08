#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Load environment variables from .env file in the parent directory
if [ -f "$SCRIPT_DIR/../.env" ]; then
    export $(grep -v '^#' "$SCRIPT_DIR/../.env" | xargs)
else
    echo "Error: .env file not found in the project root."
    exit 1
fi

# Check if required environment variables are set
if [ -z "$BITRISE_PAT" ] || [ -z "$BRANCH_NAME" ] || [ -z "$ANDROID_APP_SLUG" ] || [ -z "$IOS_APP_SLUG" ]; then
    echo "Error: Required environment variables are not set in .env file."
    echo "Please ensure BITRISE_PAT, BRANCH_NAME, ANDROID_APP_SLUG, and IOS_APP_SLUG are set."
    exit 1
fi

echo "Environment variables loaded successfully."
#echo "Please ensure $SCRIPT_DIR, $BRANCH_NAME, $ANDROID_APP_SLUG, and $IOS_APP_SLUG are set."