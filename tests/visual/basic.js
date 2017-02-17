define([
	'intern!object',
	'intern-visual',
	'require'
], function (
	registerSuite,
	{visualTest},
	{toUrl}
) {
	const basicPageUrl = toUrl('../support/pages/basic.html');

	registerSuite({
		name: 'basic',

		'640x480': visualTest({
			url: basicPageUrl,
			width: 640,
			height: 480,
			missingBaseline: 'snapshot'
		}),

		'1024x768': visualTest({
			url: basicPageUrl,
			width: 1024,
			height: 768,
			missingBaseline: 'snapshot'
		})
	});
});

