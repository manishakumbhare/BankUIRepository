
// create the module and name it app
var app = angular.module('app.login', ['ngRoute', 'ngCookies']);
 
// create the controller and inject Angular's $scope
app.controller('loginController', function ($rootScope, $scope, $http, $location, $routeParams, $filter, $cookieStore) {
 
    $scope.mBank = 'mBank Login';
    $scope.logindiv = true;
    $scope.forgetdiv = false;
    var linkglobal = 'http://localhost:53088/api/'; //Bank Bhandara
   
    //code for remeber me 
    var Username = $cookieStore.get('username');
    $scope.username = Username;
    var PassWord = $cookieStore.get('password');
    $scope.password = PassWord;
    //end code for remeber me 

    $scope.remeberme = function () {
        var rememberMe = this.remember;
        alert(rememberMe);
        if (rememberMe == true) {
            var userName = this.username;
            var Password = this.password;
            $cookieStore.put("username", userName);
            $cookieStore.put("password", Password);
        }
        else {
            var userName = "";
            var Password = "";
            $cookieStore.put("username", userName);
            $cookieStore.put("password", Password);
        }
    }
   
    $scope.buttonclick = function () {

        var username = this.username;
        var password = String(this.password);

        $scope.loadLoginFail = false;
        $scope.loadLoginUserFail = false;
        $scope.loadLoginPasswordFail = false;

        $scope.loadLoginFailInt = false;
        $scope.detailsLogin = false;
        $scope.loadLogin = true;
         

        if (this.username == null || this.password == null) {


            $scope.loadLogin = false;

            $scope.loadLoginFail = false;
            $scope.loadLoginUserFail = false;
            $scope.loadLoginPasswordFail = false;

            $scope.loadLoginFailInt = false;

            $scope.detailsLogin = true;
           


        }
        else {
           

            $scope.myForm.$setPristine();
            $http.get('http://localhost:53088/api/SP_LoginCredentials?userName=' + username + '&passWord=' + password)
            .success(function (response) {
                var role = response;

                var count = role.length;
                //alert(count);


                if (count > 0) {

                    for (var i = 0; i < count; i++) {

                        if (role[i].SuperAdminName == username && role[i].Password == password) {
                            //alert( && parseInt(users[i].role_id) == 2);
                            //    alert(parseInt(users[i].bank_id));
                           // $location.path('/dashboard'); bank
                            $location.path('/bank');
                            //alert("allow access");
                        }
                    }
                }
                else {
                    alert('Invalid username and password');
                }
            }
            )
        }
      

        var doParseInt = function (val) {
            if (val && val != "")
                return parseInt(val);
        }



    }

    $scope.show = function () {
        $scope.logindiv = false;
        $scope.forgetdiv = true;
    }

    $scope.forgotpwd = function () {
        var username = this.fusername;
        var password = this.fpassword;
        var retyprpassword = this.frpassword;


        $http.get(linkglobal + 'SP_getSuperAdminDetail?username=' + username)
      .success(function (response) {
          console.log(response);
          var role = response;

          var count = role.length;
          var SuperAdminName;
          var Password;
          var Id;
          if (count > 0) {
              for (var i = 0; i < count; i++) {

                  SuperAdminName = role[i].SuperAdminName;
                  Password = role[i].Password;
                  Id = role[i].ID;

                  alert(SuperAdminName);
                  alert(Password);
                  alert(Id);
              }

          }


          if (password == retyprpassword) {
              var request = $http({
                  method: "put",
                  url: "http://localhost:53088/api/SuperAdmins/" + Id,
                  crossDomain: true,
                  data: {
                      ID:Id,
                      SuperAdminName: SuperAdminName,
                      Password: password
                  },
                  headers: { 'Content-Type': 'application/json' },

              }).success(function (data) { alert('Password Changed'); })

          }
      })
    }

    });//last