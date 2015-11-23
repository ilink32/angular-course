var app = angular.module('myApp', []);

app.controller('BookController' , function($timeout,$scope) {
	$scope.books = ['HTML5','CSS','Responsive Web Design'];
	$scope.name="Scope for BookController";

  $scope.addToWishList=function(book) {
      
      // setTimeout(function(){
           
      //   $scope.$apply(function(){
      //     $scope.wishListCount++; 
      //   })
      // },10);   


      $timeout(function() {
        $scope.wishListCount++; 
      }, 1000);   

  };

  $scope.wishListCount = 0;
  var w = $scope.$watch('wishListCount',function(newValue,oldValue){
      console.log('called '+newValue+' times');
      if(newValue==2){
				alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
        w();//Stop Watcher
			}
		});
});
