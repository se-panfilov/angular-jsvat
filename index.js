'use strict';

angular.module('demo', ['angular-jsvat'])

    .controller('DemoPageCtrl', function ($scope) {
      console.log(123);
      $scope.model = {};
    })
;
