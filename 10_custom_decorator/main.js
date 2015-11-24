
angular.module('myApp', []);

angular.module('myApp').config(function($provide) {
  $provide.decorator('$log', function($delegate) { //$delegate is the original $log service.

    var oldFn = $delegate.info;
    $delegate.info = function(message) {
      oldFn('Data to post: ' + message);
      console.log('Sending data to server ....');
    }

    return $delegate; //this is the modified $log service
  });
});

angular.module('myApp').controller('TestController', function($scope, $log, helloService1) {
  $scope.clickMe = function() {
    $log.info("someone has click me");
  }
  helloService1.sayHello('Chalermpone');

});

angular.module('myApp').service('helloService1',function($timeout){
  this.sayHello = function(name){
      console.log('Hello '+name + ', from service');
  }
});