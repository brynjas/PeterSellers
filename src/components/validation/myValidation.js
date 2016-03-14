"use strict";

angular.module("project3App").directive("myValidation", function() {
	return {
		require: 'ngModel',
		link: function(scope, elem, attr, ngModel) {
			ngModel.$parsers.unshift(function(value) {
				if((value === undefined) || (value === "") || (value === null)) {
					return false;
				}
				else {
					return true;
				}
			});
		}
	};
});