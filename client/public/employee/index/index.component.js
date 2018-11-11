angular
  .module('employeeIndexModule')
  .component('employeeIndexComponent', {
    controller: function($scope, $http, $state, $cookies, $rootScope) {
      console.log('root scope ', $rootScope);
      if (!$rootScope.userAuth) {
        $state.go('signin');
      }
    },
    templateUrl: '/employee/index/index.html'
  });