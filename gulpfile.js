'use strict';

var gulp = require('gulp'), rename, uglify, sourcemaps, jshint, size, ngAnnotate, todo, wrap;

var src = {
    jsDir: [
        'src/**/*.js'
    ]
};

var dest = {
    dist: 'dist'
};

gulp.task('lint', function () {
    jshint = jshint || require('gulp-jshint');

    return gulp.src(src.jsDir)
        .pipe(jshint({
            globalstrict: true,
            strict: false,
            globals: {
                angular: true,
                localStorage: true,
                console: true
            }
        }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sizes_dist', function () {
    size = size || require('gulp-filesize');

    return gulp.src([
        'dist/**/*.js',
        'dist/**/*.css',
        'dist/**/*.gz'
    ]).pipe(size());
});

gulp.task('ng', function () {
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    uglify = uglify || require('gulp-uglify');
    rename = rename || require('gulp-rename');
    ngAnnotate = ngAnnotate || require('gulp-ng-annotate');
    wrap = wrap || require('gulp-wrap');

    var ngWrap =
        'angular.module(\'jsvat\', [])' +
        '\n\r    .factory(\'JsVatFactory\', function () {' +
        '\n\r<%= contents %>' +
        '\n\r return jsvat;'+
        '});';

    return gulp.src(src.jsDir)
        .pipe(wrap(ngWrap))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
        .pipe(rename({basename: 'angular-jsvat'}))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'angular-jsvat.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
        ;
});

gulp.task('todo', function () {
    todo = require('gulp-todo');

    gulp.src('src/**/*.*')
        .pipe(todo())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    var watch = require('gulp-watch');

    gulp.watch(src.jsDir, ['js', 'todo']);
});

gulp.task('build', function () {
    gulp.start('ng');
    gulp.start('todo');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});

