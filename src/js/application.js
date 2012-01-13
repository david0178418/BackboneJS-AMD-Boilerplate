(function() {
	"use strict";
	
	define([
			'views/main-view'
		],
		function(MainView) {
			
			return {
				initialize : function() {
					var app = new MainView({
						el : document.getElementById('content')
					});
				}
			};
		}
	);
})();
