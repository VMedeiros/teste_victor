var app = angular.module('sistemaTCC',['ui.router','login']);


app.config (function ($stateProvider,$urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/login");


	$stateProvider
		.state('login',{
			url:"/login",
			templateUrl:"login/login.html",
			controller:"loginController"
		});

	
	$stateProvider
		.state('home',{
			url:"/home",
			templateUrl:"home/home.html",
			controller:"homeController"
		});


	$stateProvider
		.state('cadastroAluno',{
			url:"/cadastroAluno",
			templateUrl:"cadastroAluno/cadastroAluno.html",
			controller:"cadastroAlunoController"
		});


	$stateProvider
		.state('cadastroProfessor',{
			url:"/cadastroProfessor",
			templateUrl:"cadastroProfessor/cadastroProfessor.html",
			controller:"cadastroProfessorController"
		});


	$stateProvider
		.state('acompanhamentos',{
			url:"/acompanhamentos",
			templateUrl:"acompanhamentos/acompanhamentos.html",
			controller:"acompanhamentosController"
		});


	$stateProvider
		.state('cadastroOrientacao',{
			url:"/cadastroOrientacao",
			templateUrl:"cadastroOrientacao/cadastroOrientacao.html",
			controller:"cadastroOrientacaoController"
		});


	$stateProvider
		.state('relatorios',{
			url:"/relatorios",
			templateUrl:"relatorios/relatorios.html",
			controller:"relatoriosController"
		});


	$stateProvider
		.state('sobre',{
			url:"/sobre",
			templateUrl:"sobre/sobre.html",
			controller:"sobreController"
		});


});