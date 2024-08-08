#!/bin/bash

get_latest_build_slug() {
    local app_slug=$1
    curl -s -H "Authorization: token $BITRISE_PAT" \
        "https://api.bitrise.io/v0.1/apps/$app_slug/builds?branch=$BRANCH_NAME&status=1&limit=1" \
        | jq -r '.data[0].slug'
}