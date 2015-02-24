var gulp = require('gulp');
var sass = require('gulp-sass');
var tintlr = require('tiny-lr');

var PathTo = {
  Sass: './sass/**/*.scss',
  PublicFolder: './public',
  PublicCss: './public/styles'
};

gulp.task('watch-files', function (){
  gulp.watch()
});

gulp.task('compile-sass', function (){
  return gulp
          .src(PathTo.Sass, ['compile-sass'])
          .pipe(sass())
          .pipe(gulp.dest(PathTo.PublicCss));
});

gulp.task('default', ['compile-sass'])