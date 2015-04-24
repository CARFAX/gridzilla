var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('compile', function(){
  return sass('./src/gridzilla.scss', {sourcemap: false})
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(concat('gridzilla.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['compile'])
