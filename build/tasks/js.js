"use strict";

const gulp = require('gulp');

const config = require('../config');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const ngAnnotate = require('gulp-ng-annotate');
const eventStream = require('event-stream');

// gulp.task('js', function () {
//   _makeAppJS(config.js.src, config.projectName)
// });

function _makeAppJS(src, projectName) {
  return gulp.src(src)
      .pipe(plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Build JS',
            message: err.message
          };
        })
      }))
      .pipe(concat(projectName + '.js'))
      .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
      ;
}

gulp.task('js', function () {
  const libJS = gulp.src('lib/**/*.js');
  const appJS = _makeAppJS(config.js.src, config.projectName);

  return eventStream.merge(libJS, appJS)
      .pipe(plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Build JS',
            message: err.message
          };
        })
      }))
      .pipe(concat(config.projectName + '.js'))
      .pipe(gulp.dest(config.dest))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename({basename: config.projectName + '.min'}))
      .pipe(gulp.dest(config.dest))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.dest))
      ;

});
