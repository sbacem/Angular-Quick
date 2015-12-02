(function () {
    'use strict';

    angular.module('myApp')
        .controller('formController', formController);

    formController.$inject = ["$translate", "$filter", "$scope", "$http", "$window", "$q", "asyncService"];

    function formController($translate, $filter, $scope, $http, $window, $q, asyncService) {
   var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;
    vm.model = {};
    vm.options = {};
    
      vm.fields = [
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email'
          }
        },
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Password',
            placeholder: 'Password'
          }
        },
        {
          key: 'file',
          type: 'file',
          templateOptions: {
            label: 'File input',
            description: 'Example block-level help text here',
            url: 'https://example.com/upload'
          }
        },
        {
          key: 'checked',
          type: 'checkbox',
          templateOptions: {
            label: 'Check me out'
          }
        }
      ];
    vm.originalFields = angular.copy(vm.fields);
    
    // function definition
    function onSubmit() {
      vm.options.updateInitialValue();
      alert(JSON.stringify(vm.model), null, 2);
    }
    }
})();