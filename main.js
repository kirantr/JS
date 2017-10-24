
angular.module('docsTransclusionDirective', [])
    .controller('Controller', ['$scope', function ($scope) {
        $scope.name = 'Tobias';
    }])
    .directive('myDialog', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                param: '=myParam'
        },
            templateUrl: '111.html'
        };
    });

    controller: ['$scope', function MyTabsController($scope) {
        
    }]