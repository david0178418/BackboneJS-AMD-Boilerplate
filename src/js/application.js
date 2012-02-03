define([
		'views/main-view'
	],
	function(
		MainView
	) {
		"use strict";
		
		return {
			initialize : function() {

				var app = new MainView({
					el : document.getElementById('content')
				});
			}
		};
	}
);