var gulp = require('gulp');


gulp.task('bower', function () {
  var config = {
    src: [
      './bower_components/es5-shim/es5-*.min.js',
      './bower_components/react/react-with-addons.min.js',
      './bower_components/react/JSXTransformer.js'
    ],
    base: './bower_components',
    dest: './example/bower_components'
  };

  gulp.src(config.src, { base: config.base }).pipe(gulp.dest(config.dest));
});
