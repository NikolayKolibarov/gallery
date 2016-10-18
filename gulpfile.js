let gulp = require('gulp'),
    minifyHtml = require('gulp-minify-html');
    
gulp.task('minify-html', () => {
    gulp.src('client/views/**/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('client/dist/views'));
});
