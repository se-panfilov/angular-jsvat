'use strict';

angular.module('demo', ['angular-jsvat'])

    .controller('DemoPageCtrl', function ($scope) {
      $scope.model = {
        value: 'ro43'
      };

      $scope.$watch('model', function(val, oldVal){
        console.log(val);
      });
    })
;
