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

      $scope.isValid = function () {
        var result;
        var value = document.getElementById('test_vat_inp').value;
        result = JsVatFactory.checkVAT(value);

        result = JSON.stringify(result);

        document.getElementById('check_result').innerText = result;

        return result;
      };

      $scope.checkVat = function (value, resultElemId) {
        var result = JsVatFactory.checkVAT(value);

        document.getElementById(resultElemId).innerText = JSON.stringify(result);

        return result;
      };

      $scope.JsVatFactory = JsVatFactory;

    })
;
