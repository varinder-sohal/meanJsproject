(function () {
  'use strict';

  angular
    .module('lists')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Lists',
      state: 'lists',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'lists', {
      title: 'List Lists',
      state: 'lists.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'lists', {
      title: 'Create List',
      state: 'lists.create',
      roles: ['user']
    });
  }
}());
