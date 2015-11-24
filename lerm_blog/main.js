var app = angular.module('myApp', []);

app.controller('BlogLermController', function ($scope){
	$scope.DataPostList = [];

	$scope.savePost = function(){
		$scope.DataPostList.push(
			{"title" : $scope.title,
			"content": $scope.content,
			"auther": "Lerm",
			"postDate": new Date() }
		);

		clearMessage();
	}

	function clearMessage(){
		$scope.title = "";
		$scope.content = "";
	}
}).filter('limitWord',function(){
	return function(input) {
        var msg = input;
		if(msg.length > 5){
			return msg.substr(0,5) + "...";
		}else
		{
			return msg;
		}
    }	
})