(function() {
	"use strict";
	
	var libsPath = '../../libs/js/'; //libsPath relative to 'basePath'
	
	require.config({
		paths : {
			jquery : libsPath + 'jquery-1.7.1',		//return module but also keeps it in the global scope
			jqueryLoader : libsPath + 'jquery-loader',	//loads module and removes it from the global scope
			underscore : libsPath + 'underscore',
			underscoreLoader: libsPath + 'underscore-loader',
			backbone : libsPath + 'backbone',
			backboneLoader : libsPath + 'backbone-loader'
		},
		baseUrl : 'src/js',
		urlArgs: "bust=" +  (new Date()).getTime()	//cache-busting for development
	});
	
	require(['application'],
		function(App) {
			App.initialize();
		}
	);
})();
