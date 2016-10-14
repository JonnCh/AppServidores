'use strict';

angular.module('servidoresApp')
  .controller('DialogController', function ($scope, $mdDialog) {
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };

  
});
