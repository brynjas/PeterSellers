"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, $routeParams, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	
	var id = $routeParams.id;
	//console.log("ID: " + id);

	AppResource.getSellerProducts(parseInt(id)).success(function(products){
		//console.log("PRODUCTS: " + products);
		$scope.products = products;
		$scope.NoProducts = true;


		  if (products.length < 1) {
		  	//console.log( "LENGDIN: " + products.length);
		  	$scope.NoProducts = false;
		  }
  	
	});

	AppResource.getSellerDetails(parseInt(id)).success(function(seller){
		//console.log("SELLER: " + seller);
		$scope.seller = seller;
	});


	$scope.tabs = [{
      
      title: 'All Products',
      url: 'AllProducts'
    },{
      title: 'Top Ten',
      url: 'TopTen'
    }];

    $scope.activeTab = 'AllProducts';  

	$scope.TabTitle = ' All Products';

    $scope.onClick = function(tab) {
      $scope.activeTab = tab.url;
      

    };

    $scope.isActive = function(tabUrl) {
    	$scope.TabTitle = $scope.activeTab;
    	if ($scope.TabTitle === 'TopTen') {
      		$scope.TabTitle = 'Top Ten';
      }
      else if ($scope.TabTitle === 'AllProducts'){
      	$scope.TabTitle = 'All Products';
      }
      return tabUrl === $scope.activeTab;
    };



    
   


});