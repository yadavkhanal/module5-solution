/**
 * 
 */
(function(){
	'use strict';
	angular.module('restaurant')
	.controller('InfoController', InfoController);
	InfoController.$inject = ['MenuService'];
	function ItemsComponentController(MenuService){
		var $ctrl = this;
	}
})();