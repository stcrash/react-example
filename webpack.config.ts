const path = require('path')

const src = (name: string) => path.resolve(__dirname, 'src', name)

const config = {
	entry: src('index.tsx'),
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
						},
					},
					'eslint-loader',
				],
			},
			{
				test: /\.(s?css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				loader: 'url-loader',
			},
			{
				test: /\.svg$/,
				use: [
					'babel-loader',
					{
						loader: 'react-svg-loader',
						options: {
							svgo: {
								plugins: [{ removeTitle: false }],
								floatPrecision: 2,
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			assets: src('assets'),
			bem: src('helpers/bem'),
			scenes: src('scenes'),
			components: src('components'),
			helpers: src('helpers'),
			hooks: src('hooks'),
			constants: src('constants'),
			store: src('store'),
			interfaces: src('interfaces'),
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 8000,
	},
}

export default config
