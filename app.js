var app = angular.module('sistemaTCC',['ui.router','login']);


app.config (function ($stateProvider,$urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/login");


	$stateProvider
		.state('login',{
			url:"/login",
			templateUrl:"login/login.html",
			controller:"loginController as vm"
		});


var app = angular.module('sistemaTCC',['ui.router','home']);
app.config (function ($stateProvider,$urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state('home',{
			url:"/home",
			templateUrl:"home/home.html",
			controller:"homeController"
		});

var app = angular.module('sistemaTCC',['ui.router','cadastroAluno']);
app.config (function ($stateProvider,$urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/cadastroAluno");

	$stateProvider
		.state('cadastroAluno',{
			url:"/cadastroAluno",
			templateUrl:"cadastroAluno/cadastroAluno.html",
			controller:"cadastroAlunoController"
		});
});