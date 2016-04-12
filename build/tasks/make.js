"use strict";

const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);
const config = require('../config');


gulp.task('make', function () {
  return runSequence(
      'ng',
      'js',
      'gzip'
  );
});