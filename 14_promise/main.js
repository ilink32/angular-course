var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('PromiseController', function ($timeout, $scope, $q) {
	$scope.value = "Hello world"

  var kfcOfficer = $q.defer();

  console.log("Prepare...........");

  var order = setTimeout(function(){
    kfcOfficer.resolve("chicken done!!!!");
  },5000);

  var checkenLover = kfcOfficer.promise;

  checkenLover.then(function(data){
    console.log("eat them all : " + data);
  }, function(data){
    if(data === "order change")
      return "changed";
    else
      throw "error";
  }).then(function(data){
    console.log("eat them all : " + data);
  }, function(){
    console.log("I'm dead");
  });

  checkenLover.then(function(data){
    console.log("eat them all : " + data);
  })


  $scope.stop = function(){
    clearTimeout(order);
    kfcOfficer.reject("order canceled");
  }
  $scope.outOfChicken = function(){
    clearTimeout(order);
    kfcOfficer.reject("order canceled");
  }
  $scope.changeOrder = function(){
    clearTimeout(order);
    kfcOfficer.reject("order change");
  }
	// $timeout(function() {
	// 	$scope.value = "Hello AngularJS!";
	// 	$timeout(function() {
	// 		$scope.value = "Hello EmberJS!";
	// 		$timeout(function() {
	// 			$scope.value = "Hello KnockoutJS!";
	// 		}, 3000);
	// 	}, 3000);
	// }, 3000);
});

angular.module('myApp').controller('ModalController', function($scope, $uibModal) {
	$scope.open = function() {
		var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 500,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
	}
});

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.ok = function () {
    $uibModalInstance.close('ok');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
