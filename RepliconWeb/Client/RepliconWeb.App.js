var app = angular.module('RepliconWebApp', ['ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'ngRoute', 'ngStorage']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/EmployeeDetails',
        {
            templateUrl: '/Client/Employee/Employee.html',
            controller: 'EmployeeController'
        });

    $routeProvider.when('/ShoppingPortal',
        {
            templateUrl: '/Client/ShoppingPortal/Product.html',
            controller: 'ProductController'
        });

    $routeProvider.when('/Checkout',
        {
            templateUrl: '/Client/ShoppingPortal/Checkout.html',
            controller: 'CheckoutController'
        });

    $routeProvider.otherwise({
        templateUrl: '/Client/Employee/Employee.html'
    });
}]);