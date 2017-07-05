(function (){
  'use strict';

  angular.module('TooMuch', [])
  .controller('TooMuchController', TooMuchController);

TooMuchController.$inject = ['$scope'];
function TooMuchController($scope)
{
     $scope.message = "Enter data";
     $scope.CheckMuch = function ()
      {
        var input= $scope.userInput.split(",");
        var length = input.length;

        length= CheckSpace(input,length);

        if ( $scope.userInput === "" || $scope.userInput === " "  ){
            return $scope.message = "Please enter data first";
        }
        
        if ( length <= 3 && length > 0){
          return $scope.message = "Enjoy!";
        }
        if ( length >3){
          return $scope.message = "Too much!";
        }
       
     };

     function CheckSpace(array,int)
     {
      var int = array.length;

      for (var i = int - 1; i >= 0; i--) 
       {
        if (array[i]=="" || array[i]==" "|| array[i]=="  "|| array[i]=="   "|| array[i]=="    "|| array[i]=="     "|| array[i]=="      ")
          int=int-1;
       }
       return int;
     }
}

})();
