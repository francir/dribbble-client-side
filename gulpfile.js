var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

// Server
gulp.task('server', function () {
  browserSync.init({
      open: true,
      notify: false,
      port: 5000,
      server: {
          baseDir: './src'
      }
  });

  gulp.start('watch');
});

// Watch
gulp.task('watch', function() {
  var sources_js = './src/**/*.js';
  var sources_css = './src/**/*.css';
  var sources_html = './src/**/*.html';

  watch(sources_js, function() {
      gulp.start(['browserSync']);
  });

  watch(sources_css, function() {
      gulp.start(['browserSync']);
  });

  watch(sources_html, function() {
      gulp.start(['browserSync']);
  });
});

gulp.task('browserSync', function() {
    browserSync.reload();
});

gulp.task('default',['server']);
