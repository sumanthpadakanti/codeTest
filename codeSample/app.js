var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
    $http.get('data.json')
        .then(function(res){
            $scope.details = res.data;
        });
    $scope.reverse = true;
    $scope.orderBySort = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };
});