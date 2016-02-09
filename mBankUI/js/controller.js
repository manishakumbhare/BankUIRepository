
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp',
    ['ngRoute',
        'app.login',

    ]);


// configure our routes
scotchApp.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        // route for the login page
        .when('/', {
            templateUrl: 'pages/login/login.html',
            controller: 'loginController'
        })
      
    
});

scotchApp.filter('datetime', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }

        var _date = $filter('date')(new Date(input), 'MMM-yyyy');

        return _date.toUpperCase();

    };
})

scotchApp.filter('yearFormat', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }

        var _date = $filter('date')(new Date(input), 'yyyy');

        return _date.toUpperCase();

    };
})


scotchApp.filter('time', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }

        var _date = $filter('date')(new Date(input), 'hh:mm:ss');

        return _date.toUpperCase();

    };
})



scotchApp.filter('yearDDMM1', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }

        var _date = $filter('date')(new Date(input), 'dd-MM-yyyy');

        return _date.toUpperCase();

    };
})


scotchApp.filter('yearDDMM', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }

        var _date = $filter('date')(new Date(input), 'dd-MM-yyyy');

        return _date.toUpperCase();

    };
})

 
scotchApp.filter('unique', function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function (dt2) {
            var key = dt2[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(dt2);
            }
        });
        return output;
    };
})
 
