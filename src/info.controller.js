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
		vm.user.imagePath = "https://yadavkhanal-module5-solution.herokuapp.com/images/";
		if(vm.user.menu){
			vm.user.imagePath = vm.user.imagePath + vm.user.menu.short_name+'.jpg';
		}
		vm.signup = function(){
			$state.go('signup');
		};
	}
})();