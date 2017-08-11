(function() {
  'use strict';
  angular
    .module('workbanchSoketClient')
    .config(config)
    .config([ '$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push(authInterceptor);
    }]);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

  function authInterceptor($cookies) {
    return {
      request : function (config) {
        config.headers.token = $cookies.get('token');
        return config;
      }
    }
  }

})();
