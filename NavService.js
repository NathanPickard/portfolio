(function () {

  'use strict';

  angular.module('common.services')
    .factory('nav', [
      '$location',
      '$rootScope',
    function ($location) {

      var sections = [{
        name: 'Home',
        state: 'home',
        type: 'link',
        icon: 'home'
      }];

      sections.push({
        name: 'Portfolio',
        type: 'toggle',
        icon: 'portfolio',
        pages: [{
          name: 'Web Projects',
          type: 'link',
          state: 'home.portfolio.webprojects',
          icon: 'web'
        }, {
          name: 'Android projects',
          type: 'link',
          state: 'home.portfolio.androidprojects',
          icon: 'android'
        }]
      });

      sections.push({
        name: 'About',
        type: 'link',
        state: 'home.about',
        icon: 'about'
      })

      sections.push({
        name: 'Contact',
        type: 'link',
        state: 'home.contact',
        icon: 'contact'
      });

      var self;

      return self = {
        sections: sections,

        toggleSelectSection: function (section) {
          self.openedSection = (self.openedSection === section ? null : section);
        },
        isSectionSelected: function (section) {
          return self.openedSection === section;
        },

        selectPage: function (section, page) {
          page && page.url && $location.path(page.url);
          self.currentSection = section;
          self.currentPage = page;
        }
      };

    }
  ])
})();

// 'use strict';

// angular.module('navItems').service('navService', NavService);

// function NavService($q) {
//   var navItems = [
//     {
//       title: 'Home',
//       icon: 'home',
//       content: 'This is the home page'
//     },
//     {
//       title: 'Portfolio',
//       icon: 'portfolio',
//       content: 'This is the portfolio page'
//     },
//     {
//       title: 'About',
//       icon: 'about',
//       content: 'This is the about page'
//     },
//     {
//       title: 'Contact',
//       icon: 'contact',
//       content: 'This is the contact page'
//     }
//   ];

//   return {
//     loadAllItems: function () {
//       return $q.when(navItems);
//     }
//   };
// }