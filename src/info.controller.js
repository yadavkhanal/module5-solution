/**
 * 
 */
(function(){
	'use strict';
	angular.module('restaurant')
	.controller('InfoController', InfoController);
	InfoController.$inject = ['MenuService'];
	function InfoController(MenuService){
		var vm = this;
		vm.user = MenuService.getUser();
		vm.user.imagePath = vm.user.menu.short_name+'.jpg';
	}
})();