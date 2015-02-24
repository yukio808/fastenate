var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var PathTo = {
  Sass: './sass/**/*.scss',
  PublicFolder: './public',
  PublicCss: './public/styles',
  PublicCssFiles: './public/styles/*.css'
};

gulp.task('watch-files', function (){
  gulp.watch(PathTo.Sass, ['compile-sass']);
  gulp.watch(PathTo.PublicCssFiles, ['html']);
});

gulp.task('compile-sass', function (){
  return gulp
          .src(PathTo.Sass, ['compile-sass'])
          .pipe(sass())
          .pipe(gulp.dest(PathTo.PublicCss));
});

gulp.task('html', function (){
  gulp.src('./public/*.html')
    .pipe(connect.reload());
});

gulp.task('default', ['compile-sass', 'watch-files']);
