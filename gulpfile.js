'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');


// Compiles all Sass file into CSS (doesn't minify)
gulp.task("compileSass", function() {
    return gulp.src('src/styles/app.scss')
        .pipe(maps.init())
        .pipe(sass({ includePaths: ['./bower_components/foundation/scss'] }))
        .pipe(maps.write("./"))
        .pipe(gulp.dest('public/css'));
});


// Task to optimize images
// Task to minify CSS
// Task to concat scripts
// Task to minify scripts
// Task to build the website for production
// Task to clean all generated files

gulp.task('watch', function() {
    gulp.watch("src/styles/**/*.scss", ['compileSass']);
});

gulp.task('default', ['compileSass']);