(function()
{
    var benefitlist = ["TRACK Your E-Waste", "TRACK Your EPR Compliance","ENHANCE Transparency", 
    "EASE-OUT Policy Compliance","SAVE Recurring Investment",  "SAVE Recurring Efforts", "ENSURE End-to-End Recycling", 
    "GET ASSURED ON: NO Child Labour"];
'use strict';
angular.module('ewaste',[])
.controller('benefitController',benefitController)
/*.controller('footerController',function($scope)
{
    $scope.footermsg = "Copyright © ewaste@exchange.com.";
})*/
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
})();