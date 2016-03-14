"use strict";

/* þetta virkar bitch
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

*/

describe("SellersController", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	// 1....FAKE database
	// 2....	
	var controller, scope;
	var mockAppResource;
	
	beforeEach(module("project3App"));  
	//3.... get controller

 	//BÚUM TIL INSTACNE AF HONUM
 	beforeEach(inject(function($controller, $rootScope, AppResource) {
 		scope  = $rootScope.$new();
 		//stateParams = $stateParams;
 		//if (this.mockStateParams !== undefined) {
 		//	stateParams = this.mockStateParams;
 		//}
 		mockAppResource = {
			getSellers: function() {
			return AppResource.getSellers();
			}
		};

 		spyOn(mockAppResource, 'getSellers').and.callThrough();

		// homectrl þarf aðgang að frá fyrri scope
 		controller = $controller("SellersController", {
 			$scope : scope,
 			//$stateParams : stateParams,
 			//$location: this.mockLockation,
 			AppResource: mockAppResource  
 			// látum hann fá feik shit
 		});
 		// now ctrl variable is assecible to all tests 
 	}));

 	it ('should use our fake object', function() {
 		expect(mockAppResource.getSellers).toHaveBeenCalled();
 	});

 	/*it("should request a list og Sellers",
 		function() {
 			//arrange
 			var Sellers = ["Pabbi", "Mamma", "Ragna"];
 			scope.Sellers = Sellers;
 			//act
 			controller.getSellers();
 			expect.(fakeData.getSellers).to.equal(Sellers);
 		})*/



});