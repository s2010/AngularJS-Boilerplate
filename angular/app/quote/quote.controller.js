(function() {
	"use strict";

	angular.module('app.controllers')
        .controller('QuoteController', ['API', function(API) {
            var vm = this;
            vm.quote;
            vm.error;

            vm.getQuote = function() {
                API.all('protected/random-quote').customGET().then(function(quote) {
                    vm.quote = quote;
                }, function(error) {
                    vm.error = error;
                });
            }
        }]);
})();
