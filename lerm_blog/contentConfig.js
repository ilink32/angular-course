angular.module('content', [ 'ui.router'])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('app.content', {
      url: '/content',
      views: {
        'content@': { templateUrl: 'content.html' }
        
      }
    });
  }
]);
