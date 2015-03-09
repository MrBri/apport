'use strict';
var gulp = require('gulp');
// var webpack = require('gulp-webpack');
var pg = require('gulp-load-plugins')(); // gulp plugins
// var del = require('del');
var config = require('./webpack.config');

gulp.task('default', [], function() {
  return gulp.src('client.js')
    .pipe(pg.webpack(config))
    .pipe(gulp.dest('./build/public/scripts'));
});

// gulp.task('clean', del.bind(null, ['bundle.js']));
