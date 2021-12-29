/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
module.exports = nextTranslate({
	async rewrites() {
		return [
			{
				source: '/:any*',
				destination: '/'
			}
		];
	},	reactStrictMode: true
});
