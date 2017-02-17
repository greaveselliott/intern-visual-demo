define([
	'intern!object',
	'intern-visual',
	'require'
], function (
	registerSuite,
	{assertVisuals},
	{toUrl}
) {
	const longPageUrl = toUrl('../support/pages/longPage.html');

	const height = 768;
	const width = 1024;

	registerSuite({
		name: 'longPage',

		'entire-page': function () {
			return this.remote
				.get(longPageUrl)
				.setWindowSize(height, width)

				.takeScreenshot()
				.then(assertVisuals(this, {
					missingBaseline: 'snapshot'
				}))

				.touchScroll(null, null, height)
				.takeScreenshot()
				.then(assertVisuals(this, {
					missingBaseline: 'snapshot'
				}))

				.touchScroll(null, null, height * 2)
				.takeScreenshot()
				.then(assertVisuals(this, {
					missingBaseline: 'snapshot'
				}));
			},
			'header': function () {
				return this.remote
					.get(longPageUrl)
					.setWindowSize(height, width)
					.touchScroll(null, null, 0)

					.takeScreenshot()
					.then(assertVisuals(this, {
						missingBaseline: 'snapshot'
					}));
			},
			'content': function () {
				return this.remote
					.get(longPageUrl)
					.setWindowSize(height, width)
					.touchScroll(null, null, height)

					.takeScreenshot()
					.then(assertVisuals(this, {
						missingBaseline: 'snapshot'
					}));
			},
			'footer': function () {
				return this.remote
					.get(longPageUrl)
					.setWindowSize(height, width)
					.touchScroll(null, null, height * 2)

					.takeScreenshot()
					.then(assertVisuals(this, {
						missingBaseline: 'snapshot'
					}));
			}
	});
});