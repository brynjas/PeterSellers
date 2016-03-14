"use strict";

angular.module("project3App").controller("SellerEditController",
	function SellerEditController($scope, $rootScope, AppResource, $uibModal, sellerId) {
		//console.log($scope.sellerId);
		console.log("Seller Edit controller Called");
		console.log("SELLLER INPUT: " + sellerId);
		AppResource.getSellerDetails(sellerId).success(function(seller) {
			//$scope.seller = seller;
			console.log("SellerID:" + seller.id);
			console.log("name: " + seller.name);
			console.log("category: " + seller.category);
			console.log("ImagePath: " + seller.imagePath);
			
			$scope.seller = {
				id: seller.id,
				name: seller.name,
				category: seller.category,
				imagePath: seller.imagePath
			};

		});

		$scope.onSave = function onSave() {
			$scope.$close($scope.seller);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss('cancel');
		};

	});