// Thank God ✅✅
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: { saySalam: './src/saySalam.js', addImage: './src/addImage.js' },
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './build'),
		publicPath: './',
		// clean: { // Default built-in cleaner for Webpack 5.20+
		// 	dry: true,
		// 	keep: /\.(css)$/
		// }
	},
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all',
			// minSize: 1024,
		}
	},
	module: {
		rules: [
			// using asset module: (specified by the "type" property)
			{
				test: /\.(png|jpg)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 5 * 1024, // KiloBytes
					},
				},
			},
			{
				test: /\.(svg)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(txt)$/,
				type: 'asset/source',
			},
			// using loader: (specified by the "use" property)
			{
				test: /\.(css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(js)$/,
				exclude: path.resolve(__dirname, './node_modules/'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						// plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
			{
				test: /\.(hbs)$/,
				use: ['handlebars-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new CleanWebpackPlugin(), // Default path for the clean-webpack-plugin is output.path
		// { // CleanWebpackPlugin options
		// 	cleanOnceBeforeBuildPatterns: [
		// 		'**/*', // Default pattern
		// 		// path.join(process.cwd(), './otherfiles/**/*') // deletes all files and folders (and subfolders) inside {process directory}/otherfiles/
		// 	]
		// }
		new HtmlWebpackPlugin({
			filename: 'say-salam.html',
			chunks: ['saySalam'],
			title: 'Webpack Course - Salam',
			scriptLoading: 'defer',
			template: './src/templates/template.hbs',
		}),
		new HtmlWebpackPlugin({
			filename: 'image.html',
			chunks: ['addImage'],
			title: 'Webpack Course - Image',
			scriptLoading: 'defer',
			template: './src/templates/template.hbs',
		}),
	],
}
