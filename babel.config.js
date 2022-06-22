module.exports = {
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@/atom/*': 'src/components/atom/*',
					'@/layout/*': 'src/components/layout/*',
					'@/libs/*': 'src/libs/*',
					'@/molecules/*': 'src/components/molecules/*',
					'@/types/*': 'src/types/*',
					'@/views/*': 'src/components/views/*'
				},
				extensions: [
					'.js',
					'.ts',
					'.tsx'
				],
				root: [
					'./src/'
				]
			}
		]
	],
	presets: [
		"@babel/preset-env",
        "@babel/preset-react",
		'next/babel'
	]
};