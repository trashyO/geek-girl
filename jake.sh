#!/bin/sh

if [ ! -f node_modules/.bin/jake ];
 then
    echo "Build npm modules"
    npm rebuild
fi

node_modules/.bin/jake $*


