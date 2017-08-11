(function() {
  'use strict';

  angular
    .module('workbanchSoketClient')
    .directive('userlist', userlistDirective);

  /** @ngInject */
  function userlistDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/main/userlist/userlist.html',
      scope: true,
      controller: UserListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function UserListController($cookies, $state, authService, chatSocket) {

      var vm = this;

      vm.username;

      vm.userList = [];

      vm.socketId;

      function activate() {
        vm.username = authService.getUserName();
        vm.socketInit();
      }

      vm.logout = function () {
        authService.logout();
        $state.go('auth');
        chatSocket.emit('logout');
      }

      vm.socketInit = function () {

        chatSocket.emit('recognize',authService.getUserId());

        chatSocket.on('userList', function (userList){
          vm.userList = userList;
        });

      }

      vm.openChat = function(id){
          $state.go('chat',{"id": id});
      }

      activate();
    }
  }

})();
