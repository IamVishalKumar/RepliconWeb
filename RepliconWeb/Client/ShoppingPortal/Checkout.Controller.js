app.controller('CheckoutController', ['$scope', '$localStorage', '$filter', 'CheckoutService', function ($scope, $localStorage, $filter, checkoutService) {

    $scope.gridOptions = {
        enableCellEdit: false,
        enableCellEditOnFocus: false,
        enableFiltering: false,
        enableColumnMenus: false,
        enableSorting: false
    };

    $scope.gridOptions.columnDefs = [
        { name: 'Name', displayName: 'Product Name' },
        { name: 'Description', displayName: 'Product Description' },
        { name: 'Price', displayName: 'Price' },
        { name: 'Rating', displayName: 'Rating' },
        {
            name: 'Remove',
            cellTemplate: '<button ng-click="grid.appScope.removeFromCart(row.entity)">Remove from cart</button>'
        }
    ];

    $scope.removeFromCart = function (item) {
        var cart = $localStorage.cart;
        for (i = 0; i < cart.length; i++) {
            if (cart[i] == item.Id) {
                cart.splice(i, 1);
            }
        }
        $localStorage.cart = cart;
        GetCartList();
    }



    function GetCartList() {
        checkoutService.GetCartList().then(function (data) {
            if (data != null) {
                dataList = data.data;
                var list = [];
                angular.forEach(dataList, function (item) {
                    if ($localStorage.cart.indexOf(item.Id) !== -1) {
                        list.push(item);
                    }
                });
                $scope.gridOptions.data = list;
                var total = 0;
                for (count = 0; count < list.length; count++) {
                    total += list[count].Price;
                }
                $scope.totalPrice = total;
            }
        });
    }

    GetCartList();
}]);