const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')

gulp.task('css', function () {
    return gulp
        .src('./src/sass/style.scss') //source file to retrieve
        .pipe(sass()) //sends the source file to the sass plugin
        .pipe(autoprefixer()) //sends the source file to the autoprefixer plugin
        .pipe(cssnano()) //sends the source file to the minifier plugin
        .on('error', sass.logError) //log errors
        .pipe(gulp.dest('./public/css')) //outputs the result in our public dir
})

gulp.task('watch', function () {
    gulp.watch('./src/sass/*.scss', gulp.parallel('css'))
})

gulp.task('build', gulp.parallel('css'))