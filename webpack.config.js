const path = require('path');
const fse = require('fs-extra');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const IMAGE_COMPRESS_OPTIONS = {
	mozjpeg: {
		progressive: true,
	},
	gifsicle: {
		interlaced: false,
	},
	optipng: {
		optimizationLevel: 4,
	},
	pngquant: {
		quality: [0.75, 0.90],
		speed: 3,
	}
};

module.exports = function (env, options) {
	const dist = path.resolve(__dirname, 'dist');
	fse.emptyDirSync(dist);

	return {
    type: "javascript/auto",
		entry: {
			index: './src/index.tsx',
			index_be: './src/be/index.ts',
		},
		output: {
			path: dist,
			filename: '[name].js',
			chunkFilename: '[id].js',
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
		},
		module: {
			rules: [
        
				{
					test: /.tsx?$/i,
					exclude: [/node_modules/],
					use: [
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true
							}
						},
						{
							loader: 'ifdef-loader',
							options: {
								'ifdef-verbose': false,
								'DEBUG': false
							}
						},
					]
				},
				{
					// Load css resources in "regular" source modules:
					test: /\.css$/i,
					include: [/src/],
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: false,
								importLoaders: 1
							}
						}
					]
				},
				{
					// Load and compress images
					test: /\.(png|gif|jpe?g|svg|ico)$/i,
					include: [/img/, /src/, /vendor/, /node_modules/],
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						},
						{
							loader: 'image-webpack-loader',
							options: IMAGE_COMPRESS_OPTIONS
						}
					]
				},
			]
		},
		plugins: [
			// compress all copied images
			new ImageminPlugin({
				IMAGE_COMPRESS_OPTIONS
			}),

			// Extract text plugin
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[name].css'
			}),

			// add plugin to copy resources
			new CopyWebpackPlugin({
				// @ts-ignore
				patterns: [
					{context: './public', from: '*.*'},
				]
			}),

		],
		devtool: (options && typeof options.mode === 'string' && options.mode.toLowerCase() === 'production') ? 'source-map' : 'eval-source-map',
		performance: {
			hints: false,
		},
	};
};