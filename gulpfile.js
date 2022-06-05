const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const buildStyles = () => {
    return src('mwd/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

const watchTask = () => {
    watch(['mwd/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)