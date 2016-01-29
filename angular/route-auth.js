(function(){
	"use strict";

	angular.module('app')
		.run(['$rootScope', '$auth', '$state',
			function($rootScope, $auth, $state) {

				$rootScope.$on('$stateChangeStart', function (event, toState) {
					if (!$auth.isAuthenticated() && toState.auth === 'private') {
						console.log('DENY : Redirecting to Login');
						event.preventDefault();
						$state.go('app.login');
					}
				});
			}]);
})();