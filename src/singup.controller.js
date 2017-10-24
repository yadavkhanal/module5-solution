/**
 * 
 */
(function(){
	'use strict';
	angular.module('restaurant')
	.controller('SignUpController',  SignUpController);
	SignUpController.$inject = ['MenuService'];
	function CategoriesComponentController(MenuService){
		var $ctrl = this;
	}
})();