[![devDependency Status](https://david-dm.org/se-panfilov/angular-jsvat/dev-status.svg)](https://david-dm.org/se-panfilov/angular-jsvat#info=devDependencies)

angular-jsvat
-------
[Demo and Examples][2]

Check the validity of the format of an EU VAT number. No dependencies (except angularjs of course).


What is it?
--------

Angular-js wrapper for [jsvat][1]

jsvat is a small library to check validity of European (and few non-eu) VAT number. ([learn more][1] about VAT)
jsvat use 2-step check (see below) and didn't make any request for external resources.

Each country has own regexp for VAT number and different math-logic of number calculating.

Installation
----------

1. Bower

  `bower i angular-jsvat --save`

2. NPM (node.js)

  `npm i angular-jsvat --save`

3. Directly download one of the latest releases:

  [https://github.com/se-panfilov/angular-jsvat/releases][4]

How does jsvat check the validity?
---------

There is 2-step check:

1. Compare with list of Regexps;

  For example regexp for austria is `/^(AT)U(\d{8})$/`.

 Looks like `ATU99999999` is valid (it's successfied the regexp), but actually it's should be invalid.

2. Some magic mathematical counting;

 Here we make some mathematical calculation (different for each country).
 After that we may be sure that `ATU99999999`and for example `ATV66889218` isn't valid, but `ATU12011204` is valid.

Source of inspiration:
---------

Based on this great work: http://www.braemoor.co.uk/software/vat.shtml

At the moment the code was in public access without any license information.

I'm totally rewrite all the code.


Browsers Supports
---------

...
(unknown yet, but modern browsers should support it as well)

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


LICENSE
-------

MIT: [https://github.com/se-panfilov/jsvat/blob/master/LICENSE][3]

[1]: https://en.wikipedia.org/wiki/VAT_identification_number
[2]: https://se-panfilov.github.io/angular-jsvat
[3]: https://github.com/se-panfilov/angular-jsvat/blob/master/LICENSE
[4]: https://github.com/se-panfilov/angular-jsvat/releases
[5]: https://github.com/se-panfilov/jsvat