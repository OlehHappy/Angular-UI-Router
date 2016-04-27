'use strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$urlRouterProvider', '$stateProvider', 
	function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'templates/contact.html'
			})
	}
])