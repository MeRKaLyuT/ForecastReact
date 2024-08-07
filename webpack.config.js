const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Extension } = require('typescript');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/js/script.tsx'),
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: './dist',
		hot: true,
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',

				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
