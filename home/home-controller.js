angular.module('home',[]).controller('homeController',HomeController);

function HomeController($state) {
	var vm = this;

	vm.teste = "victor";
}
