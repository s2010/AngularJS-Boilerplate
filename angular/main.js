(function(){
	"use strict";

	angular.module('app',
		[
		'app.controllers',
		'app.filters',
		'app.services',
		'app.directives',
		'app.routes',
		'app.config',
		'partialsModule'
		]);


	angular.module('app.routes', ['satellizer']);
    angular.module('app.services', ['satellizer', 'ngStorage', 'restangular']);
    angular.module('app.controllers', ['ui.router', 'satellizer']);
	angular.module('app.filters', []);
	angular.module('app.directives', []);
	angular.module('app.config', []);

})();
