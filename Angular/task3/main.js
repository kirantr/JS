
var app = angular.module("app", ['ui.router'])
app.controller('SettingsController1', SettingsController1)

angular.module('app')
.component('leftSide', {
    bindings: {items: '='},
    controller: leftSideController,
    templateUrl: 'leftSide.html'
});

angular.module('app')
.directive('myInput', {
    controller: function($scope){
        $scope.addName = function(name){
            $scope.items.push(name)
        }
    },
    templateUrl: 'input.html'
})

function leftSideController($scope){
    $scope.list
}


