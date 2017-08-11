(function() {
  'use strict';

  angular
    .module('workbanchSoketClient')
    .controller('ChatController', ChatController);

  /** @ngInject */
  function ChatController(authService,chatSocket, $state) {

    var vm = this;

    vm.selectedUser = $state.params.id;
    vm.messages = [];
    vm.room = $state.params.id;
    vm.msg = null;

    function activate() {
      vm.userName = authService.getUserName();
      vm.socketInit();
    }

    vm.socketInit = function () {

      chatSocket.on('sendMsg', function(data){
        console.log(data);
        vm.messages.push(data);
      });

    }

    vm.sendMsg = function() {
      vm.messages.push({message: vm.msg, fromId: authService.getUserId()});

        chatSocket.emit('getMsg',{
          toId : vm.selectedUser,
          message : vm.msg,
          fromId : authService.getUserId()
        });
        vm.msg = null;
    };

    activate();
  }
})();
