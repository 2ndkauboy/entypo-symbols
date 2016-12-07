var gulp = require( 'gulp' );
var svgSymbols = require( 'gulp-svg-symbols' );
var rename = require( 'gulp-rename' );
var svgmin = require( 'gulp-svgmin' );

gulp.task( 'base-sprites', function () {
	return gulp.src( 'base-icons/*.svg' )
		.pipe( svgSymbols( {
			svgClassname: 'entypo-base-icons',
			id: 'entypo-icon-%f',
			templates: ['default-svg']
		} ) )
		.pipe( rename( function ( path ) {
			path.basename = 'entypo-base-icons';
		} ) )
		.pipe( svgmin( {
			plugins: [
				{cleanupIDs: false}
			]
		} ) )
		.pipe( gulp.dest( 'symbols' ) );
} );

gulp.task( 'social-sprites', function () {
	return gulp.src( 'social-icons/*.svg' )
		.pipe( svgSymbols( {
			svgClassname: 'entypo-social-icons',
			id: 'entypo-icon-%f',
			templates: ['default-svg']
		} ) )
		.pipe( rename( function ( path ) {
			path.basename = 'entypo-social-icons';
		} ) )
		.pipe( svgmin( {
			plugins: [
				{cleanupIDs: false}
			]
		} ) )
		.pipe( gulp.dest( 'symbols' ) );
} );

gulp.task( 'default', ['base-sprites', 'social-sprites'] );