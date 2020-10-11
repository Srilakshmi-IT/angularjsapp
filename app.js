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
.controller('dispController',dispController)
.controller('manufacturerController',manufacturerController)
.controller('parentServiceController',parentServiceController)
.controller('childProductController',childProductController)
//.controller('mouseEventController',mouseEventController)
.directive('footerDirective',FooterDirective)
.service('PartnersService',PartnersService)
.factory('disposeFactory',disposeFactory);
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
recyclerController.$inject = ['PartnersService'];
function recyclerController(PartnersService)
{
var recy = this;
recy.name = "";
recy.email="";
recy.phone = "";
recy.message = " ";
recy.adddetails = function(name,email,phone,message){
    PartnersService.adddetails(recy.name,recy.email,recy.phone,recy.message);
};
 

//this.partner_details = PartnersService.partner_details;
//this.partner_details = PartnersService.partner_details;
}
dispController.$inject = ['PartnersService'];
function dispController(PartnersService)
{
    var disp = this;
    disp.details = PartnersService.getdetails();
}
manufacturerController.$inject = ['disposeFactory'];
function manufacturerController(disposeFactory)
{
var manu = this;
var f1 = new disposeFactory();
manu.available = f1.get();
manu.name = "";
manu.email = "";
manu.phone = "";
manu.message = "";
manu.add = function()
{
f1.add(manu.name,manu.email,manu.phone,manu.message);
};
}

function disposeService()
{
    var d1 = this;
    var det = [];
    d1.add = function(name,email,phone,message)
    {
        var x = {rname : name,remail : email,rphone : phone,rmessage : message};
        det.push(x);
    };
    d1.get = function()
    {
        return det;
    };
}
function disposeFactory()
{
    var factory = function()
    {
        return new disposeService();
    };
    return factory;
}
function PartnersService()
{
var service = this;
   var partner = [{rname:"Shalini", remail : "shalini@gmail.com",rphone : "9234254312",rmessage : "Our company will join with you"},
{rname:"Praveena",remail : "praveena@gmail.com",rphone : "8736467512"},{rname : "Karthik",remail:"karthik@gmail.com",phone : "8255129945"}];
    service.adddetails = function(name,email,phone,message)
    {
    //var det = {rname : name,remail : email,rphone : phone,rmessage : message};
       //service.partner_details = user;
      // return service.partner_details;
      partner.push(name,email,phone,message);
    };
    service.getdetails = function()
    {
        return partner;
    };
    //{rname:"Shalini", remail : "shalini@gmail.com",rphone : "9234254312",rmessage : "Our company will join with you"}
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