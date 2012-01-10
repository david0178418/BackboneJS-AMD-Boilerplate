(function() {
	"use strict";
	
	define([
			'jqueryLoader',
			'underscore',
			'backbone',
		],
		function($, _, Backbone) {
			
			return Backbone.View.extend({
				template : _.template(/*loaded template*/),
				
				initialize : function() {
					this.render();
				},
				
				render : function() {
					$(this.el).append(this.template(/*model/collection*/));
					
					return this;
				}
			});
		}
	);
})();
