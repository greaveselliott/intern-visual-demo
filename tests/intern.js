define({

	environments: [
		{ browserName: 'chrome' }
	],

	maxConcurrency: 1,

	tunnel: 'SeleniumTunnel',

	loaderOptions: {
		packages: [
			{ name: 'tests', location: 'tests' },
			{ name: 'intern-visual', location: "node_modules/intern-visual/src" },
			{ name: 'ts-helpers', location: 'node_modules/ts-helpers', main: 'index.js' },
			{ name: 'dojo', location: 'node_modules/intern/browser_modules/dojo' }
		]
	},

	loaders: {
		'host-node': '@dojo/loader'
	},

	functionalSuites: [
		'tests/visual/all'
	],

	excludeInstrumentation: /^(tests|node_modules)/
});
