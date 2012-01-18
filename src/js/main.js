(function() {
	"use strict";
	var libsPath = '../../libs/js/'; //libsPath relative to 'basePath'
	
	require.config({
		paths : {
			jquery : libsPath + 'jquery-1.7.1.min',		//return jQuery module but also keeps it in the global scope
			jqueryLoader : libsPath + 'jquery',		//loads jQuery module and removes it from the global scope
			underscore : libsPath + 'underscore-min',
			backbone : libsPath + 'backbone-min'
		},
		baseUrl : 'src/js'
	});
	
	require([
			'application'
		],
		function(App) {
			App.initialize();
		}
	);
})();