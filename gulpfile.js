var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var PathTo = {
  SassFiles: './sass/**/*.scss',
  PublicFolder: './public',
  PublicCss: './public/styles',
  PublicCssFiles: './public/styles/*.css'
};

gulp.task('watch-files', function (){
  gulp.watch(PathTo.SassFiles, ['compile-sass']);
  // gulp.watch(PathTo.PublicCssFiles);
  gulp.watch('./public/**/*', ['html']);
});

gulp.task('compile-sass', function (){
  return gulp
          .src(PathTo.SassFiles, ['compile-sass'])
          .pipe(sass({ errLogToConsole: true }))
          .pipe(gulp.dest(PathTo.PublicCss))
          .pipe(connect.reload());

});

gulp.task('html', function (){
  return gulp.src('./public/*.html')
    .pipe(connect.reload());
});
gulp.task('livereload', function(){
  gulp.src('./public/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});


gulp.task('public-server', function (){
  connect.server({
    root: './public',
    port: 8080,
    livereload: true
  });
});

gulp.task('default', ['public-server', 'compile-sass', 'watch-files']);
