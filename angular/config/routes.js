(function(){
	"use strict";

	angular.module('app.routes').config(['$stateProvider', '$urlRouterProvider', '$authProvider',
        function($stateProvider, $urlRouterProvider, $authProvider){

            var getView = function(viewName){
                return './views/app/' + viewName + '/' + viewName + '.html';
            };

            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = 'http://localhost:3001/sessions/create';
            $authProvider.tokenName = 'id_token';

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('app', {
                    abstract: true,
                    views: {
                        header: {
                            templateUrl: getView('header'),
                            controller: 'HeaderController as header'
                        },
                        content: {},
                        footer: {
                            templateUrl: getView('footer')
                        }
                    },
                    auth: 'public'
                })
                .state('app.landing', {
                    url: '/',
                    views: {
                        'content@': {
                            templateUrl: getView('landing')
                        }
                    },
                    auth: 'public'
                })
                .state('app.login', {
                    url: '/login',
                    views: {
                        'content@': {
                            templateUrl: getView('login'),
                            controller: 'LoginController as auth'
                        }
                    },
                    auth: 'public'
                })
                .state('app.logout', {
                    url: '/logout',
                    views: {
                        'content@': {
                            templateUrl: getView('logout'),
                            controller: 'LogoutController'

                        }
                    },
                    auth: 'public'
                })
                .state('app.quote', {
                    url: '/quote',
                    views: {
                        'content@': {
                            templateUrl: getView('quote'),
                            controller: 'QuoteController as quote'
                        }
                    },
                    auth: 'private'
                });

	}]);
})();
