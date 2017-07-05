(function (){
  'use strict';

  angular.module('TooMuch', [])
  .controller('TooMuchController', TooMuchController);

LunchCheckController.$inject = ['$scope'];
function TooMuchController($scope)
{
     $scope.message = "Enter data";
     $scope.CheckMuch = function ()
      {
        var input= $scope.userInput.split(",");

        if ( $scope.userInput === "" || $scope.userInput === " "  ){
            return $scope.message = "Please enter data first";
        }
        
        if ( input.length <= 3 && input.length > 0){
          return $scope.message = "Enjoy!";
        }
        if ( input.length >3){
          return $scope.message = "Too much!";
        }
       
     };
}

})();
