"use strict";

const gulp = require('gulp');

const config = require('../config');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const wrap = require('gulp-wrap');
const ngAnnotate = require('gulp-ng-annotate');
const beautify = require('gulp-beautify');
const ngWrap = require('../../src/template/wrap.js');

gulp.task('ng', function () {
  
  return gulp.src(config.libs + '/jsvat/dist/jsvat.js')
      .pipe(plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'jsVat - NG',
            message: err.message
          };
        })
      }))
      .pipe(wrap(ngWrap))
      .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
      .pipe(beautify({
        indent_size: 2
      }))
      .pipe(rename({basename: 'jsvat-ng'}))
      .pipe(gulp.dest('./lib'))
      ;
});

