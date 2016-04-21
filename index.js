'use strict';

angular.module('demo', ['angular-jsvat'])

    .controller('DemoPageCtrl', function ($scope, JsVatFactory) {

      $scope.models = {
        common: null,
        commonLbl: null,
        linked: null,
        required: null,
        ngRequired: null,
        allAtrs: null,
        predefinedStr: 'CY00001067Y',
        predefinedEmptyStr: 'CY00001067Y',
        predefinedObj: {value: 'EE100183238'},
        predefinedEmptyObj: {value: ''},
        predefinedNumberObj: 123
      };

      $scope.globalConfig = function (name) {
        JsVatFactory.config = {};
        JsVatFactory.config[name] = true;
      };

      $scope.getConfig = function () {
        return JSON.stringify(JsVatFactory.config);
      };

      $scope.JsVatFactory = JsVatFactory;

    })
;
