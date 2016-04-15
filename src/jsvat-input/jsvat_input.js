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
          var label = angular.element(tElement);
          var input = label[0].children[0];

          //label.removeAttr('ng-model');

          function makeLoverCamelCase(str) {
            var toUpperCase = function(a) { return a.toUpperCase(); };
            var toLowerCase = function(a) { return a.toLowerCase(); };
            var regex = /(?:^|\s)\S/g;

            function makeUpperCase(s) {
              return s.replace(regex, toUpperCase);
            }

            return str.split(/\-/).map(makeUpperCase).join('').replace(regex, toLowerCase);
          }

          function _moveAttrToInput(attr, val, attrNameAfter) {
            if (tAttrs[makeLoverCamelCase(attr)]) {
              label.removeAttr(attr);
              input.setAttribute(attrNameAfter || attr, val);
            }
          }

          _moveAttrToInput('jsvat-input-class', 'jsvatInputClassObj', 'ng-class');
          _moveAttrToInput('ng-required', 'opts.isRequired');
          _moveAttrToInput('ng-disabled', 'opts.isDisabled');
          _moveAttrToInput('ng-readonly', 'opts.isReadonly');
          _moveAttrToInput('ng-maxlength', 'opts.maxlength');
          _moveAttrToInput('ng-minlength', 'opts.minlength');
          _moveAttrToInput('ng-pattern', 'opts.pattern');
          _moveAttrToInput('ng-size', 'opts.size');

          return {
            post: function (scope, elem) {
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