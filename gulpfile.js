const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');

gulp.task('default', ['build', 'run', 'watch']);

gulp.task('build', function(){
    return gulp.src('src/*/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(''));
});

gulp.task('run', function(){
  nodemon({
      script: './test.js',
      ignore: ['public/*', 'node_modules/*']
  });
});

gulp.task('watch', function () {
    gulp.watch('src/*', ['build']);
});
