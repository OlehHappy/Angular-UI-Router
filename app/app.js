'use strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$urlRouterProvider', '$stateProvider', 
	function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			state('home', {
				url: '/',
				tempate: 'templates/home.html'
			})
	}
])