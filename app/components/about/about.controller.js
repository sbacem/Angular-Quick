(function () {
    'use strict';

    angular.module('myApp')
        .controller('aboutController', aboutController);

    aboutController.$inject = ["$translate", "$filter", "$scope", "$http", "$window", "$q", "asyncService"];

    function aboutController($translate, $filter, $scope, $http, $window, $q, asyncService) {

        var vm = this;
        vm.Text = $filter('translate')('ANGULAR_TRANSLAT_TEXT');
        return vm;
    }
})();