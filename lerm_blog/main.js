var app = angular.module('myApp', []);

app.controller('BlogLermController', function ($scope){
	$scope.DataPostList = [];

	console.log($scope.DataPostList.length);

	$scope.savePost = function(title,content){
		$scope.DataPostList.push(
			{"title" : title,
			"content": content,
			"auther": "Lerm",
			"postDate": new Date() }
		)
	}
})