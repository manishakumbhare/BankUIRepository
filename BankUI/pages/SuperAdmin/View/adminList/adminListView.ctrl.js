
// create the module and name it scotchApp
var scotchApp = angular.module('app.adminListView', ['ngRoute'])


scotchApp.controller('adminListViewController', function ($rootScope, $scope, $http, $routeParams, $location, $filter, $cookieStore,$interval, $timeout) {

     

    //code for GET bank
    $http.get('http://localhost:53088/api/View_Bank')
       .success(function (res) {
           console.log(res);
           $scope.getBank = res;

           $scope.btnSave = "true";
       })

    //code for GET admin
    $http.get('http://localhost:53088/api/View_Admin')
           .success(function (res) {
               console.log(res);
               $scope.getAdmin = res;
           })

    //PUT
    //this code will get the values from table of page and show them in textbox of same page
    //code for update click icon
    $scope.editAdmin = function () {
        //$scope.textbox ngmodel=this
        var Admin_Id = this.id;


        $http.get('http://localhost:53088/api/View_Admin/' + Admin_Id)
    .success(function (res) {
        console.log(res);

        $scope.pushTextAdmin = res;
        var pushTextAdmin = $scope.pushTextAdmin;

        //ngmodel=database
        $scope.ID = pushTextAdmin.ID;
        $scope.name = pushTextAdmin.AdminName;
        $scope.designation = pushTextAdmin.Designation;
        $scope.contactNo1 = pushTextAdmin.ContactNo1;
        $scope.contactNo2 = pushTextAdmin.ContactNo2;
        $scope.address1 = pushTextAdmin.Address1;
        $scope.address2 = pushTextAdmin.Address2;
        $scope.emailId = pushTextAdmin.EmailId;
        //$scope.bank = pushTextAdmin.BankId;
        $scope.user = pushTextAdmin.Username;
        $scope.password = pushTextAdmin.Password;
        $scope.ConfirmPassword = pushTextAdmin.ConfirmPassword;

    })
   //     var bankId = pushTextAdmin.BankId;
   //     $http.get('http://localhost:53088/api/View_Bank/' + bankId)
   //.success(function (res) {
   //    console.log(res);

   //    $scope.pushTextbank = res;
   //    var pushTextbank = $scope.pushTextbank;
   //    $scope.bank = pushTextAdmin.BankName;


   //})

    }


    //code for update button
    $scope.updateAdmin = function () {

        var ID = this.ID;
        var name = this.name;
        var designation = this.designation;
        var contactNo1 = this.contactNo1;
        var contactNo2 = this.contactNo2;
        var address1 = this.address1;
        var address2 = this.address2;
        var emailId = this.emailId;
        var bank = this.bank;
        var username = this.user;
        var password = this.password;
        var confirmPassword = this.ConfirmPassword;



        //condition will check if user has left any field vacant
        //if (name == null || description == null || parentCategory == null) {
        //    alert("fill the info");
        //    return;
        //}
        //if (name == null || designation == null || contactNo1 == null || contactNo2 == null ) {
        //    alert("fill the info");
        //    return;
        //}
        //else
        var request = $http({
            method: "put",
            url: "http://localhost:53088/api/Admins/" + ID,
            crossdomain: true,
            data: {

                //database value = variables
                ID: ID,
                AdminName: name,
                Designation: designation,
                ContactNo1: contactNo1,
                ContactNo2: contactNo2,
                Address1: address1,
                Address2: address2,
                EmailId: emailId,
                BankId: bank,
                Username: username,
                Password: password,
                ConfirmPassword: confirmPassword




            },

            headers: { 'content-type': 'application/json' }
        })

        .success(function (responce) {
            alert('record updated successfully !!!')

            //further code will refresh the current database data on page
            $http.get('http://localhost:53088/api/View_Admin')
.success(function (res) {
    $scope.getAdmin = res;


})
        })

        //this.name = null;
        //this.description = null;
        //this.parentCategory = null;

        this.name = " ";
        this.designation = " ";
        this.contactNo1 = " ";
        this.contactNo2 = " ";
        this.address1 = " ";
        this.address2 = " ";
        this.emailId = " ";
        this.bank = " ";
        this.user = " ";
        this.password = " ";
        this.ConfirmPassword = " ";

    }






    //Code for Cancel Button
    $scope.cancel = function () {

        this.name = null;
        this.designation = null;
        this.contactNo1 = null;
        this.contactNo2 = null;
        this.address1 = null;
        this.address2 = null;
        this.emailId = null;
        this.bank = "";
        this.user = null;
        this.password = null;
        this.ConfirmPassword = null;

        $scope.signup1.$setPristine();

    }


    //delete button
    $scope.deleteAdmin = function () {
        //$scope.textbox ngmodel=this
        var admin_Id = this.id;

        $http.get('http://localhost:53088/api/View_Admin/' + admin_Id)
    .success(function (res) {

        $scope.deleteTextAdmin = res;


        var deleteTextAdmin = $scope.deleteTextAdmin;

        //=database
        var Id = deleteTextAdmin.ID;
        var adminName = deleteTextAdmin.AdminName;
        var bankid = deleteTextAdmin.BankId;
        var roleid = deleteTextAdmin.RoleId;
        var designation = deleteTextAdmin.Designation;
        var address1 = deleteTextAdmin.Address1;
        var address2 = deleteTextAdmin.Address2;
        var contactno1 = deleteTextAdmin.ContactNo1;
        var contact2 = deleteTextAdmin.ContactNo2;
        var emailid = deleteTextAdmin.EmailId;
        var username = deleteTextAdmin.Username;
        var password = deleteTextAdmin.Password;
        var confirmpassword = deleteTextAdmin.ConfirmPassword;
        var createdate = deleteTextAdmin.CreatedDate;
        var updatedate = deleteTextAdmin.UpdatedDate;
        var date = $filter('date')(new Date(), 'shortDate');
        var deleted = true;

        var request = $http({
            method: "put",
            url: "http://localhost:53088/api/Admins/" + Id,
            crossdomain: true,
            data: {

                //db=var
                ID: Id,
                AdminName: adminName,
                BankId: bankid,
                RoleId: roleid,
                Designation: designation,
                Address1: address1,
                Address2: address2,
                ContactNo1: contactno1,
                ContactNo2: contact2,
                EmailId: emailid,
                Username: username,
                Password: password,
                ConfirmPassword: confirmpassword,
                CreatedDate: createdate,
                UpdatedDate: updatedate,
                DeletedDate: date,
                Deleted: deleted,
            },

            headers: { 'content-type': 'application/json' }
        })

            .success(function (responce) {
                alert('record deleted successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:53088/api/View_Admin/')
    .success(function (res) {
        $scope.getAdmin = res;
    })
            })

    })
    }

})//last