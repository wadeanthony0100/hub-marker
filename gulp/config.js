'use strict';

export default {
  build: {
    images: './dist/',
    css: './dist/',
    js: './dist/',
    jsMain: './dist/js/main.js',
    dir: './dist',
  },

  source: {
    images: './src/img/**/*.png',
    scss: './src/scss/application.@(scss|css)',
    stylesheets: './src/scss/**/*.@(scss|css)',
    jsMain: './src/js/app.jsx',
    scripts: './src/js/**/*.@(js|jsx)',
    html: './src/popup.html',
  },
};
