
(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckFunc);

  LunchCheckFunc.$inject = ['$scope'];
  function LunchCheckFunc($scope){
    $scope.lunchList = "";
    $scope.lunchMessage = "";
    $scope.messageColor ="";
    $scope.messageBorder ="";
    $scope.lunchSelected = function(){

          var lunchSelectedList = $scope.lunchList.split(",");
          var lunchListTrimed = getTrimedLunchList(lunchSelectedList);
          $scope.messageBorder = "solid";
          getLunchMessage(lunchListTrimed);

    };

    function getTrimedLunchList(lunchSelectedList){
      var i = 0;
      var lunchListTrimed = [];
      for(; i < lunchSelectedList.length; i++){

        if(lunchSelectedList[i].trim().length > 0){
        lunchListTrimed.push(lunchSelectedList[i].trim());
        }
      }
      return lunchListTrimed;
    }

    function getLunchMessage(lunchListTrimed){
      if(lunchListTrimed.length === 0){
         $scope.lunchMessage = "Please enter data first";
         $scope.messageColor ="red";
      } else if(lunchListTrimed.length <= 3){
        $scope.lunchMessage = "Enjoy!";
        $scope.messageColor ="green";
      } else if( lunchListTrimed.length > 3) {
        $scope.lunchMessage  = "Too much!";
        $scope.messageColor ="green";
      }
    }
}

})();
