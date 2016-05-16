var gulp = require('gulp');
var browserify = require('browserify');
var babel = require('gulp-babel');
var flatten = require('gulp-flatten');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var handleErrors = require('./handle-errors');

var paths = {
  build: {
    images: './dist',
    stylesheets: './dist',
    scripts: './dist',
    html: './dist',
  },

  source: {
    images: './src/img/*',
    stylesheets: './src/css/*',
    scripts: './src/js/**/*.@(js|jsx)',
    html: './popup.html',
  },
};

gulp.task('build', ['build:scripts', 'build:css', 'build:html', 'build:images', 'build:chrome']);

gulp.task('build:scripts',  () => {
  var b = browserify({
    entries: './src/js/main.jsx',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [reactify, {"es6": true}]
  })
  .bundle()
  .on('error', handleErrors);

  return b.bundle()
    .pipe(source(paths.source.scripts))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel())
    .pipe(flatten())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.build.stylesheets));
});

gulp.task('build:css', () => {
  return gulp.src(paths.source.stylesheets)
    .pipe(gulp.dest(paths.build.stylesheets));
});

gulp.task('build:html', () => {
  return gulp.src(paths.source.html)
    .pipe(gulp.dest(paths.build.html));
});

gulp.task('build:images', () => {
  return gulp.src(paths.source.images)
    .pipe(gulp.dest(paths.build.images));
});

// copy chrome ext. sdk file to dist
gulp.task('build:chrome', () => {
  return gulp.src('./manifest.json')
    .pipe(gulp.dest(paths.build.html));
});

gulp.task('default', () => {
  gulp.watch([paths.source.scripts], ['build:scripts']);
  gulp.watch([paths.source.stylesheets], ['build:css']);
  gulp.watch([paths.source.html], ['build:html']);
  gulp.watch([paths.source.html], ['build:chrome']);
});

