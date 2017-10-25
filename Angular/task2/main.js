
var app = angular.module("app", [])
app.controller('SettingsController1', SettingsController1)
function SettingsController1($scope, listFn)
{
    this.name = 'John Smith';
    $scope.name = 'John';
    $scope.test = {name: 'John', last: 'Smith'};
    $scope.list = ['Smith1', 'Smith2', 'Smith3', 'Smith4', 'Smith5'];

    var self = this
    self.names = []
    self.addName = function(name){
        self.names.push(name)
    }
}
app.directive('myDialog', function()
{
    return
	{
      restrict: 'E',
      transclude: true,
      scope: 
	  {
          customerInfo: '=info'
      },
      controller: function ($scope)
	  {
        $scope.customerInfo.name = 'func'
      },
      templateUrl: 'tmp.html',
    };
    
});

app.directive('myInput', function()
{
    return
	{
        scope: 
		{
            customerName: '=info'
        },
        controller:function($scope)
		{
        },
        templateUrl: 'input.html',
    };
});

app.factory('listFn', function()
{
    return ''
})


