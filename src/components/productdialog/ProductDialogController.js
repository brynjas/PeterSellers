"use strict";

angular.module("project3App").controller("ProductDialogController",
	function ProductDialogController($scope, AppResource, $rootScope, $uibModal, sellerId) {
		console.log("THE DIALOG is called");
		$scope.header = "Add a product";
		$scope.confirm = "Add";

		AppResource.getProductCount().success(function(prodCount) {
			console.log("Total product count: " + prodCount);
			$scope.product = {
				id: prodCount+1,
				name: "",
				price: "",
				quantitySold: "",
				quantityInStock: "",
				imagePath: ""
			};
		});


		
		$scope.onOk = function onOk() {
			$scope.$close($scope.product);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss('cancel');
		};

	}
);