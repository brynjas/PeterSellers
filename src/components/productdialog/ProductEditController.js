"use strict";

angular.module("project3App").controller("ProductEditController",
	function ProductEditController($scope, $rootScope, $uibModal, the_product) {
		console.log("THE Product Edit is called");
		console.log("AQUAMAN: " + the_product.id);
		$scope.header = "Edit a product";
		$scope.confirm = "Save";

		$scope.product = {
			id: the_product.id,
			name: the_product.name,
			price: the_product.price,
			quantitySold: the_product.quantitySold,
			quantityInStock: the_product.quantityInStock,
			imagePath: the_product.imagePath
		};
		
		$scope.onOk = function onOk() {
			$scope.$close($scope.product);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss('cancel');
		};

	}
);