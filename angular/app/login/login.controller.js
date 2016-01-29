(function() {
	"use strict";

	angular.module('app.controllers')
        .controller('LoginController', function($auth, $state) {

            var vm = this;

            vm.login = function() {

                var credentials = {
                    username: vm.username,
                    password: vm.password
                }

                // Use Satellizer's $auth service to login
                $auth.login(credentials).then(function() {

                    // If login is successful, redirect to the quote state
                    $state.go('app.quote', {});
                });
            }
	});

})();
