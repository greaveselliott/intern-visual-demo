define({

	environments: [
		{ browserName: 'chrome' }
	],

	maxConcurrency: 1,

	tunnel: 'SeleniumTunnel',

	loaderOptions: {
		packages: [
			{ name: 'intern-visual', location: "node_modules/intern-visual/src" }
		]
	},

	loaders: {
		'host-node': '@dojo/loader'
	},

	functionalSuites: [
		'tests/visual/all'
	],

	reporters: [
		'Runner',
		{ id: 'intern-visual/reporters/VisualRegression', baselineLocation: './visual-test/baselines', reportLocation: './reports' }
	],


	excludeInstrumentation: /^(tests|node_modules)/
});
