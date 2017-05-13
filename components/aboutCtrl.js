(function () {
  'use strict';
  angular
      .module('dynamicTabs', ['ngMaterial'])
      .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl ($scope, $log) {
    var tabs = [
          { title: 'Background', content: "Living in the City of Roses"},
          { title: 'Hobbies', content: "Passion for excellent BBQ, music of all kinds, and technology"},
          { title: 'Current Activities', content: "Always learning in in's and out's of full-stack web development.  Currently focusing on Angular and the Angular Material framework."}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
  }
})();

// (function () {
//   'use strict';

//   angular.module("Portfolio")
//     .controller("aboutCtrl", function ($scope, $state, $http, aboutFactory, $mdSidenav) {

//       var vm = this;
//       vm.aboutInfo;

//       aboutFactory.getAboutInfo().then(function (aboutInfo) {
//         vm.aboutInfo = aboutInfo.data;

//       });


//     });
// });