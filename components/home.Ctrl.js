(function(){
  'use strict';
  
  angular.module('Portfolio.controllers')

.controller('HomeCtrl', [
      '$rootScope',
      '$log',
      '$state',
      '$timeout',
      '$location',
      'nav',
      function ($rootScope, $log, $state, $timeout, $location, nav) {

        var vm = this;

        vm.isOpen = isOpen;
        vm.toggleOpen = toggleOpen;
        vm.autoFocusContent = false;
        vm.nav = nav;
        // vm.toggleList = toggleNavList;

        vm.status = {
          isFirstOpen: true,
          isFirstDisabled: false
        };

        // function toggleNavList() {
        //   $mdSidenav.toggle();
        // }



        function isOpen(section) {
          return nav.isSectionSelected(section);
        }

        function toggleOpen(section) {
          nav.toggleSelectSection(section);
        }

      }])
})();