var gulp = require("gulp");
var babel = require("gulp-babel");

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
  return gulp.src('src/js/*')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
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

