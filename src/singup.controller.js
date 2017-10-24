/**
 * 
 */
(function(){
	'use strict';
	angular.module('restaurant')
	.controller('SignUpController',  SignUpController);
	SignUpController.$inject = ['MenuService'];
	function SignUpController(MenuService){
		var vm = this;
		vm.user = {firstName: '', lastName: '', email: '', phone: '', favorite: ''};
		vm.submit = function(){
			MenuService.getCategories().then().catch(error);
		};
	}
})();