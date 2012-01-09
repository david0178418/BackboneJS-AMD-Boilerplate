(function() {
	"use strict";
	
	require.config({
		paths : {
			jquery : '../../libs/js/jquery-1.7.1.min',	//return jQuery module but also keeps it in the global scope
			jqueryLoader : '../../libs/js/jquery',		//loads jQuery module and removes it from the global scope
			underscore : '../../libs/js/underscore-min',
			backbone : '../../libs/js/backbone-min'		//
		},
		basePath : 'src/js'
	});
	
	require([
			'application'
		],
		function(App) {
			App.init();
		}
	);
})();
