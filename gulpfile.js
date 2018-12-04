const gulp = require('gulp');

const minify = require("gulp-babel-minify");

const concat = require('gulp-concat');

const cssmin = require('gulp-cssmin');

gulp.task('default', function () {
    console.log('Gulp is OK');
});

gulp.task('end', function () {
    console.log('Gulp: done');
});

gulp.task('minjs', function () {
    gulp.src("files/js/*.js")
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(concat('min.js'))
        .pipe(gulp.dest('files/js/minjs'));
});
gulp.task('mincss', function () {
    gulp.src('files/css/*.css')
        .pipe(cssmin())
        .pipe(concat('min.css'))
        .pipe(gulp.dest('files/css/mincss'));
});
gulp.task('s', [
    'default',
    'mincss',
    'minjs',
    'end'
]);
