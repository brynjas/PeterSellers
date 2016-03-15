"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, $routeParams, AppResource, $uibModal, toastr) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	
	var id = $routeParams.id;
	console.log("ID: " + id);

	AppResource.getSellerProducts(parseInt(id)).success(function(products){
		console.log("PRODUCTS: " + products);
		$scope.products = products;
	});

	AppResource.getSellerDetails(parseInt(id)).success(function(seller){
		console.log("SELLER: " + seller);
		$scope.seller = seller;
	});

	$scope.onAddProduct = function onAddProduct() {
		console.log("Add seller button");

		var hlutur = $uibModal.open({
			controller: 'ProductDialogController',
			templateUrl: 'components/productdialog/productdialog.html',
			resolve: {
				sellerId: function() {
					return $scope.seller.id;
				}
			}
		});

		hlutur.result.then(function(new_product) {
			AppResource.addSellerProduct($scope.seller.id, new_product).success(function(seller) {
				console.log("stuff happened");
				toastr.success("Product added","Success");
			});
			}, function() {
				console.log("Shit was cancelled");
		});
	};

	$scope.onEditProduct = function onEditProduct() {
		var testProdId = 2;
		var editProduct = _.find($scope.products, function(o){ return o.id === testProdId;});

		//console.log($scope.products[1]);
		console.log("CURRENT: " + editProduct.id);
		console.log("name: " + editProduct.name);
		console.log("price: " + editProduct.price);
		var hlutur = $uibModal.open({
			controller: "ProductEditController",
			templateUrl: "components/productdialog/productdialog.html",
			resolve: {
				the_product: function() {
					return editProduct;
				}
			}
		});

		hlutur.result.then(function(editedProduct) {
			AppResource.updateProduct(editedProduct).success(function() {
				console.log("Heppnadist");
			});
		}, function() {
			console.log("Failadi");

		});
	};

});