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
		vm.user = {firstName: '', lastName: '', email: '', phone: '', favorite: ''};
		vm.submit = function(){
			var promise = MenuService.getMenuItems(vm.user.favorite);
			promise.then(function(response){
				if(vm.user.favorite === response.category.short_name){
					$state.go('myinfo');
				}else{
					vm.menuExists = false;
				}								
			}).catch(function(error){
				vm.menuExists = false;
			});
		};
	}
})();