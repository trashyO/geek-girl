#!/bin/sh

[ ! -f node_modules/.bin/jake $* ] && echo Build npm modules && npm rebuild

node_modules/.bin/jake $*


