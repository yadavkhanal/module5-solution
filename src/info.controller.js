/**
 * 
 */
(function(){
	'use strict';
	angular.module('restaurant')
	.controller('InfoController', InfoController);
	InfoController.$inject = ['MenuService', '$state'];
	function InfoController(MenuService, $state){
		var vm = this;
		vm.user = MenuService.getUser();
		vm.user.imagePath = undefined;
		if(vm.user.menu)vm.user.imagePath = vm.user.menu.short_name+'.jpg';
		vm.signup = function(){
			$state.go('signup');
		};
	}
})();