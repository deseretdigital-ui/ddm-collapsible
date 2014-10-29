var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();



gulp.task('default', ['scss', 'static']);



var scssFiles = './src/scss/**/*.scss';
gulp.task('scss', function () {
  return gulp.src('./src/scss/collapsible.scss')
    .pipe(plugins.sass())
    .pipe(gulp.dest('./dist'));
});



var staticFiles = [
  './src/collapsible.js'
];
gulp.task('static', function () {
  return gulp.src(staticFiles, { base: './src' })
    .pipe(gulp.dest('./dist'));
});



var exampleFiles = [
  './bower_components/jquery/dist/jquery.min.js',
  './dist/collapsible.*'
];
gulp.task('example', function () {
  gulp.src(exampleFiles).pipe(gulp.dest('./example'));
});



gulp.task('ghpages', ['example'], function () {
  return gulp.src('./example/**/*').pipe(plugins.ghPages());
});



gulp.task('watch', ['default'], function () {
  gulp.watch(scssFiles, ['scss']);
  gulp.watch(staticFiles, ['static']);
});
