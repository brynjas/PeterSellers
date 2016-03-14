"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, $rootScope, AppResource, $uibModal, toastr) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	//var sellerCount = 0;

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		console.log(sellers.length);
		$rootScope.sellerCount = sellers.length;
	});

	$scope.onAddSeller = function onAddSeller() {
		console.log("Add seller button");
		var hlutur = $uibModal.open({
					controller: 'SellerDialogController',
					templateUrl: 'components/sellerdialog/sellerdialog.html'
		});

		hlutur.result.then(function(new_seller) {
			console.log("draslid heppnadist!!!!");
			console.log(hlutur.result);
			console.log(new_seller);
			AppResource.addSeller(new_seller).success(function(seller) {
				console.log("stuff happened");
				$rootScope.sellerCount++;
				toastr.success("Seller created","Success");
			});

			}, function() {
				console.log("Shit was cancelled");
		});
	};

});