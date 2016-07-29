var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		main: __dirname + '/src/js/typely'
	},

	output: {
		path: __dirname + '/dist/js',
		filename: 'typely.js'
	},

	module: {
	    loaders: [{
	        test: /\.js$/,
	        exclude: /(node_modules|bower_components|vendor)/,
	        loader: 'babel', // 'babel-loader' is also a legal name to reference
	        query: {
	            presets: ['es2015'],
	            cacheDirectory: __dirname + '/.babel-cache'
	        }
	    }, {
	        test: /\.tpl$/,
	        loader: 'ejs',
	    }]
	},

	devtool: 'cheap-module-source-map',

	plugins: [
		// This replaces shim stuff in RequireJS.
		new webpack.ProvidePlugin({
			_: 'underscore',
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'Marionette': 'marionette',
			'Mn': 'marionette',
			'pnotify': 'PNotify'
		}),
		// Limit the number of generated chunks
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1 // no limit
		}),
		// Force min chunk size (to merge entry chunk with other chunks)
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize: 20 * 1024 // 20 KB
		})
	],

	externals: {
		fb: 'var FB'
	},

	resolve: {
		root: [
			__dirname + '/src/js'
		],
		extensions: ['', '.js', '.tpl'],
		alias: {
			'jquery-easing'            : 'vendor/jquery.easing',
			pnotify                    : 'vendor/pnotify.core',
			'pnotify.buttons'          : 'vendor/pnotify.buttons',
			'pnotify.confirm'          : 'vendor/pnotify.confirm',
			'pnotify.nonblock'         : 'vendor/pnotify.nonblock',
			'bootstrap-datetimepicker' : 'vendor/bootstrap-datetimepicker',
			'jquery-ui-core'           : 'vendor/jquery-ui.core',
			'rangy-core'               : 'vendor/rangy-core',
			'rangy-selection'          : 'vendor/rangy-selectionsaverestore'
		}
	}
};
