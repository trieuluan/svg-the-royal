#!/bin/sh

REACT_APP_ENV=plugin craco build --config ./craco-plugin.config.js

cd plugin-src
npm version prerelease -m "update prerelease version to %s"
cd ..
cp plugin-src/* svg-map-animations
cd svg-map-animations
npm publish
