
// create the module and name it scotchApp
var scotchApp = angular.module('app.productView', ['ngRoute'])


scotchApp.controller('productViewController', function ($rootScope, $scope, $http, $routeParams, $location, $filter, $cookieStore,$interval, $timeout) {

    ////code for GET
    $http.get('http://localhost:53088/api/View_Bank')
       .success(function (res) {
           console.log(res);
           $scope.getBank = res;

           // $scope.btnSave = "true";
       })


    $scope.onbankchange = function () {

        var bankid = this.bank;


        ////code for GET 
        $http.get('http://localhost:53088/api/View_Branch/' + bankid)
           .success(function (res) {
               console.log(res);
               $scope.getBranch = res;

               // $scope.btnSave = "true";
           })
    }



    ////code for GET Product
    $http.get('http://localhost:53088/api/View_Product')
           .success(function (res) {
               console.log(res);
               $scope.getProduct = res;
           })

    //******PUT ******

    //this code will get the values from table of page and show them in textbox of same page
    //code for update click icon


    $scope.editProduct = function () {
        //$scope.textbox ngmodel=this
        //alert('asdsf');
        var Product_Id = this.id;

        $scope.btnSave = false;
        $scope.btnUpdate = true;

        $http.get('http://localhost:53088/api/View_Product/' + Product_Id)
  .success(function (res) {
      console.log(res);

      $scope.pushTextAdmin = res;
      var pushTextAdmin = $scope.pushTextAdmin;

      //ngmodel=database

      $scope.ID = pushTextAdmin.ID;
      $scope.productname = pushTextAdmin.ProductName;
      $scope.productdetails = pushTextAdmin.ProductDetails;
      $scope.productshortname = pushTextAdmin.ShortName;
      $scope.bank = pushTextAdmin.BankId;
      $scope.branchid = pushTextAdmin.BranchId

  })
        extbank = $scope.pushTextbank;
        //})//    var bankId = pushTextAdmin.BankId;
        //    $http.get('http://localhost:53088/api/View_Bank/' + bankId)
        //    .success(function (res) {
        //    console.log(res);

        //   $scope.pushTextbank = res;
        //   var pushT

    }




    //    //*****code for UPDATEADMIN*******



    $scope.updateProduct = function () {
        var id = this.ID
        var Productname = this.productname;
        var Productdetails = this.productdetails;
        var Productshortname = this.productshortname;
        var Bankid = this.bank;
        var Branchid = this.branchid;
        var date = $filter('date')(new Date(), 'shortDate');



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
            url: "http://localhost:53088/api/Products/" + id,
            crossdomain: true,
            data: {

                //database value = variables
                ID: id,
                ProductName: Productname,
                ProductDetails: Productdetails,
                ShortName: Productshortname,
                BankId: Bankid,
                BranchId: Branchid,
                UpdatedDate: date,
                Deleted: false


            },




            headers: { 'content-type': 'application/json' }
        })

        .success(function (responce) {
            alert('record updated successfully !!!')

            //further code will refresh the current database data on page
            $http.get('http://localhost:53088/api/View_Product')
             .success(function (res) {
                 $scope.getProduct = res;


             })
        })
        // code for clear textbox

        this.productname = null;
        this.productdetails = null;
        this.productshortname = null;
        this.bank = " ";
        this.branchid = null;
    }


    ////********Code for Cancel Button*********


    $scope.cancelAll = function () {

        this.productname = null;
        this.productdetails = null;
        this.productshortname = null;
        this.bank = " ";
        this.branchid = null;
    }




    //******Code for ADD Product*******

    //////POST
    //$scope.Productsaves = function () {


    //    var Productname = this.productname;
    //    var Productdetails = this.productdetails;
    //    var Productshortname = this.productshortname;
    //    var Bankid = this.bank;
    //    var Branchid = this.branchid;

    //    var date = $filter('date')(new Date(), 'shortDate');


    //    //condition will check if user has left any field vacant
    //    //if (serviceName == null || salePrise == null || purchasePrise == null || Unit == null || Unit == "" || category == null || category == "" || purchaseTax == null || purchaseTax == "" || salesTax == null || salesTax == "" || allowSales == null || allowSales == "" || allowPurchase == null || allowPurchase == "" || description == null) {
    //    //    alert("fill the info");
    //    //    return;
    //    //}

    //    //else {
    //    var request = $http({
    //        method: "post",
    //        url: "http://localhost:53088/api/Products",
    //        crossDomain: true,
    //        data: {
    //            //database value = variables
    //            //ID:null,
    //            ProductName: Productname,
    //            ProductDetails: Productdetails,
    //            ShortName: Productshortname,
    //            BankId: Bankid,
    //            BranchId: Branchid,
    //            CreatedDate: date,
    //            Deleted: false

    //        },
    //        headers: { 'Content-Type': 'application/json' }
    //    })
    //         .success(function (responce) {
    //             alert('data added successfully');
    //             $http.get('http://localhost:53088/api/View_Product')
    //         .success(function (res) {
    //             $scope.getProduct = res;
    //             console.log(res);

    //             //})

    //         })
    //         })
    //    this.productname = " ";
    //    this.productdetails = " ";
    //    this.productshortname = " ";
    //    this.bank = " ";
    //    this.branchid = " ";
    //}





    //*********DELETE button*************



    $scope.deleteProduct = function () {
        //$scope.textbox ngmodel=this
        var Product_id = this.id;

        $http.get('http://localhost:53088/api/View_Product/' + Product_id)
    .success(function (res) {


        $scope.deleteTextproducts = res;
        // alert('hgfh');

        var deleteTextproducts = $scope.deleteTextproducts;

        //=database
        var ID = deleteTextproducts.ID;
        var productname = deleteTextproducts.ProductName;
        var productdetails = deleteTextproducts.ProductDetails;
        var shortname = deleteTextproducts.ShortName;
        var bank = deleteTextproducts.BankId;
        var branchid = deleteTextproducts.BranchId;
        var date = $filter('date')(new Date(), 'shortDate');


        var request = $http({

            method: "put",
            url: "http://localhost:53088/api/Products/" + ID,
            crossdomain: true,
            data: {

                //db=var
                ID: ID,
                ProductName: productname,
                ProductDetails: productdetails,
                ShortName: shortname,
                BankId: bank,
                BranchId: branchid,
                DeletedDate: date,
                Deleted: true

            },

            headers: { 'content-type': 'application/json' }
        })

            .success(function (responce) {

                alert('record deleted successfully !!!')


                //further code will refresh the current database data on page
                $http.get('http://localhost:53088/api/View_Product/')
    .success(function (res) {


        $scope.getProduct = res;

    })
            })


    })
    }
})