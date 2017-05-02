angular.module('Portfolio', ['ngMaterial', 'navItems'])
  .config(function ($mdIconProvider, $mdThemingProvider) {

    $mdIconProvider.icon('home', './svg/002-home2.svg', 24);
    $mdIconProvider.icon('portfolio', './svg/048-folder.svg', 24);
    $mdIconProvider.icon('about', './svg/047-stack.svg', 24);
    $mdIconProvider.icon('contact', './svg/006-pencil.svg', 24);
    $mdIconProvider.icon('menu', './svg/190-menu.svg', 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('green');
  });