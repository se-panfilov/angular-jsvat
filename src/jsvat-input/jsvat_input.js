'use strict';

angular.module('angular-jsvat')

    .directive('jsvatInput', function () {
      return {
        restrict: 'E',
        //replace: true,
        templateUrl: 'jsvat_input.html',
        scope: {
          //ngModel: '='
        },
        link: function (scope, element, attrs) {
          //TODO (S.Panfilov)
          console.log(attrs);

          scope.opts = scope.opts || {};

          scope.jsvatInputClassObj = {};
          scope.jsvatLabelClassObj = {};
          
          //name
          //value
          //disabled
          //maxlength
          //pattern
          //readonly
          //required
          //size
        }
      }
    })
;