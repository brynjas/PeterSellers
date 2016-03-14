"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, $routeParams, AppResource) {
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


	$scope.tabs = [{
      
      title: 'All Products',
      url: 'AllProducts.html'
    },{
      title: 'Top Ten',
      url: 'TopTen.html'
    }];

    $scope.activeTab = 'AllProducts.html';  

    $scope.onClick = function(tab) {
      $scope.activeTab = tab.url;
    };

    $scope.isActive = function(tabUrl) {
      return tabUrl === $scope.activeTab;
    };

    
   


});