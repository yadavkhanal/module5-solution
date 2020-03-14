(function () {
	"use strict";

	angular.module('common').service('MenuService', MenuService);

	MenuService.$inject = ['$http', 'ApiPath'];
	function MenuService($http, ApiPath) {
		var service = this;
		var menuItemsEndPoint = ApiPath + '/menu_items/';
		service.user = {};

		service.getCategories = function () {
			return $http.get(ApiPath + '/categories.json').then(
				function (response) {
					return response.data;
				});

		};

		service.getMenuItems = function (category) {
			var config = {};
			if (category) {
				config.params = {
					'category': category
				};
			}

			return $http.get(ApiPath + '/menu_items.json', config).then(
				function (response) {
					return response.data;
				});
		};
		service.getAllMenuItems = function () {
			return $http.get(ApiPath + '/menu_items.json').then(
				function (response) {
					return response.data;
				});
		};

		service.getMenuItemsByShortName = function (shortName) {
			return $http.get(menuItemsEndPoint + shortName + '.json').then(
				function (response) {
					return response.data;
				});
		};
		service.setUser = function (user) {
			service.user = user;
		};
		service.getUser = function () {
			return service.user;
		};

	}
})();
