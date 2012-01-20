(function() {
	"use strict";
	var specsPath = '../../tests/js/specs/';
	
	define([
			//list of specs to run
			specsPath + 'main-view-spec'
		],
		function(mainViewSpec) {
			return {
				initialize : function() {
					mainViewSpec.test();
					
					jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
					jasmine.getEnv().execute();
				}
			};
		}
	);
})();