app.factory('ProductService', ['$http', function ($http) {
    return {
        GetProductList: getProductList
    }

    function getProductList() {
        return $http.get('http://localhost:61672/Product.svc/GetProductDetails');
    }
}]);