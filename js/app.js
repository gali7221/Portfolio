var myApp = angular.module('myApp', [
  'ngRoute',
  'projectControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/projects', {
    templateUrl: 'partials/projects.html',
    controller: 'ListController'
  }).
  when('/projects2', {
    templateUrl: 'partials/projects-cont.html', 
    controller: 'ListController'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: ''
  }).
  when('/thankyou',{
    templateUrl: 'partials/thankyou.html', 
    controller: ''
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/about'
  });
}]);