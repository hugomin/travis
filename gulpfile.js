const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function () {
    gulp.src(['src/**/*.es6',"!src/public/*/*.es6"])
        .pipe(babel({
            presets: ['env']
        }))
        // .pipe(uglify())
        // .pipe(concat("all.main.js"))
        .pipe(gulp.dest('build'));
});