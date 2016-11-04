let gulp = require('gulp');
let livereload = require('gulp-livereload');

let HTML_PATH = '**/*.html';
let SCSS_PATH = '**/*.scss';
let JS_PATH = '**/bundle.js';

gulp.task('html', function() {
  return gulp.src(HTML_PATH).pipe(livereload());
});

gulp.task('scss', function() {
  return gulp.src(SCSS_PATH).pipe(livereload());
})

gulp.task('js', function() {
  return gulp.src(JS_PATH).pipe(livereload());
})

gulp.task('watch', function() {
  console.log("Starting watch task.")
  livereload.listen(8888);
  gulp.watch(HTML_PATH, ['html']);
  gulp.watch(SCSS_PATH, ['scss']);
  gulp.watch(JS_PATH, ['js'])
});
