
// create the module and name it scotchApp
var scotchApp = angular.module('app.bankListView', ['ngRoute'])


scotchApp.controller('bankListViewController', function ($rootScope, $scope, $http, $routeParams, $location, $filter, $cookieStore,$interval, $timeout) {
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


    $scope.editBank = function () {
        var Id = this.id

        $scope.btnSave = false;
        $scope.btnUpdate = true;

        $http.get('http://localhost:53088/api/View_Bank/' + Id)
      .success(function (res) {
          console.log('Id=' + res);

          $scope.getBanks = res;
          var bank = $scope.getBanks;


          $scope.BankId = bank.ID;
          $scope.bankname = bank.BankName;
          $scope.superAdminId = bank.SuperAdminId;
          $scope.adminId = bank.AdminId;
          $scope.bankShortName = bank.BankShortName;
          $scope.bankAddress = bank.BankAddress;
          $scope.registrationNo = bank.RegistrationNo;
          $scope.contactNo1 = bank.ContactNo1;
          $scope.contactNo2 = bank.ContactNo2;
          $scope.Website = bank.Website;
          $scope.pinCode = bank.PinCode;
          $scope.produntId = bank.ProductId;
          $scope.langaugeId = bank.LanguageId;
          $scope.createdDate = bank.CreatedDate;

      })


    }

    $scope.updateBank = function () {
        var Id = this.BankId;
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
        var createdDate = this.createdDate;
        var updatedDate = $filter('date')(new Date(), 'yyyy-MM-dd');
        var delet = false;
        //condition will check if user has left any field vacant
        //if (serviceName == null || salePrise == null || purchasePrise == null || Unit == null || Unit == "" || category == null || category == "" || purchaseTax == null || purchaseTax == "" || salesTax == null || salesTax == "" || allowSales == null || allowSales == "" || allowPurchase == null || allowPurchase == "" || description == null) {
        //    alert("fill the info");
        //    return;
        //}

        //else {



        var request = $http({
            method: "put",
            url: "http://localhost:53088/api/Banks/" + Id,
            crossDomain: true,
            data: {
                ID: Id,
                BankName: bankName,
                //  SuperAdminId: superadminid,
                // AdminId: adminid,
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
                UpdatedDate: updatedDate,
                Deleted: delet
            },
            headers: { 'Content-Type': 'application/json' }
        })
         .success(function (responce) {
             alert('data updated successfully');

             $http.get('http://localhost:53088/api/View_Bank')
     .success(function (res) {
         console.log("dsfgdsfh=" + res);
         $scope.getBank = res;
         $scope.btnSave = true;
         $scope.btnUpdate = false;
     })
         })
         .error(function (err) {
             alert('data can not updated');
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
        // }
    }

    $scope.deleteBank = function () {
        var Id = this.id


        var bankName;
        var superadminid;
        var adminid;
        var bankshortname;
        var bankaddress;
        var registrationno;
        var contactno1;
        var contactno2;
        var workingHoursAM;
        var workingHoursPM;
        var website;
        var pincode;
        var produntid;
        var langaugeid;
        var createdDate;
        var updatedDate;
        var deletedDate = $filter('date')(new Date(), 'yyyy-MM-dd');
        var delet = true;

        $http.get('http://localhost:53088/api/View_Bank/' + Id)
        .success(function (res) {
            console.log('Id=' + res);

            $scope.getBanks = res;
            var bank = $scope.getBanks;



            bankName = bank.BankName;
            superadminid = bank.SuperAdminId;
            adminid = bank.AdminId;
            bankshortname = bank.BankShortName;
            bankaddress = bank.BankAddress;
            registrationno = bank.RegistrationNo;
            contactno1 = bank.ContactNo1;
            contactno2 = bank.ContactNo2;
            website = bank.Website;
            pincode = bank.PinCode;
            produntid = bank.ProductId;
            langaugeid = bank.LanguageId;
            createdDate = bank.CreatedDate;
            updatedDate = bank.UpdatedDate;



            //condition will check if user has left any field vacant
            //if (serviceName == null || salePrise == null || purchasePrise == null || Unit == null || Unit == "" || category == null || category == "" || purchaseTax == null || purchaseTax == "" || salesTax == null || salesTax == "" || allowSales == null || allowSales == "" || allowPurchase == null || allowPurchase == "" || description == null) {
            //    alert("fill the info");
            //    return;
            //}

            //else {



            var request = $http({
                method: "put",
                url: "http://localhost:53088/api/Banks/" + Id,
                crossDomain: true,
                data: {
                    ID: Id,
                    BankName: bankName,
                    SuperAdminId: superadminid,
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
                    ProductId: produntid,
                    LanguageId: langaugeid,
                    CreatedDate: createdDate,
                    UpdatedDate: updatedDate,
                    DeletedDate: deletedDate,
                    Deleted: delet
                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data deleted successfully');
                 $http.get('http://localhost:53088/api/View_Bank')
          .success(function (res) {
              console.log("dsfgdsfh=" + res);
              $scope.getBank = res;
              $scope.btnSave = true;
              $scope.btnUpdate = false;
          })

             })

        })
        this.name = " ";
        this.contactNo = " ";
        this.designation = " ";
        this.emailId = "";
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        // }

    }

    $scope.cancelAndNew = function () {

        this.BankId = "";
        this.bankname = "";
        this.superAdminId = "";
        this.adminId = "";
        this.bankShortName = "";
        this.bankAddress = "";
        this.registrationNo = "";
        this.contactNo1 = ""; this.contactNo2 = "";
        this.workingHoursAm = "";
        this.workingHoursPm = "";
        this.Website = "";
        this.pinCode = "";
        this.produntId = "";
        this.langaugeId = "";
        $scope.btnSave = true;
        $scope.btnUpdate = false;
    }

     
})