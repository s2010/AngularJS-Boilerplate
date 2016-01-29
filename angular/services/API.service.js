(function() {
	"use strict";

	angular.module('app.services')
        .factory('API', function(Restangular, $localStorage) {

            //content negotiation
            var headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };

            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer
                    .setBaseUrl('http://localhost:3001/api/')
                    .setDefaultHeaders(headers)
                    .addFullRequestInterceptor(function(headers) {
                        if ($localStorage.jwt) {
                            headers.Authorization = 'Bearer ' + $localStorage.jwt;
                        }
                    });
            });
	});

})();
