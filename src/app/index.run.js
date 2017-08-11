(function() {
  'use strict';

  angular
    .module('workbanchSoketClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
