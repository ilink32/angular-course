
var app = angular.module('myApp', []);

angular.module('myApp').controller('TestController', function(helloService1,Blog,greet, $scope){
  // $scope.blog = new Blog(1);
  // $scope.blog.loadContent();

  $scope.blog = new Blog(2);
  $scope.blog.loadContent();
});

// ================= service =================
angular.module('myApp').service('helloService1',function($timeout){
  this.sayHello = function(name){
    $timeout(function(){
      alert('Hello '+name + ', from service');
		},2000);
	}
});

// ================= factory =================
angular.module('myApp').factory('Blog',function(){
  return function Blog(id){
    this.loadContent = function(){
      console.log(id)
    }
  }
});

// ================= provider =================
angular.module('myApp').provider('greet', function() {
  this.greeting = 'Hello';

	this.$get = function() {
    var greeting = this.greeting;
    return function(name) {
      alert(greeting + ', ' + name);
    }
	}

	this.setGreeting = function(greeting) { //setter for greeting text
    this.greeting = greeting;
	}
});

angular.module('myApp').config(function(greetProvider) {
  greetProvider.setGreeting('Hola');
});

// ================= value =================
angular.module('myApp').value('appVersion','1.0');

// ================= constant =================
angular.module('myApp').constant('API_TOKEN','XXXXX');
