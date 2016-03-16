'use strict';

import gulp  from 'gulp';
import babel from 'gulp-babel';
import jade  from 'gulp-jade';
import sass  from 'gulp-sass';

gulp.task('default', () => {
    return gulp.src('./src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

// Component

// Demo

gulp.task('demo-styles', () => {
    gulp.src('./demo/src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./demo'));
});

gulp.task('demo-markups', () => {
    gulp.src('./demo/src/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./demo'));
});

gulp.task('demo-scripts', () => {

});

