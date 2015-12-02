(function () {
    'use strict';

    angular.module('myApp.homeServices', [])
        .service('asyncService', asyncService);

    asyncService.$inject = ['$http', '$q'];

        function asyncService($http, $q) {
            
            var factory = {
                //properties
                retrievedData: [],
                getHeroText : getHeroText
            };

            function getHeroText() {

                // this is where we'd put some ajax calls

                factory.retrievedData = {
                    HeroHeader: "Hello ngQuick!",
                    HeroText: "This is the ngQuick home page. This text is being pulled from a service, and can be populated by hand coding the property in the controller, dynamically or via services."
                };


            }
            return factory;
        }
})();