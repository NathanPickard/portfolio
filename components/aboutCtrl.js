(function () {
  'use strict';

  angular.module("Portfolio")
    .controller("aboutCtrl", function ($scope, $state, $http, aboutFactory, $mdSidenav) {

      var vm = this;
      vm.aboutInfo;

      aboutFactory.getAboutInfo().then(function (aboutInfo) {
        vm.aboutInfo = aboutInfo.data;

      });


    });
});