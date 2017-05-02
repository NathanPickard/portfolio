'use strict';

angular.module('navItems').service('navService', NavService);

function NavService($q) {
  var navItems = [
    {
      title: 'Home',
      icon: 'home',
      content: 'This is the home page'
    },
    {
      title: 'Portfolio',
      icon: 'portfolio',
      content: 'This is the portfolio page'
    },
    {
      title: 'About',
      icon: 'about',
      content: 'This is the about page'
    },
    {
      title: 'Contact',
      icon: 'contact',
      content: 'This is the contact page'
    }
  ];

  return {
    loadAllItems: function () {
      return $q.when(navItems);
    }
  };
}