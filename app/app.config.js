/**
 * Load modules for application
 */

var myApp = angular.module('myApp', [
        'ngRoute',
        'ui.router',
        'myApp.homeServices',
        'pascalprecht.translate',
        'formly',
        'formlyBootstrap'
    ]);
myApp.config(['$translateProvider', function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
      prefix: 'resources/locale-',
      suffix: '.json'
    });  
    $translateProvider.preferredLanguage('en_US');
   
}]);

myApp.constant('CONFIG', {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: 'http://localhost:12017'
}); 