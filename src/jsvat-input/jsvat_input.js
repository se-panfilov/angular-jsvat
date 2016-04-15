'use strict';

angular.module('angular-jsvat')

    .directive('jsvatInput', function ($compile) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'jsvat_input.html',
        scope: {
          ngModel: '='
        },
        compile: function (tElement, tAttrs) {
          var $elem = angular.element(tElement);

          $elem.removeAttr('jsvat-model');

          console.log($elem.find('jsvat-input__field'));
          if (tAttrs['jsvatInputClass']) {
            console.log(123);
            $elem.removeAttr('jsvat-input-class');
            $elem.find('.jsvat-input__field').attr('ng-class', 'jsvatInputClassObj');
            //$elem[0].children[0].setAttribute('ng-class', 'jsvatInputClassObj');
          }
          return {
            post: function (scope, elem, attrs) {
              $compile(elem)(scope);
            }
          };
        },
        link: function (scope, element, attrs) {
          //TODO (S.Panfilov)
          console.log(attrs);

          scope.opts = scope.opts || {};

          scope.jsvatInputClassObj = {};
          scope.jsvatLabelClassObj = {};

          if (!angular.isObject(scope.ngModel)) {
            var value = scope.ngModel;
            scope.ngModel = {
              value: value
            }
          }

        }
      }
    })
;