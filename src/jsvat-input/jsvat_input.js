'use strict';

angular.module('angular-jsvat-input', [])

    .directive('jsvat', ['JsVatFactory', function (JsVatFactory) {
      return {
        restrict: 'A',
        scope: {
          jsvatResult: '=?',
          jsvatConfig: '=?'
        },
        require: 'ngModel',
        link: function (scope, element, attrs) {
          function makeObj(name) {
            if (!angular.isObject(scope[name])) {
              var value = scope[name];
              scope[name] = {
                value: value
              }
            }
          }

          makeObj('jsvat');
          makeObj('jsvatConfig');

          // var invalid = '-invalid';
          // var valid = '-valid';

          function setValidity(isValid) {
            //scope.classObj[invalid] = !isValid;
            //scope.classObj[valid] = isValid;
            modelController.$setValidity('vat', isValid);
          }

          var modelController = element.controller('ngModel');

          scope.checkVAT = function (vat) {
            scope.jsvatResult = JsVatFactory.checkVAT(vat);
            // var isEmpty = scope.jsvatResult.value === '' || (!scope.jsvatResult.value && scope.jsvatResult.value !== '0');
            // setValidity(result.isValid || isEmpty);
            setValidity(scope.jsvatResult.isValid);
          };


          console.log(scope.jsvatResult);
          scope.$watch(function(){
            return modelController.$modelValue;
          }, function (val) {
            scope.checkVAT(val);
          });

        }
      }
    }])
;