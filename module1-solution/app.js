(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.input = "";
  $scope.msg = "";
  $scope.checkIfTooMuch  = function () {
    var inputLen = $scope.input.length;
    var len = 0;
    if (inputLen > 0) {
      var arr = $scope.input.split(',');
      len = arr.length;
    }
    if (len <=3 && len > 0) {
       $scope.msg = 'Enjoy!';
    } else if (len > 3) {
      $scope.msg = 'Too much!';
    } else {
      $scope.msg = 'Please enter data first';
    }
  }
}

})();
