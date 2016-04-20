'use strict';

angular.module('demo', ['angular-jsvat'])

    .controller('DemoPageCtrl', function ($scope) {

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

    })
;
