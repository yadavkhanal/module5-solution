(function() {
	"use strict";

	angular.module('common').service('MenuService', MenuService);

	MenuService.$inject = [ '$http', 'ApiPath' ];
	function MenuService($http, ApiPath) {
		var service = this;
		var menuItemsEndPoint = ApiPath + '/menu_items/';
		service.user={};

		service.getCategories = function() {
			// return $http.get(ApiPath + '/categories.json').then(
			// 		function(response) {
			// 			return response.data;
			// 		});
			return $http.get(
				{
					method: 'GET',
					url: 'https://test-api.rize.systems/v1/uers/me',
					headers:{'Content-Type': 'application/json',
  'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0LWFwaS5yaXplLnN5c3RlbXNcL3YxXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4NDExNjg3NiwiZXhwIjoxNTg0MTIwNDc2LCJuYmYiOjE1ODQxMTY4NzYsImp0aSI6ImloR2hHRFpiMUJ2UFg2dmsiLCJzdWIiOjEyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.qI2lcYjn0W_d5AvvJXYJWc7UHV6hWaJj5GPFhZnJBOM"}
			}
			).then(function(response) {
				console.log(response.data);
				return response.data;
			});
			
		};

		service.getMenuItems = function(category) {
			var config = {};
			if (category) {
				config.params = {
					'category' : category
				};
			}

			return $http.get(ApiPath + '/menu_items.json', config).then(
					function(response) {
						return response.data;
					});
		};
		service.getAllMenuItems = function() {
			return $http.get(ApiPath + '/menu_items.json').then(
					function(response) {
						return response.data;
					});
		};
		
		service.getMenuItemsByShortName = function(shortName) {
			return $http.get( menuItemsEndPoint + shortName +'.json').then(
					function(response) {
						return response.data;
					});
		};
		service.setUser = function(user){
			service.user = user;
		};
		service.getUser = function(){
			return service.user;
		};

	}
})();
