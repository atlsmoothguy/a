var gulp = require( 'gulp' );
var sass = require('gulp-sass');


gulp.task('scss', function () {
  gulp.src('./app/scss/**/*.scss')
    .pipe(sass({
        }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['scss']);
});
