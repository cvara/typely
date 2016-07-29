/* jshint -W079 */

// Load plugins
var gulp = require('gulp');

var notifier = require('node-notifier');
var util = require('gulp-util');

var LessPluginCleanCss = require('less-plugin-clean-css');
var cleanCss = new LessPluginCleanCss({
	keepSpecialComments: 0,
	advanced: true,
	aggressiveMerging: true
});

var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
var connect = require('gulp-connect');
var preprocess = require('gulp-preprocess');
var less = require('gulp-less');
var inlinesource = require('gulp-inline-source');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var del = require('del');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var argv = require('yargs').argv;
var open = require('gulp-open');

var source = __dirname + '/src';
var dist = __dirname + '/dist';

// Error handler
function errorHandler(err) {
	// Native notification
	notifier.notify({
		'title':'Build Error:',
		'message': err.message
	});
	// Log to console
	util.log(util.colors.red('Error'), err.message);
	// Manually end the stream, so that it can re-run
	this.emit('end');
}

// Error handler
function lessVerboseErrorHandler(err) {
	// Log to console
	util.log(util.colors.red('Error'), err.message);
	// Manually end the stream, so that it can re-run
	this.emit('end');
}

// Local connect server for testing
gulp.task('connect', function() {
	connect.server({
		root: './',
		port: argv.port || 5000,
		hostname: '*', // to allow access to server from outside
		livereload: {
			port: 35731
		}
	});
});

// Styles
gulp.task('styles', function() {
	return gulp.src(source + '/css/style.less')
		// Run the transformation from LESS to CSS & minify
		.pipe(less({
			plugins: [cleanCss]
		}))
		.on('error', errorHandler)
		.pipe(rename({
			basename: 'typely',
			// suffix: '.min',
		}))
		.pipe(gulp.dest(dist + '/css'))
		.pipe(connect.reload());
});

// Webpack
gulp.task('webpack', function() {
	return gulp.src(source + '/js/typely.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(dist + '/js'))
		.pipe(connect.reload());
});

// Uglify bundle
gulp.task('uglifyBundle', function() {
	return gulp.src(dist + '/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(dist + '/js'));
});

// Images
gulp.task('images', function() {
	return gulp.src(source + '/img/**/*.*')
		.pipe(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(dist + '/img/'));
});

// Fonts
gulp.task('fonts', function() {
	return gulp.src(source + '/fonts/**/*')
		.pipe(gulp.dest(dist + '/fonts'))
		.pipe(connect.reload());
});

// Clean
gulp.task('clean', function(cb) {
	del([dist], cb);
});

gulp.task('lint', function() {
    return gulp.src([
			source + '/js/**/*.js',
			'!' + source + '/js/vendor/**/*.js'
		])
	    .pipe(jshint())
	    .pipe(jshint.reporter(stylish));
});

// Build (base build tasks, for dev)
gulp.task('build', function(callback) {
	var start = new Date().getTime();
	runSequence('clean', 'webpack', 'styles', 'fonts', 'images', callback);
});


// Watch
gulp.task('watch', function() {

	// Watch .less files
	gulp.watch(source + '/css/**/*.less', ['styles']);

	// Watch .js files
	gulp.watch(source + '/js/**/*', ['webpack']);

	// Watch image files
	gulp.watch(source + '/img/**/*', ['images']);

	// Watch font files
	gulp.watch(source + '/fonts/**/*', ['fonts']);
});

// Run in dev mode with static pages
gulp.task('run', function(callback) {
	runSequence('build', 'connect', 'watch', callback);
});

// Default task
gulp.task('default', function() {
	gulp.start('run');
});
