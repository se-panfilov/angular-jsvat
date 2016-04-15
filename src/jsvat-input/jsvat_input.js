'use strict';

angular.module('angular-jsvat')

    .directive('jsvatInput', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'jsvat_input.html',
        scope: {
          ngModel: '='
        },
        compile: function (tElement) {

          var $elem = angular.element(tElement);

          console.log($elem.parents);
          // var formName = $elem.parents('[ng-form]').length ? $elem.parents('[ng-form]').attr('ng-form') : $elem.parents('form').attr('name');
          $elem.attr('ng-class', 'jsvatLabelClassObj');

          $elem.find('jsvat-input__field').attr('ng-class', 'jsvatInputClassObj');
          $elem[0].children[0].setAttribute('ng-class', 'jsvatInputClassObj');
          //$elem.removeAttr('bs-form-class');

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