(function() {
	"use strict";
	
	define([
			'jqueryLoader',
			'views/main-view'
		],
		function($, MainView) {
			
			return {
				initialize : function() {
					var app = new MainView({
						el : $('#content')[0]
					});
				}
			};
		}
	);
})();
