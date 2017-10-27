(function (angular) {
  'use strict';
  var app = angular.module('form-example1', []);


  app.directive('username', function ($q, $timeout) {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        var usernames = ['Vasya', 'Petya', 'Tanya', 'Masha'];

        ctrl.$asyncValidators.username = function (modelValue, viewValue) {

          if (ctrl.$isEmpty(modelValue)) {
            return $q.resolve();
          }

          var def = $q.defer();

          $timeout(function () {
            if (usernames.indexOf(modelValue) === -1) {
              def.resolve();
            } else {
              def.reject();
            }

          }, 500);

          return def.promise;
        };
      }
    };
  });
})(window.angular);
