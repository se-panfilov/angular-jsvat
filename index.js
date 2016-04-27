'use strict';

angular.module('demo', ['angular-jsvat'])

    .controller('DemoPageCtrl', function ($scope, JsVatFactory) {

      $scope.result = {};

      $scope.$watch('result.common', function (val) {
        console.log(val);
      }, true);

      $scope.models = {
        predefinedStr: 'CY00001067Y',
        predefinedEmptyStr: '',
        predefinedNull: '',
        predefinedObj: {value: 'EE100183238'},
        predefinedEmptyObj: {},
        predefinedNumber: 123
      };

      $scope.globalConfig = function (name) {
        JsVatFactory.config = [];
        JsVatFactory.config.push(name);
      };

      $scope.getConfig = function () {
        return JSON.stringify(JsVatFactory.config);
      };

      $scope.JsVatFactory = JsVatFactory;

    })
;
