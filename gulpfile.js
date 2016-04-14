"use strict";

const gulp = require('gulp');
const jade = require('gulp-jade');
const minifyHTML = require('gulp-minify-html');
const webServer = require('gulp-webserver');

gulp.task('jade', function () {
    return gulp.src('./*.jade')
        .pipe(jade({pretty: false}))
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./*.jade', ['jade']);
});

gulp.task('build', function () {
    gulp.start('jade');
});

gulp.task('webserver', function () {

    gulp.src([__dirname, '../angular-datepicker-oldschool/dist'])
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

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});