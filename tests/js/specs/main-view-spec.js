(function() {
	"use strict";
	
	define([
			'jqueryLoader',
			'views/main-view'
		],
		function($, MainView) {
			return {
				test : function() {
					describe('MainView', function() {
						var mainView;
						
						beforeEach(function() {
							mainView = new MainView();
						});
						
						it(" renders 'App Initialized!'", function() {
							var elementsWithMessage = $(mainView.el).find("*:contains('App Initialized!')").length;
							
							expect(elementsWithMessage).toBeTruthy();
						});
					});
				}
			};
		}
	);
})();