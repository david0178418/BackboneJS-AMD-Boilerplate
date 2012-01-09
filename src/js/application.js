(function() {
	"use strict";
	
	define([
			'jqueryLoader',
			'views/main'
		],
		function($, MainView) {
			
			return {
				initialize : function() {
					var app = new MainView({
						el : $('#content')
					});
				}
			};
		}
	);
})();
