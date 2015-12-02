(function () {
    'use strict';

    angular.module('myApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$translate", "$filter", "$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($translate, $filter, $scope, $http, $window, $q, asyncService) {

            var vm = this;

            //services
            vm.angularstrapService = asyncService;

            asyncService.getHeroText();

            // from async service
            $scope.translatedText =  $filter('translate')('HEADLINE_TEXT'); 
            vm.HeroHeader = asyncService.retrievedData.HeroHeader;
            vm.HeroText = asyncService.retrievedData.HeroText;

            // subsections
            vm.col0heading = "Subsections";
            vm.col0text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

            return vm;
       }
})();