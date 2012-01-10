(function() {
	"use strict";
	
	define([
			'jqueryLoader',
			'underscore',
			'backbone',
		],
		function($, _, Backbone) {
			
			return Backbone.View.extend({
				initialize : function() {
					
				},
				
				render : function() {
					
					return this;
				}
			});
		}
	);
})();
