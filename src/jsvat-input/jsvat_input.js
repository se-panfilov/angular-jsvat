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
        link: function (scope) {
          //TODO (S.Panfilov)
        }
      }
    })
;