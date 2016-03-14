"use strict";

angular.module("project3App").controller("SellerDialogController",
	function SellerDialogController($scope, $rootScope, $uibModal) {
		console.log("THE DIALOG is called");
		$scope.seller = {
			id: $rootScope.sellerCount+1,
			name: "",
			category: "",
			imagePath: ""
		};
		
		$scope.onOk = function onOk() {
			$scope.$close($scope.seller);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss('cancel');
		};

	}
);