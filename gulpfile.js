
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');


gulp.task('sass-to-css', function () {
    gulp.src('dev/sass/style.scss')
        .pipe(sass())
        .pipe(cleanCSS({compatibility:'ie8'}))
        .pipe(gulp.dest('build/css'))

});

gulp.task('watcher', function () {
    gulp.watch('dev/sass/style.scss', ['sass-to-css'])
});