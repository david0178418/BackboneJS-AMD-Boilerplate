define([
		'jqueryLoader',	//Included by default, but needed in less instances now that views have cached '$el'
		'underscore',
		'backbone',
	],
	function(
		$,
		_,
		Backbone
	) {
		"use strict";

		return Backbone.View.extend({
			template : _.template(/*loaded template*/),
			
			initialize : function() {
				this.render();
			},
			
			render : function() {
				this.$el.append(this.template(/*model/collection*/));
				
				return this;
			}
		});
	}
);
