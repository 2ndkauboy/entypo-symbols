var gulp = require( 'gulp' );
var svgmin = require( 'gulp-svgmin' );
var svgstore = require( 'gulp-svgstore' );
var rename = require( 'gulp-rename' );

gulp.task( 'base-icons', function () {
	return gulp.src( './base-icons/**/*.svg' )
		.pipe( svgmin() )
		.pipe( rename( {prefix: 'entypo-icon-'} ) )
		.pipe( svgstore( {prefix: 'entypo-icon-', inlineSvg: true} ) )
		.pipe( rename( 'entypo-base-icons.svg' ) )
		.pipe( gulp.dest( './symbols' ) );
} );

gulp.task( 'social-icons', function () {
	return gulp.src( './social-icons/**/*.svg' )
		.pipe( svgmin() )
		.pipe( rename( {prefix: 'entypo-icon-'} ) )
		.pipe( svgstore( {inlineSvg: true} ) )
		.pipe( rename( 'entypo-social-icons.svg' ) )
		.pipe( gulp.dest( './symbols' ) );
} );

gulp.task( 'default', ['base-icons', 'social-icons'] );