'use strict';

angular.module('angular-jsvat')

    .directive('jsvatInput', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'jsvat_input.html',
        scope: {
          //ngModel: '='
        },
        link: function (scope, attr) {
          //TODO (S.Panfilov)
          console.log(attr);

          scope.opts = scope.opts || {};
          
          
        }
      }
    })
;