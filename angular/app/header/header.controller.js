(function() {
	"use strict";

	angular.module('app.controllers')
        .controller('HeaderController', function($auth) {

            var vm = this;

            vm.isAuthenticated = function() {
                return $auth.isAuthenticated();
            }
	});

})();