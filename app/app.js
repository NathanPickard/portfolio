angular.module('Portfolio', ['ngMaterial', 'navItems', 'ui.router'])
  .config(function ($mdIconProvider, $mdThemingProvider, $stateProvider) {

    $mdIconProvider.icon('home', './svg/002-home2.svg', 24);
    $mdIconProvider.icon('portfolio', './svg/048-folder.svg', 24);
    $mdIconProvider.icon('about', './svg/047-stack.svg', 24);
    $mdIconProvider.icon('contact', './svg/006-pencil.svg', 24);
    $mdIconProvider.icon('menu', './svg/190-menu.svg', 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('cyan');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'components/home.html',
          controller: 'homeCtrl as vm'
        })
        .state('portfolio', {
          url: '/portfolio',
          templateUrl: 'components/portfolio.html',
          controller: 'portfolioCtrl as vm'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'components/about.html',
          controller: 'aboutCtrl as vm'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'components/contact.html',
          controller: 'contactCtrl as vm'
        });
  });