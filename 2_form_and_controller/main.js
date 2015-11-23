var myApp = angular.module('myApp',[]);

myApp.controller('FormController', function($scope){
	$scope.formData = { 
		name: "Chalermpone",
		email: "chalermpone.r@gmail.com"
	}

	$scope.register = function(){
		alert("register " + $scope.formData.name);
	}
})
