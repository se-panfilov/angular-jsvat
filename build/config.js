"use strict";

const SRC = 'src';
const DEST = 'dist';
const PROJECT_NAME = 'server-angular-jsvat';

const config = {
  dest: DEST,
  projectName: PROJECT_NAME,
  js: {
    src: [
      SRC + './*.js'
    ]
  },
  jade: {
    src: [
      SRC + './*.jade'
    ]
  }
};

module.exports = config;
