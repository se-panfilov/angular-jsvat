"use strict";

const SRC = 'src/jsvat-input';
const DEST = 'dist';
const PROJECT_NAME = 'angular-jsvat';
const LIBS_DIR = 'bower_components';

const config = {
  dest: DEST,
  projectName: PROJECT_NAME,
  js: {
    src: [
      SRC + '/**/*.js'
    ]
  },
  jade: {
    src: [
      SRC + '/**/*.jade'
    ]
  },
  libs: LIBS_DIR
};

module.exports = config;
