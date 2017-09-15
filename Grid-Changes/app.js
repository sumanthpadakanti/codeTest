var App = angular.module('App', []);

App.controller('TodoCtrl', function ($scope, $http, $filter) {
    $http.get('data.json')
        .then(function (res) {

            var headers = ['name'];

            angular.forEach(res.data, function (item) {
                if (headers.indexOf(item.category) === -1)
                    headers.push(item.category);
            });

            var data = {};
            angular.forEach(res.data, function (item) {

                if (!data[item.name])
                    data[item.name] = { name: item.name };

                if (!data[item.name][item.category])
                    data[item.name][item.category] = 0;

                data[item.name][item.category] += item.amount;
            });

            var result = [];
            angular.forEach(data, function (item) {
                result.push(item);
            });

            $scope.gridHeaders = headers;
            $scope.gridData = result;
        });

    $scope.reverse = true;

    $scope.orderBySort = function (propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };
});