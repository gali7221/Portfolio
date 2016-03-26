var projectControllers = angular.module('projectControllers', []);

projectControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.projects = data;
    $scope.stacks = data.stack;
    $scope.courses = data.course;
    $scope.artistOrder = 'name';

    console.log(projects.stack);
  });
}]);

projectControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.projects = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.projects.length-1;
    }

    if ($routeParams.itemId < $scope.projects.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }
  });
}]);

projectControllers.filter('startFrom', function(){
  return function(input, start){
    if(input){
      start =+ start;
      return input.slice(start); // parse to int
    }
    return [];
  };
});

projectControllers.controller('StacksController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/stacks.json').success(function(data) {
    $scope.thankst = data;
  });
  
  // $scope.message = "hello";
}]);

