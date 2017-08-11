/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('workbanchSoketClient')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .factory('chatSocket', function (socketFactory) {
      return socketFactory({
        prefix: 'chat-',
        ioSocket: io.connect('http://localhost:3200/')
      });
    });

})();
