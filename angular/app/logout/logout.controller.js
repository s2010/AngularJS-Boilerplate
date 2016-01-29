(function() {
	"use strict";

	angular.module('app.controllers')
        .controller('LogoutController', function($auth, $state) {

            // Use Satellizer's $auth service to logout
            $auth.logout();

            // Redirect back to landing page
            $state.go('app.landing', {});
	});

})();
