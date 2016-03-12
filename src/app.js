"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap","tableSort" ,"sharedServices"])
.config(function ($routeProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/sellers.html"
	}).when("/sellerdetails/:id" , {
		controller: "SellerDetailsController",
		templateUrl: "components/sellerdetails/sellerdetails.html"

	
    });

});
