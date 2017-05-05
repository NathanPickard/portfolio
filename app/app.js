(function () {

  angular.module('Portfolio', [
    'Portfolio.controllers',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ui.router'])

    .config(function ($mdIconProvider, $mdThemingProvider) {

      $mdIconProvider.icon('home', './svg/002-home2.svg', 24);
      $mdIconProvider.icon('portfolio', './svg/048-folder.svg', 24);
      $mdIconProvider.icon('about', './svg/047-stack.svg', 24);
      $mdIconProvider.icon('contact', './svg/006-pencil.svg', 24);
      $mdIconProvider.icon('menu', './svg/190-menu.svg', 24);

      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('cyan');

    })

    .config(['$stateProvider', '$urlRouterProvider', '$logProvider',
      function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
          .state('home', {
            url: '/',

            views: {
              '@': {
                templateUrl: 'components/home.html',
                controller: 'HomeCtrl as vm'
              }
            }
          })
          .state('home.portfolio', {
            url: 'portfolio',
            abstract: true
          })
          .state('home.portfolio.webprojects', {
            url: '/webprojects',
            views: {
              'content@home': {
                templateUrl: 'components/portfolio.webprojects.html'
              }
            }
          })
          .state('home.portfolio.androidprojects', {
            url: '/androidprojects',
            views: {
              'content@home': {
                templateUrl: 'components/portfolio.androidprojects.html'
              }
            }
          })
          .state('home.about', {
            url: 'about',
            views: {
              'content@home': {
                templateUrl: 'components/about.html'
              }
            }
          })
          .state('home.contact', {
            url: 'contact',
            views: {
              'content@home': {
                templateUrl: 'components/contact.html'
              }
            }
          })
          //   views: {
          //     // 'content@home': {
          //     // templateUrl: 'components/about.html'
          //     // }
          //   }
          // })
      }])
    //take all whitespace out of string
    .filter('nospace', function () {
      return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
      };
    })
    //replace uppercase to regular case
    .filter('humanizeDoc', function () {
      return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
          return doc.name.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }

        return doc.label || doc.name;
      };
    });
})();