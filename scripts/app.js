(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope', '$filter'];
function LunchCheckerController($scope, $filter) {
  $scope.inputMsg = "";
  $scope.statusMsg = "";
  $scope.csscolor = {};
  $scope.csscolorbox = {};

  $scope.checkMsg = function () {
    var InMsg = $scope.inputMsg;
    var arr = InMsg.split(",");

    // console.log(ccolor);
    // console.log(StMsg);
    // console.log(arr.length);

    if (arr == 0) {
      $scope.statusMsg = "Please enter data first";
      $scope.csscolor = {"color" : "red"};
      $scope.csscolorbox = {"border-color" : "red"};
    }
    else if (arr.length <= 3) {
      $scope.statusMsg = "Enjoy";
      $scope.csscolor = {"color" : "green"} ;
      $scope.csscolorbox = {"border-color" : "green"};
    }
    else {
      $scope.statusMsg = "Too much";
      $scope.csscolor = {"color" : "green"} ;
      $scope.csscolorbox = {"border-color" : "green"};
    }

  };
}

})();
