"use strict";

const SRC = 'src';
const DEST = 'dist';
const PROJECT_NAME = 'angular-jsvat';

const config = {
  dest: DEST,
  projectName: PROJECT_NAME,
  js: {
    src: [
      SRC + '/**/*.js'
    ]
  }
};

module.exports = config;
