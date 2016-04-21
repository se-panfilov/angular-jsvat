'use strict';

angular.module('angular-jsvat-input', [])

    .directive('jsvatInput', ['$compile', 'JsVatFactory', function (JsVatFactory) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'jsvat_input.html',
        scope: {
          jsvatModel: '='
        },
        link: function (scope, element) {
          var invalid = '-invalid';
          var valid = '-valid';

          scope.classObj = {};

          if (!angular.isObject(scope.jsvatModel)) {
            var value = scope.jsvatModel;
            scope.jsvatModel = {
              value: value
            }
          }

          function setValidity(isValid) {
            scope.classObj[invalid] = !isValid;
            scope.classObj[valid] = isValid;
            modelController.$setValidity('vat', isValid);
          }

          var modelController = element.controller('ngModel');

          scope.checkVAT = function () {
            var result = JsVatFactory.checkVAT(scope.jsvatModel.value, true);
            scope.jsvatModel.isValid = result.isValid;
            scope.jsvatModel.countries = result.countries;
            var isEmpty = scope.jsvatModel.value === '' || (!scope.jsvatModel.value && scope.jsvatModel.value !== '0');
            setValidity(result.isValid || isEmpty);
          };

          scope.$watch('jsvatModel.value', function () {
            scope.checkVAT();
          });


          if (scope.jsvatModel) {
            scope.checkVAT();
          }

        }
      }
    }])
;