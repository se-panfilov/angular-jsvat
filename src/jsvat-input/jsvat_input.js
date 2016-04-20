'use strict';

angular.module('angular-jsvat-input', [])

    .directive('jsvatInput', ['$compile', 'JsVatFactory', function ($compile, JsVatFactory) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'jsvat_input.html',
        scope: {
          jsvatModel: '=',
          jsvatLbl: '?='
        },
        compile: function (tElement, tAttrs) {
          var label = angular.element(tElement);
          var input = label[0].children[0];

          //label.removeAttr('ng-model');

          function makeLoverCamelCase(str) {
            var toUpperCase = function (a) {
              return a.toUpperCase();
            };
            var toLowerCase = function (a) {
              return a.toLowerCase();
            };
            var regex = /(?:^|\s)\S/g;

            function makeUpperCase(s) {
              return s.replace(regex, toUpperCase);
            }

            return str.split(/\-/).map(makeUpperCase).join('').replace(regex, toLowerCase);
          }

          function _moveAttrToInput(attr, val, attrNameAfter) {
            if (tAttrs.hasOwnProperty(makeLoverCamelCase(attr))) {
              //label.removeAttr(attr);
              input.setAttribute(attrNameAfter || attr, val || tAttrs[makeLoverCamelCase(attr)]);
            }
          }

          var attrList = [
            'name',
            'required',
            'ng-required',
            'disabled',
            'ng-disabled',
            'readonly',
            'ng-readonly',
            'minlength',
            'ng-minlength',
            'maxlength',
            'ng-maxlength',
            'size',
            'ng-size'
          ];

          for (var i = 0; i < attrList.length; i++) {
            _moveAttrToInput(attrList[i]);
          }

          _moveAttrToInput('jsvat-input-class', 'jsvatInputClassObj', 'ng-class');

          return {
            post: function (scope, elem) {
              $compile(elem)(scope);
            }
          };
        },
        link: function (scope, element) {
          var invalid = '-invalid';
          var valid = '-valid';

          scope.jsvatInputClassObj = {};
          scope.jsvatLabelClassObj = {};

          if (!angular.isObject(scope.jsvatModel)) {
            var value = scope.jsvatModel;
            scope.jsvatModel = {
              value: value
            }
          }

          function setValidity(isValid) {
            scope.jsvatInputClassObj[invalid] = !isValid;
            scope.jsvatLabelClassObj[invalid] = !isValid;
            scope.jsvatInputClassObj[valid] = isValid;
            scope.jsvatLabelClassObj[valid] = isValid;
            modelController.$setValidity('vat', isValid);
          }

          var modelController = element.find('input').controller('ngModel');

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