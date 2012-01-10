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
					this.render();
				},
				
				render : function() {
					
					return this;
				}
			});
		}
	);
})();
