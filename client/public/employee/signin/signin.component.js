angular
  .module('employeeSigninModule')
  .component('employeeSigninComponent', {
    controller: function($scope, $http, $rootScope) {
        $rootScope.userAuth = false;
    $scope.authorizedUser = function() {
        $rootScope.userAuth = true;
      };
     
      $scope.nonAuthorizedUser = function() {
        $rootScope.userAuth = false;
      };
      
    },
    templateUrl: '/employee/signin/signin.html'
  });