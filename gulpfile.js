'use strict';
var gulp = require('gulp');
var gp = require('gulp-load-plugins')(); // gulp plugins
// var del = require('del');
var config = require('./webpack.config');

gulp.task('default', [], function() {
  return gulp.src('client.js')
    .pipe(gp.webpack(config))
    .pipe(gulp.dest('./build/public/scripts'));
});

// gulp.task('clean', del.bind(null, ['bundle.js']));
