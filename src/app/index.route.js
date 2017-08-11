(function() {
  'use strict';

  angular
    .module('workbanchSoketClient')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('auth', {
        url: '/',
        templateUrl: 'app/components/auth/auth.html',
        controller: 'AuthController',
        controllerAs: 'auth'
      })
      .state('main', {
        url: '/chat',
        templateUrl: 'app/components/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('chat', {
        url: '/:id',
        parent: 'main',
        templateUrl: 'app/components/main/chat/chat.html',
        controller: 'ChatController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
