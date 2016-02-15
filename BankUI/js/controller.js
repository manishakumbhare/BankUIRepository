
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp',
    ['ngRoute',
        'app.login',
        'app.dashboard',
        'app.sidebar',
        'app.admin',
        'app.bank',
        'app.adminListView',
        'app.bankListView',
       'app.Product',
       'app.branch',
      'app.branchView',
      'app.productView'
       

    ]);


// configure our routes
scotchApp.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        // route for the login page
        .when('/', {
            templateUrl: 'pages/login/login.html',
            controller: 'loginController'
        })

        .when('/dashboard',
        {
            templateUrl: 'pages/dashboard/dashboard.html',
            controller: 'dashboardController'
        })

        .when('/sidebar',
        {
            templateUrl: 'pages/sidebar/sidebar.html',
            controller: 'sidebarController'
        })

         .when('/admin',
        {
            templateUrl: 'pages/SuperAdmin/Admin/admin.html',
            controller: 'adminController'
        })
         .when('/Product',
        {
            templateUrl: 'pages/Admin/Product/Product.html',
            controller: 'ProductController'
        })


         .when('/bank',
        {
            templateUrl: 'pages/SuperAdmin/Bank/bank.html',
            controller: 'bankController'
        })
         .when('/branch',
        {
            templateUrl: 'pages/Admin/Branch/branch.html',
            controller: 'branchController'
        })

         .when('/viewAdminList',
        {
            templateUrl: 'pages/SuperAdmin/view/adminList/adminListView.html',
            controller: 'adminListViewController'
        })
          .when('/viewBankList',
        {
            templateUrl: 'pages/SuperAdmin/view/bankList/bankListView.html',
            controller: 'bankListViewController'
        })
         .when('/viewBranchList',
        {
            templateUrl: 'pages/Admin/View/branchListView/branchListView.html',
            controller: 'branchViewController'
        })
         .when('/viewProductList',
        {
            templateUrl: 'pages/Admin/View/productListView/productListView.html',
            controller: 'productViewController'
        })

        .when('/trxbyacctype/:exbank_id', {templateUrl: 'pages/AccountType/accData.html',controller: 'accDataController'})
        .when('/all_transactions', { templateUrl: 'pages/transactions/all_transactions/all_transactions.html', controller: 'all_transactionsController' })
        .when('/datewisetransactions', { templateUrl: 'pages/transactions/dateWiseTransaction/datewise_transactions.html', controller: 'datewise_transactionsController' })
        .when('/approvetransaction', { templateUrl: 'pages/transactions/approve_transactions/approve_transactions.html', controller: 'approve_transactionsController' })
        .when('/notapprovetransaction', { templateUrl: 'pages/transactions/notApprove_transactions/notApprove_transactions.html', controller: 'notApprove_transactionsController' })
        .when('/today_transactions', { templateUrl: 'pages/transactions/today_transactions/today_transactions.html', controller: 'today_transactionsController' })
        .when('/customers', { templateUrl: 'pages/search/seachCustomer/search_customer/search_customer.html', controller: 'search_customerController' })
        .when('/customer_details/:cust_id', { templateUrl: 'pages/search/seachCustomer/customer_detail/customer_detail.html', controller: 'customer_detailsController' })
        .when('/search_agent', { templateUrl: 'pages/search/seachAgent/search_agent.html', controller: 'search_agentssController', })
        .when('/agentTransaction/:user_id', { templateUrl: 'pages/search/seachAgent/agent_transaction.html', controller: 'search_agentssTrxnController' })
        .when('/reportCustomer', { templateUrl: 'pages/Report/ReportCustomer/ReportCustomer.html', controller: 'ReportCustomerController' })
        .when('/reportAgent', { templateUrl: 'pages/Report/ReportAgent/ReportAgent.html', controller: 'ReportAgentController' })
        .when('/reportEOD', { templateUrl: 'pages/Report/EOD/EOD.html', controller: 'EODController' })
        .when('/createcustomer', { templateUrl: 'pages/create/create_customer/create_customer.html', controller: 'create_customerController' })
        .when('/req_cust', { templateUrl: 'pages/create/RequestedCustomer/RequestedCustomer.html', controller: 'RequestedCustomerController' })
        .when('/approveCust/:user_id', { templateUrl: 'pages/create/approveCustomer/approveCustomer.html', controller: 'approveCustomerController' })
        .when('/home', { templateUrl: 'pages/profile/profile.html', controller: 'profileController' })
        .when('/createusers', { templateUrl: 'pages/create/create_user/create_user.html', controller: 'userController' })
        .when('/createbranch', { templateUrl: 'pages/create/create_branch/create_branch.html', controller: 'branchController' })
        .when('/depositeAmt/:user_id', { templateUrl: 'pages/search/accDetails/custAccDetails.html', controller: 'custAccDetailsController' })
        .when('/createAccount', { templateUrl: 'pages/create/createAccount/createAccount.html', controller: 'create_accountController' })
        .when('/createProduct', { templateUrl: 'pages/create/createProduct/create_product.html', controller: 'create_productController' })

    
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
 
