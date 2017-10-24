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
	}
})();