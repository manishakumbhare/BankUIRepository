
// create the module and name it scotchApp
var scotchApp = angular.module('app.bank', ['ngRoute'])


scotchApp.controller('bankController', function ($rootScope, $scope, $http, $routeParams, $location, $filter, $cookieStore,$interval, $timeout) {

    var linkglobal = 'http://localhost:53088/api/';

    var linkglobal = 'http://localhost:53088/api/';


    //code for GET
    $http.get('http://localhost:53088/api/View_Bank')
       .success(function (res) {

           $scope.getBank = res;

       })
    $http.get('http://localhost:53088/api/View_SuperAdmin')
      .success(function (res) {

          $scope.getSuperAdmin = res;

      })

    $http.get('http://localhost:53088/api/View_Admin')
     .success(function (res) {

         $scope.getAdmin = res;

     })
    $http.get('http://localhost:53088/api/View_Product')
    .success(function (res) {

        $scope.getProduct = res;

    })
    $http.get('http://localhost:53088/api/View_Language')
    .success(function (res) {

        $scope.getLanguage = res;

    })

    //POST
    //code for save controller

    $scope.save = function () {


        var bankName = this.bankname;
        var superadminid = this.superAdminId;
        var adminid = this.adminId;

        var bankshortname = this.bankShortName;
        var bankaddress = this.bankAddress;
        var registrationno = this.registrationNo;
        var contactno1 = this.contactNo1;
        var contactno2 = this.contactNo2;
        var workingHoursAM = this.workingHoursAm;
        var workingHoursPM = this.workingHoursPm;
        var website = this.Website;
        var pincode = this.pinCode;
        var produntid = this.produntId;
        var langaugeid = this.langaugeId;
        var createdDate = $filter('date')(new Date(), 'yyyy-MM-dd');
        var delet = false;
        //condition will check if user has left any field vacant
        //if (serviceName == null || salePrise == null || purchasePrise == null || Unit == null || Unit == "" || category == null || category == "" || purchaseTax == null || purchaseTax == "" || salesTax == null || salesTax == "" || allowSales == null || allowSales == "" || allowPurchase == null || allowPurchase == "" || description == null) {
        //    alert("fill the info");
        //    return;
        //}

        //else {
        var request = $http({
            method: "post",
            url: "http://localhost:53088/api/Banks",
            crossDomain: true,
            data: {
                BankName: bankName,
                //  SuperAdminId: superadminid,
                AdminId: adminid,
                BankShortName: bankshortname,
                BankAddress: bankaddress,
                RegistrationNo: registrationno,
                ContactNo1: contactno1,
                ContactNo2: contactno2,
                // WorkingHours:,
                // BankLogo:,
                Website: website,
                // BankDocument:,
                PinCode: pincode,
                // ProductId:produntid,
                // LanguageId:langaugeid
                CreatedDate: createdDate,
                Deleted: delet
            },
            headers: { 'Content-Type': 'application/json' }
        })
         .success(function (responce) {
             alert('data added successfully');


         })

        this.BankId = "";
        this.bankname = "";
        this.superAdminId = "";
        this.adminId = "";
        this.bankShortName = "";
        this.bankAddress = "";
        this.registrationNo = "";
        this.contactNo1 = "";
        this.contactNo2 = "";
        this.workingHoursAm = "";
        this.workingHoursPm = "";
        this.Website = "";
        this.pinCode = "";
        this.produntId = "";
        this.langaugeId = "";

    };

    $scope.cancelAndNew=function()
    {
        this.BankId = "";
        this.bankname = "";
        this.superAdminId = "";
        this.adminId = "";
        this.bankShortName = "";
        this.bankAddress = "";
        this.registrationNo = "";
        this.contactNo1 = "";
        this.contactNo2 = "";
        this.workingHoursAm = "";
        this.workingHoursPm = "";
        this.Website = "";
        this.pinCode = "";
        this.produntId = "";
        this.langaugeId = "";

    }
});//last

 