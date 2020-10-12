(function()
{
 var benefitlist = ["TRACK Your E-Waste", "TRACK Your EPR Compliance","ENHANCE Transparency", 
   "EASE-OUT Policy Compliance","SAVE Recurring Investment",  "SAVE Recurring Efforts", "ENSURE End-to-End Recycling", 
    "GET ASSURED ON: NO Child Labour"];
'use strict';
angular.module('ewaste',[])
.controller('benefitController',benefitController)
.controller('contactController',contactController)
.controller('stepsController',stepsController)
.controller('manufacturerController',manufacturerController)
.controller('stateGovernmentController',stateGovernmentController)
.controller('industryController',industryController)
.controller('individualController',individualController)
.controller('parentServiceController',parentServiceController)
.controller('childProductController',childProductController)
.controller('guidelinesController',guidelinesController)
.service('guidelinesService',guidelinesService)
.service('StepsService',StepsService)
.directive('footerDirective',FooterDirective)
.factory('policyFactory',policyFactory);

guidelinesController.$inject = ['policyFactory'];
function guidelinesController(policyFactory)
{
    var gc = this;
    var gcf = policyFactory();
    gc.get = gcf.get();
    

}
function guidelinesService()
{
    var service = this;
    var s1 = [{n1 : "E-waste Management Guidelines",n2 : "Manufacturer or Recycler",n3:"E-Waste Manifest",n4:"E-Waste Handled or Generated",n5:"EPR Authorization Rules"}];
    service.get = function() {return s1;};
}
function policyFactory()
{
    var fact = function()
    {
        return new guidelinesService();
    };
    return fact;
}
stepsController.$inject = ['StepsService'];
function stepsController(StepsService)
{
    var steps = this;
    steps.show = StepsService.show();
}

function StepsService()
{

    var service = this;
    var img = new Image();
    img.src = "/howitworks.png";
    service.show =function(){ return img.src;};
}
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

    
}
function manufacturerController($scope)
{
    
    $scope.master = [];

    $scope.add = function(manu)
    {
        var list = {name : manu.name,email : manu.email,phone : manu.phone,message : manu.message};
        $scope.master.push(list);
        //$scope.master = angular.copy(manu);
    };

}

function stateGovernmentController($scope)
{
    $scope.master = [];

    $scope.govt = function(user)
    {
        var list = {name : user.name,email :user.email,phone : user.phone,message : user.message};
        $scope.master.push(list);
        
    };
}

function industryController($scope)
{
    $scope.master = [];

    $scope.industrycluster = function(user)
    {
        var list = {name : user.name,email :user.email,phone : user.phone,message : user.message};
        $scope.master.push(list);
        
    };
}

function individualController($scope)
{
    $scope.master = [];

    $scope.individual = function(user)
    {
        var list = {name : user.name,email :user.email,phone : user.phone,address:user.address,date : user.date,time : user.time};
        $scope.master.push(list);
        
    };

}
function parentServiceController()
{
    var parent = this;
    parent.services = ["Digital-Pro","Due Diligence -EPR Compliance","E-Waste Inventorization" ,"Advisory Services","Capacity Building, Training, Awareness Campaigns","Data Destruction Services"];
}
function childProductController()
{
    var child = this;
    child.products = [" ZERO WASTE CERTIFICATION","EPR TRACKER(TM)","M-PRINT","RE-CIRCULATE(TM)"];
}


})();