
// create the module and name it scotchApp
var scotchApp = angular.module('app.branch', ['ngRoute'])


scotchApp.controller('branchController', function ($rootScope, $scope, $http, $routeParams, $location, $filter, $cookieStore,$interval, $timeout) {

    var linkglobal = 'http://localhost:53088/api/';

    
    //code for GET
    $http.get('http://localhost:53088/api/View_Branch')
       .success(function (res) {
         
           $scope.getBranch = res;
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

        var bankCode = this.bankcode;
        var branchName = this.branchname;
        var branchCode = this.branchcode;
        var branchaddress1 = this.branchAddress1;
        var branchaddress2 = this.branchAddress2;
        var pinCode = this.pincode;
        var contactno = this.contactNo;
        var website = this.Website;
        var IFSCCode = this.IFSCcode;
        var produntid = this.produntId;
        var langaugeid = this.langaugeId;
        var createdDate = $filter('date')(new Date(),'dd-MM-yyyy');
        var delet = false;

       
        var request = $http({
            method: "post",
            url: "http://localhost:53088/api/Branches",
            crossDomain: true,
            data: {
                BankId: bankCode,
                BranchName: branchName,
                BranchCode: branchCode,
                Address1: branchaddress1,
                Address2: branchaddress2,
                ContactNo: contactno,
                PinCode: pinCode,
                Website: website,
                IFSCCode: IFSCCode,
                ProductId:produntid,
                LanguageId: langaugeid,
               
                CreatedDate: createdDate,
                Deleted: delet
            },
            headers: { 'Content-Type': 'application/json' }
        })
         .success(function (responce) {
             alert('data added successfully');

           
         })

        this.branchId = " ";
        this.bankcode = " ";
        this.branchname = " ";
        this.branchcode = "";
        this.branchAddress1 = "";
        this.branchAddress2 = "";
        this.contactNo = "";
        this.pincode = "";
        this.Website = "";
        this.IFSCcode = "";
        this.produntId = "";
        this.langaugeId = "";
        this.createdDate = "";
        // }
    }

    $scope.cancelAndNew = function () {
        this.branchId = " ";
        this.bankcode = " ";
        this.branchname = " ";
        this.branchcode = "";
        this.branchAddress1 = "";
        this.branchAddress2 = "";
        this.contactNo = "";
        this.pincode = "";
        this.Website = "";
        this.IFSCcode = "";
        this.produntId = "";
        this.langaugeId = "";
        this.createdDate = "";
    }

    //$scope.editBranch = function () {
    //    var Id = this.id

    //    $scope.btnSave = false;
    //    $scope.btnUpdate = true;

    //    $http.get('http://localhost:53088/api/View_Branch/' + Id)
    //  .success(function (res) {
    //      console.log('Id=' + res);
      
    //      $scope.getBranches = res;
    //      var branch = $scope.getBranches;
          
    //      $scope.branchId = branch.ID
    //      $scope.bankcode = branch.BankId;
    //      $scope.branchname = branch.BranchName;
    //      $scope.branchcode = branch.BranchCode;
    //      $scope.branchAddress1 = branch.Address1;
    //      $scope.branchAddress2 = branch.Address2;
    //      $scope.contactNo = branch.ContactNo;
    //      $scope.pincode = branch.PinCode;
    //      $scope.Website = branch.Website;
    //      $scope.IFSCcode = branch.IFSCCode;
    //      $scope.produntId = branch.ProductId;
    //      $scope.langaugeId = branch.LanguageId;
    //      $scope.createdDate = branch.CreatedDate;
    //  })


    //}

    //$scope.updateBranch = function () {

    //    var branchID = this.branchId;

    //    var bankcode = this.bankcode;
    //    var branchname = this.branchname;
    //    var branchcode = this.branchcode;
    //    var branchAddress1 = this.branchAddress1;
    //    var branchAddress2 = this.branchAddress2;
    //    var contactNo = this.contactNo;
    //    var pincode = this.pincode;
    //    var Website = this.Website;
    //    var IFSCcode = this.IFSCcode;
    //    var produntId = this.produntId;
    //    var langaugeId = this.langaugeId;
    //    var createdDate = this.createdDate;
    //    var delet = false;

    //    var updatedDate = $filter('date')(new Date(), 'dd-MM-yyyy');
      
    //    var request = $http({
    //        method: "put",
    //        url: "http://localhost:53088/api/Branches/" + branchID,
    //        crossDomain: true,
    //        data: {
    //            ID: branchID,
    //            BankId: bankcode,
    //            BranchName: branchname,
    //            BranchCode: branchcode,
    //            Address1: branchAddress1,
    //            Address2: branchAddress2,
    //            ContactNo: contactNo,
    //            PinCode: pincode,
    //            Website: Website,
    //            IFSCCode: IFSCcode,
    //            ProductId: produntId,
    //            LanguageId: langaugeId,
    //            CreatedDate: createdDate,
    //            UpdatedDate: updatedDate,
    //            Deleted:delet
    //        },
    //        headers: { 'Content-Type': 'application/json' }
    //    })
    //     .success(function (responce) {
    //         alert('data Updated successfully');

    //         $http.get('http://localhost:53088/api/View_Branch')
    //  .success(function (res) {
    //      $scope.getBranch = res;
    //      $scope.btnSave = true;
    //      $scope.btnUpdate = false;
    //  })
    //     })
    //    this.branchId = " ";
    //    this.bankcode = " ";
       
    //    this.branchname = " ";
    //    this.branchcode = "";
    //    this.branchAddress1 = "";
    //    this.branchAddress2 = "";
    //    this.contactNo = "";
    //    this.pincode = "";
    //    this.Website = "";
    //    this.IFSCcode = "";
    //    this.produntId = "";
    //    this.langaugeId = "";
    //    this.createdDate = "";
    //    // }
    //}

    //$scope.deleteBranch = function () {
    //    var branchID = this.id;

    //    var bankCode;
    //    var branchName;
    //    var branchCode;
    //    var branchaddress1;
    //    var branchaddress2;
    //    var pinCode;
    //    var contactno;
    //    var website;
    //    var IFSCCode;
    //    var produntid;
    //    var langaugeid;
    //    var CreatedDate;
    //    var updatedDate;
    //    var deletedDate = $filter('date')(new Date(), 'dd-MM-yyyy');
    //    var delet = true;

    //    $http.get('http://localhost:53088/api/View_Branch/' + branchID)
    // .success(function (res) {
         
    //     $scope.getBranches = res;
    //     var branch = $scope.getBranches;

    //     bankCode = branch.BankId;
    //     branchName = branch.BranchName;
    //     branchCode = branch.BranchCode;
    //     branchaddress1 = branch.Address1;	
    //     branchaddress2 = branch.Address2;
    //     contactno = branch.ContactNo;
    //     pinCode = branch.PinCode;
    //     website=branch.Website;
    //     IFSCCode = branch.IFSCCode;
    //     produntid = branch.ProductId;
    //     langaugeid = branch.LanguageId;
    //     CreatedDate = branch.CreatedDate;
    //     updatedDate = branch.UpdatedDate;

    

    //    var request = $http({
    //        method: "put",
    //        url: "http://localhost:53088/api/Branches/" + branchID,
    //        crossDomain: true,
    //        data: {
    //            ID: branchID,
    //            BankId: bankCode,
    //            BranchName: branchName,
    //            BranchCode: branchCode,
    //            Address1: branchaddress1,
    //            Address2: branchaddress2,
    //            ContactNo: contactno,
    //            PinCode: pinCode,
    //            Website: website,
    //            IFSCCode: IFSCCode,
    //            ProductId: produntid,
    //            LanguageId: langaugeid,
    //            CreatedDate: CreatedDate,
    //            UpdatedDate: updatedDate,
    //            DeletedDate:deletedDate,
    //            Deleted: delet
    //        },
    //        headers: { 'Content-Type': 'application/json' }
    //    })
    //           .success(function (responce) {
    //               alert('data deleted successfully');

    //               $http.get('http://localhost:53088/api/View_Branch')
    //        .success(function (res) {
    //            $scope.getBranch = res;
    //            $scope.btnSave = true;
    //            $scope.btnUpdate = false;
    //        })
    //           })
    // })

    //    this.branchId = " ";
    //    this.bankcode = " ";
    //    this.branchname = " ";
    //    this.branchcode = "";
    //    this.branchAddress1 = "";
    //    this.branchAddress2 = "";
    //    this.contactNo = "";
    //    this.pincode = "";
    //    this.Website = "";
    //    this.IFSCcode = "";
    //    this.produntId = "";
    //    this.langaugeId = "";
    //    this.createdDate = "";
    //    // }
    //}

});//last

 