module.exports = {
	branches: ['main'],
	plugins: [
		'@semantic-release/commit-analyzer', // analyzes commit messages
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		[
			'@semantic-release/npm',
			{
				npmPublish: true,
				tarballDir: 'dist',
			},
		],
		[
			'@semantic-release/git',
			{
				assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
				message: 'chore(release): ${nextRelease.version} [skip ci]',
			},
		],
		'@semantic-release/github',
	],
};
