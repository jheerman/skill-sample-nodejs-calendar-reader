// Karma configuration
// Generated on Thu Mar 16 2017 10:45:11 GMT-0500 (CDT)

module.exports = function(config) {
  "use strict";

  var files = (process.env.npm_config_single_file) ? 
				process.env.npm_config_single_file : 'tests/**/*_spec.js';

  var fileWatch = (process.env.npm_config_auto_watch) ? 
					process.env.npm_config_auto_watch : false;

  var singleRun = !fileWatch;

  var options = {

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

	plugins: [
		'karma-phantomjs2-launcher',
		'karma-jasmine',
		'karma-babel-preprocessor',
		'karma-spec-reporter'
	],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS2'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: singleRun,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  options.files = [
	{pattern: files, watch: fileWatch}
  ];

  options.preprocessors = {};
  options.preprocessors[files] = ['babel'];

  config.set(options);
}
