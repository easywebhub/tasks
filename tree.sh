#!/usr/bin/env bash

# bash script to generate tree structure of a directory
# Pravendra Singh (@hackpravj)

pwd=$(pwd)
find $pwd -print | sed -e "s;$pwd;\.;g;s;[^/]*\/;|--;g;s;--|; |;g"