var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');

var paths = {
	scssDir: 	'scss/',
	cssDir: 	'css/',
	jsDir:  	'js/'
};

gulp.task('scripts', function() {
    gulp.src([paths.jsDir + '**/*.js'])
        .pipe(concat('app.js'));
})
 
gulp.task('styles', function() {
	return sass(paths.scssDir + 'app.scss')
        .pipe(gulp.dest(paths.cssDir));
})

gulp.task('default', ['scripts', 'styles']);