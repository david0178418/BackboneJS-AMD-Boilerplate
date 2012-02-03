define(['backbone'],
	function(Backbone) {
		"use strict";
		Backbone.noConflict();

		//temporary stop-gap for jQuery global space infection
		if(typeof jQuery !== 'undefined') {
			jQuery.noConflict(true);
		}
	
		return Backbone;
	}
);
