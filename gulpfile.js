var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss', 'node_modules/bootstrap-select/sass/bootstrap-select.scss', 'node_modules/flag-icon-css/sass/flag-icon.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
 gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap-select/js/bootstrap-select.js', 'node_modules/jquery-validation/dist/jquery.validate.min.js', 'node_modules/jquery-validation/dist/additional-methods.js', 'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
}); 

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);
