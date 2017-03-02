var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app",
        tunnel: true
    });

    gulp.watch("app/sass/*.sass", ['sass']);
    gulp.watch("app/*.*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/*.sass")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['Last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);