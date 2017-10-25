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
		vm.user = {firstName: '', lastName: '', email: '', phone: '', favorite: '', menuExists:true, signup:false};
		var menuItems = [];
		function getMenuItems(){
			var promise = MenuService.getAllMenuItems();
			promise.then(function(response){
				menuItems = response.menu_items;	
			}).catch(function(error){
				console.log(error.toString());
			});
			
		}
		getMenuItems();	
		vm.submit = function(){
			var promise = MenuService.getMenuItemsByShortName(vm.user.favorite);
			promise.then(function(response){
				if(vm.user.favorite === response.short_name){
					vm.user.menu = response;
					MenuService.setUser(vm.user);
					vm.user.signup = true;
					vm.user.menuExists = true;
				}else{
					vm.user.signup = false;
					vm.user.menuExists = false;
				}								
			}).catch(function(error){
				vm.user.menuExists = false;
			});
		};
		vm.menuItemExists = function(menuItem){
			for(var i in menuItems){
				if(menuItems[i].short_name === menuItem) return true;
			}
			return false;
		}
	}
})();