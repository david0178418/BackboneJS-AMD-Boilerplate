define(['underscore'],
	function(_) {
		"use strict";
		_.noConflict();

		//temporary stop-gap for jQuery global space infection
		if(typeof jQuery !== 'undefined') {
			jQuery.noConflict(true);
		}
		
		return _;
	}
);
