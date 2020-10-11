(function()
{
    var benefitlist = ["TRACK Your E-Waste", "TRACK Your EPR Compliance","ENHANCE Transparency", 
    "EASE-OUT Policy Compliance","SAVE Recurring Investment",  "SAVE Recurring Efforts", "ENSURE End-to-End Recycling", 
    "GET ASSURED ON: NO Child Labour"];
'use strict';
angular.module('ewaste',[])
.controller('benefitController',benefitController)
.controller('contactController',contactController)
.controller('recyclerController',recyclerController)
//.controller('mouseEventController',mouseEventController)
.directive('footerDirective',FooterDirective)
.service('PartnersService',PartnersService);
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
recyclerController.$inject = ['PartnersService'];
function recyclerController(PartnersService)
{
var recy = this;
recy.adddetails = function(user){
    PartnersService.adddetails(user);
};
recy.getdetails = PartnersService.getdetails();

//this.partner_details = PartnersService.partner_details;
//this.partner_details = PartnersService.partner_details;
}
function PartnersService()
{
    var service = this;
    var partner_details = {};
    service.adddetails = function(user)
    {
        
       partner_details = angular.copy(user);
    };
    service.getdetails = function()
    {
        return partner_details;
    };
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