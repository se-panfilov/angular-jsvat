"use strict";

const gulp = require('gulp');

const config = require('../config');
const plumber = require('gulp-plumber');
const jade = require('gulp-jade');
const notify = require('gulp-notify');

gulp.task('jade', function () {
  return gulp.src(config.jade.src)
      .pipe(plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Build JADE',
            message: err.message
          };
        })
      }))
      .pipe(jade({pretty: false}))
      .pipe(gulp.dest('./'));
});

