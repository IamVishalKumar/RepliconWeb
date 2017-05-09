app.controller('ProductController', ['$scope', '$localStorage', 'ProductService', function ($scope, $localStorage, productService) {

    var dataList = {};
    var cart = [];

    $scope.gridOptions = {
        enableCellEdit: false,
        enableCellEditOnFocus: false,
        enableFiltering: true
    };

    $scope.gridOptions.columnDefs = [
        { name: 'Name', displayName: 'Product Name' },
        { name: 'Description', displayName: 'Product Description' },
        { name: 'Price', displayName: 'Price' },
        { name: 'Rating', displayName: 'Rating' },
        {
            name: 'AddToCart',
            enableFiltering: false,
            enableColumnMenu: false,
            enableSorting: false,
            cellTemplate: 'Client/ShoppingPortal/AddToCart.html'
        }
    ];



    $scope.addToCart = function (item) {
        if (angular.isUndefined($localStorage.cart) || angular.isUndefined($localStorage.cart.length) || $localStorage.cart.length === 0) {
            cart.push(item.Id);
            $localStorage.cart = cart;
            $scope.addedToCart = $localStorage.cart.length === 0 ? 0 : $localStorage.cart.length;
        }
        else {
            cart = $localStorage.cart;
            var isItemExist = false;
            for (index = 0; index < cart.length; index++) {
                if ($localStorage.cart[index] == item.Id) {
                    isItemExist = true;
                    alert('Product already added to cart.');
                }
            }

            if (!isItemExist) {
                cart.push(item.Id);
                $localStorage.cart = cart;
                $scope.addedToCart = $localStorage.cart.length === 0 ? 0 : $localStorage.cart.length;
            }
        }
        
    };

    function GetDetails() {
        productService.GetProductList().then(function (data) {
            if (data != null) {
                dataList = data.data;
                $scope.gridOptions.data = dataList;
            }
        });

        if (angular.isUndefined($localStorage.cart) || angular.isUndefined($localStorage.cart.length) || $localStorage.cart.length === 0) {
            $scope.addedToCart = 0;
        }
        else {
            $scope.addedToCart = $localStorage.cart.length;
        }
    }

    GetDetails();
}]);