var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();



gulp.task('default', ['example']);



var scssFiles = './src/scss/**/*.scss';
gulp.task('scss', function () {
  return gulp.src('./src/scss/collapsible.scss')
    .pipe(plugins.sass())
    .pipe(gulp.dest('./dist'));
});



var jsxFiles = [ /* listed in dependency order for concat; TODO use module loading system */
  './src/jsx/CollapsibleHead.jsx',
  './src/jsx/CollapsibleBody.jsx',
  './src/jsx/Collapsible.jsx',
  './src/jsx/CollapsibleGroup.jsx'
];
gulp.task('jsx', function () {
  return gulp.src(jsxFiles)
    .pipe(plugins.react())
    .pipe(plugins.concat('collapsible.js'))
    .pipe(gulp.dest('./dist'));
});



var exampleFiles = [
  './bower_components/jquery/dist/jquery.min.js',
  './dist/collapsible.*',
  './bower_components/react/react-with-addons.min.js',
  './bower_components/react/JSXTransformer.js'
];
gulp.task('example', ['scss', 'jsx'], function () {
  return gulp.src(exampleFiles).pipe(gulp.dest('./example'));
});



gulp.task('ghpages', ['example'], function () {
  return gulp.src('./example/**/*').pipe(plugins.ghPages());
});



gulp.task('watch', ['default'], function () {
  gulp.watch(scssFiles, ['scss']);
  gulp.watch(jsxFiles, ['jsx']);
  gulp.watch(exampleFiles, ['example']);
});
