module.exports = {
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@atom/*': 'src/components/atom/*',
					'@layout/*': 'src/components/layout/*',
					'@libs/*': 'src/libs/*',
					'@molecules/*': 'src/components/molecules/*',
					'@types/*': 'src/types/*',
					'@views/*': 'src/components/views/*'
				},
				extensions: [
					'.js',
					'.ts',
					'.tsx'
				],
				root: [
					'.'
				]
			}
		]
	],
	presets: [
		'next/babel'
	]
};