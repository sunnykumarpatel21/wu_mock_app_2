/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true
};
const nextTranslate = require('next-translate');
module.exports = nextTranslate();

module.exports = {
	async rewrites() {
		return [
			{
				source: '/:any*',
				destination: '/'
			}
		];
	}
};
