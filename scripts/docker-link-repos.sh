#!/bin/sh

set -ex

if [ $USE_CUSTOM_SDKS == false ]
then
    echo "skipping react-sdk and js-sdk installs: USE_CUSTOM_SDKS is false"
    exit 0
fi

echo "Linking js-sdk"
git clone $JS_SDK_REPO js-sdk
cd js-sdk
git checkout $JS_SDK_BRANCH
yarn link
yarn --network-timeout=100000 install
cd ../

echo "Linking react-sdk"
git clone $REACT_SDK_REPO react-sdk
cd react-sdk
git checkout $REACT_SDK_BRANCH
yarn link
yarn link matrix-js-sdk
yarn --network-timeout=100000 install
cd ../

echo "Setting up riot-web with react-sdk and js-sdk packages"
yarn link matrix-js-sdk
yarn link matrix-react-sdk
