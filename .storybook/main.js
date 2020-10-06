const path = require('path')

const src = (name = '') => path.resolve(__dirname, '../', 'src', name)

// Export a function. Accept the base config as the only param.
module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

	webpackFinal: async (config, { configType }) => {
		// Исключаем file-loader из правил
		config.module.rules = config.module.rules.filter(
			(rule) => !(rule.loader && rule.loader.indexOf('file-loader') !== -1)
		)

		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		})

		config.module.rules.push({
			test: /\.(woff|woff2|ttf|eot)$/,
			loader: 'url-loader',
		})

		config.module.rules.push({
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
		})

		config.resolve.alias = {
			...config.resolve.alias,
			...{
				assets: src('assets'),
				bem: src('helpers/bem'),
				components: src('components'),
				helpers: src('helpers'),
				hooks: src('hooks'),
			},
		}

		return config
	},
}
