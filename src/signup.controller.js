/**
 * 
 */
(function(){
	'use strict';
	angular.module('restaurant')
	.controller('SignUpController',  SignUpController);
	SignUpController.$inject = ['MenuService','$state'];
	function SignUpController(MenuService, $state){
		var vm = this;
		vm.menuExists = true;
		vm.user = {firstName: '', lastName: '', email: '', phone: '', favorite: '', signup:false};
		vm.submit = function(){
			var promise = MenuService.getMenuItemsByShortName(vm.user.favorite);
			promise.then(function(response){
				if(vm.user.favorite === response.short_name){
					vm.user.menu = response;
					vm.user.signup = true;
					MenuService.setUser(vm.user);
					$state.go('myinfo');
				}else{
					vm.user.signup = false;
					vm.menuExists = false;
				}								
			}).catch(function(error){
				vm.menuExists = false;
			});
		};
	}
})();