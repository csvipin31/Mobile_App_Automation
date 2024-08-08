#!/bin/bash

download_artifacts() {
    local app_slug=$1
    local build_slug=$2
    local platform=$3
    local download_dir=$4

    echo "Getting artifacts for $platform build: $build_slug"

    local artifacts=$(curl -s -H "Authorization: token $BITRISE_PAT" \
        "https://api.bitrise.io/v0.1/apps/$app_slug/builds/$build_slug/artifacts")

    echo "$artifacts" | jq -c '.data[]' | while read -r artifact; do
        local artifact_slug=$(echo "$artifact" | jq -r '.slug')
        local artifact_filename=$(echo "$artifact" | jq -r '.title')
        
        local artifact_details=$(curl -s -H "Authorization: token $BITRISE_PAT" \
            "https://api.bitrise.io/v0.1/apps/$app_slug/builds/$build_slug/artifacts/$artifact_slug")
        
        local download_url=$(echo "$artifact_details" | jq -r '.data.expiring_download_url')
        
        echo "Downloading $platform artifact: $artifact_filename"
        curl -L -o "$download_dir/${platform}_${artifact_filename}" "$download_url"
        
        if [ $? -eq 0 ]; then
            echo "Successfully downloaded $platform artifact: $artifact_filename"
        else
            echo "Failed to download $platform artifact: $artifact_filename"
        fi
    done
}