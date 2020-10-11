(function()
{
    var benefitlist = ["TRACK Your E-Waste", "TRACK Your EPR Compliance","ENHANCE Transparency", 
    "EASE-OUT Policy Compliance","SAVE Recurring Investment",  "SAVE Recurring Efforts", "ENSURE End-to-End Recycling", 
    "GET ASSURED ON: NO Child Labour"];
'use strict';
angular.module('ewaste',[])
.controller('benefitController',benefitController)
.controller('contactController',contactController)
//.controller('mouseEventController',mouseEventController)
.directive('footerDirective',FooterDirective);

function FooterDirective()
{
    var ddo = {templateUrl : 'footerDirective.html'};
    return ddo;
}

function benefitController($scope)
{
    $scope.benefits = benefitlist;
}

function contactController($scope)
{
    $scope.master = {};

    $scope.details = function(user) {
      $scope.master = angular.copy(user);
    };

    /*$scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();*/
}
/*function mouseEventController()
{
    var mc = this;
    //mc.state = false;
    mc.showtip = function()
    {
        mc.state = true;
        //mc.msg = 'Convenient';
    };
    mc.hidetip = function()
    {
        mc.state = false;
    };
}*/

})();