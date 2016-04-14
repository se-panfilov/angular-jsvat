"use strict";

const gulp = require('gulp');
const webServer = require('gulp-webserver');
const config = require('../config');

gulp.task('webserver', function () {

    gulp.src(['../angular-jsvat/dist', './'])
        .pipe(webServer({
            fallback: 'index.html',
            port: 8001,
            livereload: true,
            //directoryListing: true,
            //proxies: [{
            //    source: '/register',
            //    target: 'http://localhost:8080/1337'
            //}],
            open: true
            //middleware: function () {
            //    return [cors];
            //}
        }));
});