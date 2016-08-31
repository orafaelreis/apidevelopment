angular.module('classApp', []).controller('contentCtrl',
function($scope) {
      var vm = this;
      var hash = window.location.search.substring(1);
      vm.templateURL =  hash+'.html';
      vm.showSOAimg = false;

      $scope.menu_is_active = function(txt){
        if(hash == txt) return 'active';
        return '';
      };

      // $scope.code = function(str) {
      //   return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      // }

      $scope.page = {
        hash: hash,
        footerText: '© 2016, Arquitetura e Desenvolvimento de APIs. All rights reserved.'
      };
});
