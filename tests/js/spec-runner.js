(function() {
	"use strict";
	var specsPath = '../../tests/js/specs/';
	
	define([
			//list of specs to run
			specsPath + 'main-view-spec'
		],
		function(specStub) {
			return {
				initialize : function() {
					specStub.test();
					
					jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
					jasmine.getEnv().execute();
				}
			};
		}
	);
})();