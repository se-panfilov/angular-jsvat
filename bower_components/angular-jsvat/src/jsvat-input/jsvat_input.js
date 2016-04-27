'use strict';

angular.module('angular-jsvat-input', [])

    .directive('jsvat', function (JsVatFactory) {
      return {
        restrict: 'A',
        scope: {
          jsvat: '=?'
        },
        require: 'ngModel',
        link: function (scope, element) {
          function makeObj(name) {
            if (!angular.isObject(scope[name])) {
              var value = scope[name];
              scope[name] = {
                value: value
              };
            }
          }

          makeObj('jsvat');

          var invalid = '-jsvat-invalid';
          var valid = '-jsvat-valid';
          var modelController = element.controller('ngModel');

          function setValidity(isValid) {
            if (isValid) {
              element.addClass(valid);
              element.removeClass(invalid);
            } else {
              element.addClass(invalid);
              element.removeClass(valid);
            }

            modelController.$setValidity('vat', isValid);
          }

          scope.checkVAT = function (vat) {
            scope.jsvat = JsVatFactory.checkVAT(vat);
            var isEmpty = scope.jsvat.value === '' || (!scope.jsvat.value && scope.jsvat.value !== '0');
            setValidity(scope.jsvat.isValid || isEmpty);
            //setValidity(scope.jsvat.isValid);
          };

          scope.$watch(function () {
            return modelController.$modelValue;
          }, function (val) {
            scope.checkVAT(val);
          });

        }
      };
    })
;