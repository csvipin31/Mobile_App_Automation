#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Load environment variables
source "$SCRIPT_DIR/load-env.sh"

# Process Android artifacts
source "$SCRIPT_DIR/process-android.sh"

# Process iOS artifacts
source "$SCRIPT_DIR/process-ios.sh"

echo "Artifact download process completed."