

[![Codacy Badge](https://api.codacy.com/project/badge/grade/6e444e53a23c4b32aeaff09864446989)](https://www.codacy.com/app/se-panfilov/angular-jsvat)
[![bitHound Overall Score](https://www.bithound.io/github/se-panfilov/jsvat/badges/score.svg)](https://www.bithound.io/github/se-panfilov/angular-jsvat) [![bitHound Code](https://www.bithound.io/github/se-panfilov/jsvat/badges/code.svg)](https://www.bithound.io/github/se-panfilov/angular-jsvat)
[![Code Climate](https://codeclimate.com/github/se-panfilov/angular-jsvat/badges/gpa.svg)](https://codeclimate.com/github/se-panfilov/angular-jsvat)
[![Bower version](https://badge.fury.io/bo/angular-jsvat.svg)](http://badge.fury.io/bo/angular-jsvat)
[![npm version](https://badge.fury.io/js/angular-jsvat.svg)](http://badge.fury.io/js/angular-jsvat)
[![devDependency Status](https://david-dm.org/se-panfilov/angular-jsvat/dev-status.svg)](https://david-dm.org/se-panfilov/angular-jsvat#info=devDependencies)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/se-panfilov/angular-jsvat/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/angular-jsvat.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/angular-jsvat/)

angular-jsvat
-------
[Demo and Examples][2]

Check the validity of the format of an EU VAT number. No dependencies.(except angularjs of course).

What is it?
--------

Angular-js wrapper for [jsvat][2] (jsvat it's a core-logic for vat validation)

angular-jsvat is a small library to check validity of European (and few non-eu) VAT number. ([learn more][1] about VAT)
jsvat use 2-step check (see below) and didn't make any request for external resources.

Each country has own regexp for VAT number and different math-logic of number calculating.

For more details check [jsvat][2] repo.

What angular-jsvat do?
--------

1. Provide `JsVatFactory` fcatory (just an angularjs wrapper for [jsvat][2])

Just check is VAT number valid or not and which country this VAT is:

  ```
  JsVatFactory.checkVAT('BG131134023'); // {isValid: true, country: 'bulgaria', value: 'BG131134023'}
  JsVatFactory.checkVAT('BG0433170001'); //{isValid: false, country: null, value: 'BG0433170001'}
  JsVatFactory.checkVAT('atu5-150-7409');  //{isValid: true, country: 'austria', value: 'ATU51507409'}
  JsVatFactory.checkVAT('aTU 5 804 4146');  //{isValid: true, country: 'austria', value: 'ATU58044146'}
  ```

You can specify list of allowed countries

  ```
  JsVatFactory.config = ['austria', 'belgium']; //All countries except 'austria' and 'belgium' would return false
  JsVatFactory.checkVAT('BG131134023'); //valid VAT, but result would be 'false'
  ```
  
To reset config just do `JsVatFactory.config = [];`

 2. Provide `jsvat` directive (for inputs).
    Directive take a ngModel and return the result to the result object
 
 ```
 <input jsvat="result" type="text" ng-model="model">
 ```

Installation
----------

1. Bower

  `bower i angular-jsvat --save`

2. NPM (node.js)

  `npm i angular-jsvat --save`

3. Directly download one of the latest releases:

  [https://github.com/se-panfilov/angular-jsvat/releases][4]

After that, just include `angular-jsvat` as a dependency

```
angular.module('app', ['angular-jsvat'])
```

(no dependencies required, angular-jsvat is standalone app)

How does jsvat check the validity?
---------

It use [jsvat][2] core functionality:

There is 2-step check:

1. Compare with list of Regexps;

  For example regexp for austria is `/^(AT)U(\d{8})$/`.

 Looks like `ATU99999999` is valid (it's successfied the regexp), but actually it's should be invalid.

2. Some magic mathematical counting;

 Here we make some mathematical calculation (different for each country).
 After that we may be sure that `ATU99999999`and for example `ATV66889218` isn't valid, but `ATU12011204` is valid.

List of supported Countries:
---------

 - Austria
 - Belgium
 - Bulgaria
 - Switzerland
 - Cyprus
 - Czech Republic
 - Germany
 - Denmark
 - Greece
 - Spain
 - Europe
 - Finland
 - France
 - United Kingdom
 - Croatia
 - Hungary
 - Ireland
 - Italy
 - Latvia
 - Lithunia
 - Luxembourg
 - Malta
 - Netherlands
 - Norway
 - Poland
 - Portugal
 - Romania
 - Russia Federation
 - Serbia
 - Slovenia
 - Slovakia republic
 - Sweden

Browsers Supports
---------

Support all browsers down to IE9 (including IE9).

LICENSE
-------

MIT: [https://github.com/se-panfilov/jsvat/blob/master/LICENSE][3]

[1]: https://en.wikipedia.org/wiki/VAT_identification_number
[2]: https://se-panfilov.github.io/angular-jsvat
[3]: https://github.com/se-panfilov/angular-jsvat/blob/master/LICENSE
[4]: https://github.com/se-panfilov/angular-jsvat/releases
[5]: https://github.com/se-panfilov/jsvat
