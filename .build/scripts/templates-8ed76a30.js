angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n<!--	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\"> -->\r\n	<link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\">\r\n	<!--<script src=\"vendor/angular/angular.js\"></script>\r\n	<script src=\"app.js\"></script>-->\r\n	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js\"></script>\r\n  	<script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script>\r\n  	<style src=\"tablesort.css\"></style>\r\n\r\n  	<link rel=\"stylesheet\" href=\"src/vendor/ihover/src/ihover.css\">\r\n  	<link rel=\"stylesheet\" href=\"src/vendor/angular-toastr/dist/angular-toastr.css\">\r\n\r\n</head>\r\n<body>\r\n	<main class=\"container-fluid\">\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n\r\n	<toaster-container></toaster-container>\r\n	\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n	<script src=\"src/vendor/angular-tablesort/js/angular-tablesort.js\"></script>\r\n	<!-- inject:app:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<!-- endinject -->\r\n\r\n</body>\r\n\r\n</html>\r\n");
$templateCache.put("components/product/products.html","<div class=\"container\" style=\"padding: 40px\">\r\n	\r\n		<ul class=\"list-inline\">\r\n			<li  ng-repeat=\"p in products\"> \r\n			 <img class=\"img-responsive img-thumbnail\" src=\"{{p.imagePath}}\" alt=\"{{p.name}}\" style=\"width:150px;height:150px\"> </img>\r\n			 </li>\r\n			 \r\n		<!--{{products}} -->\r\n		</ul>\r\n</div>");
$templateCache.put("components/sellerdetails/sellerdetails.html","\r\n<div>\r\n	<div class=\"container\" style=\"margin-top:100px; padding: 40px\" >\r\n		<div class=\"row\"> \r\n			<div class=\"col-md-2\"> \r\n			 <img class=\"img-responsive img-thumbnail\" src=\"{{seller.imagePath}}\" alt=\"{{seller.name}}\" style=\"width:150px;height:150px\"> </img>\r\n\r\n			</div>\r\n			<div class=\"col-md-6\"> \r\n			  <h2>{{seller.name}} <br />\r\n			  <small>{{seller.category}}</small></h2>\r\n			</div>\r\n\r\n			<div class=\"col-md-3\"> \r\n			  <button type=\"button\" class=\"btn btn-info\">Add Product</button>\r\n			</div>\r\n		</div>\r\n	</div>	\r\n\r\n	<div class=\"container\">\r\n	 \r\n	</div>\r\n\r\n	<div class=\"container\" style=\"padding: 40px\">\r\n	\r\n		<ul class=\"list-inline\">\r\n			<li  ng-repeat=\"p in products\"> \r\n			 <div class=\"ih-item square effect3 bottom_to_top\"><a class=\"disabled\">\r\n			 	<div class=\"img\">\r\n			 		<img  src=\"{{p.imagePath}}\" alt=\"{{p.name}}\"> </img>\r\n				</div>\r\n			\r\n			<div class=\"info\">\r\n          <h3>{{p.name}}</h3>\r\n          <p>verð {{p.price}}</p>\r\n        </div></a></div>\r\n        	 </li> \r\n       </ul> \r\n     </div>\r\n\r\n\r\n\r\n\r\n	<div class=\"container\" style=\"padding: 40px\">\r\n		<h2> This should got to the Top 10 tab</h2>\r\n		<ul class=\"list-inline\">\r\n			<li  ng-repeat=\"p in products | orderBy: \'-quantitySold\' | limitTo:10 \"> \r\n			 <div class=\"ih-item square effect3 bottom_to_top\"><a class=\"disabled\">\r\n			 	<div class=\"img\">\r\n			 		<img  src=\"{{p.imagePath}}\" alt=\"{{p.name}}\"> </img>\r\n				</div>\r\n			\r\n			<div class=\"info\">\r\n          <h3>{{p.name}}</h3>\r\n          <p>verð {{p.price}} Magn {{p.quantitySold}}</p>\r\n        </div></a></div>\r\n        	 </li> \r\n       </ul> \r\n     </div>\r\n	\r\n	\r\n			 \r\n		<!--{{products}} -->\r\n		\r\n\r\n\r\n</div>\r\n");
$templateCache.put("components/sellerdialog/sellerdialog.html","<div class=\"container\">\r\n	<h2>Sellers create dialog</h2>\r\n\r\n	<form name=\"myForm\">\r\n		<input type=\"text\" name=\"sellerName\" ng-model=\"seller.name\" required>Name</input>\r\n		<span style=\"color:red\" ng-show=\"myForm.sellerName.$dirty && myForm.sellerName.$error.required\">Name required ma-focka</span>\r\n		</br>\r\n\r\n		<input type=\"text\" name=\"category\" ng-model=\"seller.category\" required>Category</input>\r\n		<span style=\"color:red\" ng-show=\"myForm.category.$dirty && myForm.category.$error.required\">Category required ma-focka</span>\r\n		</br>\r\n\r\n		<input type=\"text\" name=\"imagePath\" ng-model=\"seller.imagePath\" required>Image Path</input>\r\n		<span style=\"color:red\" ng-show=\"myForm.imagePath.$dirty && myForm.imagePath.$error.required\">Image Path required ma-focka</span>\r\n		</br>\r\n		\r\n		</br>\r\n\r\n		<button ng-click=\"onOk()\" ng-disabled=\"myForm.sellerName.$error.required || myForm.category.$error.required || myForm.imagePath.$error.required\">ok</button>\r\n		<button ng-click=\"onCancel()\">cancel</button>\r\n		<p>{{myForm.sellerName.$error.required}}</p>\r\n		</br>\r\n	</form>\r\n\r\n</div>");
$templateCache.put("components/sellerdialog/selleredit.html","<div class=\"container\">\r\n	<h2>Edit seller</h2>\r\n	<form name=\"myForm2\">\r\n		<input name=\"sellerName\" ng-model=\"seller.name\" required>\r\n		<span style=\"color:red\" ng-show=\"myForm2.sellerName.$dirty && myForm2.sellerName.$error.required\">Name required ma-focka</span>\r\n		</br>\r\n\r\n		<input name=\"category\" ng-model=\"seller.category\" required>\r\n		<span style=\"color:red\" ng-show=\"myForm2.category.$dirty && myForm2.category.$error.required\">category required ma-focka</span>\r\n		</br>\r\n		\r\n		<input name=\"imagePath\" ng-model=\"seller.imagePath\" required>\r\n		<span style=\"color:red\" ng-show=\"myForm2.imagePath.$dirty && myForm2.imagePath.$error.required\">image path required ma-focka</span>\r\n		</br>\r\n\r\n		<button ng-click=\"onSave()\" ng-disabled=\"myForm2.sellerName.$error.required || myForm2.category.$error.required || myForm2.imagePath.$error.required\">Save</button>\r\n		<button ng-click=\"onCancel()\">Cancel</button>\r\n	</form>\r\n</div>");
$templateCache.put("components/sellers/sellers.html","<div class=\"container\">\r\n<h2>Sellers</h2>\r\n	<button ng-click=\"onAddSeller()\">Create Seller</button>\r\n	<table class=\"table table-striped table-bordered table-hover\" ts-wrapper>\r\n		<thead>\r\n			<tr>\r\n				<th ts-criteria=\"name|lowercase\" ts-default>Name</th>\r\n				<th ts-criteria=\"category|lowercase\">Category</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody  data-link=\"row\" class=\"rowlink\">\r\n			<tr ng-repeat=\"s in sellers track by s.name\" ts-repeat>\r\n				<td><a ng-href=\"#/sellerdetails/{{s.id}}\">{{s.id}} {{s.name}}</a>\r\n					<button ng-click=\"onEditSeller(s.id)\">Edit</button></td>\r\n				<td> {{s.category}} </a></td>\r\n			</tr>\r\n		</tbody>\r\n	</table> \r\n</div>\r\n\r\n");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);