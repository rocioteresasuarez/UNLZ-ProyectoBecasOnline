(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    
    function LoginController() {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();