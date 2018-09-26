#!/bin/bash

rm -rf dist
ng build --prod
cp nginx.conf ./dist/tate-demo-ui/
