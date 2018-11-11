angular
  .module('employeeSigninModule')
  .component('employeeSigninComponent', {
    controller: function($scope, $http, $rootScope, $state, $http, $cookies) {
        $rootScope.userAuth = false;
    $scope.authorizedUser = function(email, password) {
        $rootScope.userAuth = true;

      };
     
      $scope.nonAuthorizedUser = function() {
        $rootScope.userAuth = false;
      };
    },
    templateUrl: '/employee/signin/signin.html'
  });