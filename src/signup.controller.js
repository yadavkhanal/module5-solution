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
		
		vm.user = {firstName: '', lastName: '', email: '', phone: '', favorite: '', signup:false};
		vm.submit = function(){
			var promise = MenuService.getMenuItemsByShortName(vm.user.favorite);
			promise.then(function(response){
				if(vm.user.favorite === response.short_name){
					vm.user.menu = response;
					MenuService.setUser(vm.user);
					vm.user.signup = true;
					vm.user.menuExists = true;
					//$state.go('myinfo');
				}else{
					vm.user.signup = false;
					vm.user.menuExists = false;
				}								
			}).catch(function(error){
				vm.menuExists = false;
			});
		};
	}
})();