app.factory('CheckoutService', ['$http', '$filter', '$localStorage', function ($http, $filter, $localStorage) {
    return {
        GetCartList: getCartList
    }

    function getCartList() {
        return $http.get('http://localhost:61672/Product.svc/GetProductDetails');
    }
}]);