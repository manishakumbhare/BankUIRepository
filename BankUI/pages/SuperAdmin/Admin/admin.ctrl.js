
// create the module and name it scotchApp
var scotchApp = angular.module('app.admin', ['ngRoute'])


scotchApp.controller('adminController', function ($rootScope, $scope, $http, $routeParams, $location, $filter, $cookieStore,$interval, $timeout)
{


    
    //code for GET bank
    $http.get('http://localhost:53088/api/View_Bank')
       .success(function (res) {
           console.log(res);
           $scope.getBank = res;

          // $scope.btnSave = "true";
       })

    //code for GET admin
    $http.get('http://localhost:53088/api/View_Admin')
           .success(function (res) {
               console.log(res);
               $scope.getAdmin = res;
           })






    //Code for Cancel Button
    $scope.cancel = function () {

        this.name = null;
        this.designation = null;
        this.contactNo1 = null;
        this.contactNo2 = null;
        this.address1 = null;
        this.address2 = null;
        this.emailId = null;
        this.bank ="";
        this.username = null;
        this.password = null;
        this.ConfirmPassword = null;


    }

    //******Code for ADD Admin*******

    ////POST
    $scope.save = function () {
      //  alert("inside save");
           var adminName = this.name;
           var designation = this.designation;
           var contactNo1 = this.contactNo1;
           var contactNo2 = this.contactNo2;
           var address1 = this.address1;
           var address2 = this.address2;
           var emailId = this.emailId;
           var bank = this.bank;
           var username = this.username;
           var password = this.password;
           var confirmPassword = this.ConfirmPassword;
           //var rollId = 2;
           var deleted = false;


           var date = $filter('date')(new Date(), 'shortDate');


           //condition will check if user has left any field vacant
           //if (serviceName == null || salePrise == null || purchasePrise == null || Unit == null || Unit == "" || category == null || category == "" || purchaseTax == null || purchaseTax == "" || salesTax == null || salesTax == "" || allowSales == null || allowSales == "" || allowPurchase == null || allowPurchase == "" || description == null) {
           //    alert("fill the info");
           //    return;
           //}

           //else {
               var request = $http({
                   method: "post",
                   url: "http://localhost:53088/api/Admins",
                   crossDomain: true,
                   data: {

                       AdminName: adminName,
                       Designation: designation,
                       //RoleId:rollId,
                       ContactNo1: contactNo1,
                       ContactNo2: contactNo2,
                       Address1: address1,
                       Address2: address2,
                       EmailId: emailId,
                       Unit:bank,
                       Username: username,
                       Password: password,
                       ConfirmPassword: confirmPassword,
                       CreatedDate:date,
                       Deleted: deleted,


                   },
                   headers: { 'Content-Type': 'application/json' }
               })
                .success(function (responce) {
                    alert('data added successfully');

                    $http.get('http://localhost:53088/api/View_Admin')
.success(function (res) {
    $scope.getAdmin = res;


})
               

                })
               this.name = null;
               this.designation = null;
               this.contactNo1 = null;
               this.contactNo2 = null;
               this.address1 = null;
               this.address2 = null;
               this.emailId = null;
               this.bank = "";
               this.username = null;
               this.password = null;
               this.ConfirmPassword = null;

               $scope.signup1.$setPristine();
              
    }
     



    }); //last

   