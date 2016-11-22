angular.module('login',[]).controller('loginController',LoginController);

function LoginController($state) {
	var vm = this;

	vm.teste = "victor";
}
