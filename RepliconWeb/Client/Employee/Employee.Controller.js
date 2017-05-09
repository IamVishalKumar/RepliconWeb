
app.controller('EmployeeController', ['$scope', 'EmployeeService', '$filter', function ($scope, employeeService, $filter) {

    var dataList = {};

    $scope.gridOptions = {
        enableCellEdit: false,
        enableCellEditOnFocus: false,
        enableFiltering: false
    };

    $scope.gridOptions.columnDefs = [
        { name: 'EmployeeName', displayName: 'Employee Name' },
        { name: 'EmployeeType', displayName: 'Employee Type' },
        { name: 'Designation', displayName: 'Designation' }
    ];

    $scope.refreshData = function () {
        $scope.gridOptions.data = $filter('filter')(dataList, { EmployeeType: $scope.searchText }, undefined);
    };

    function GetEmployeeData() {
        employeeService.GetEmployeeData().then(function (data) {
            if (data != null) {
                dataList = data.data;
                $scope.gridOptions.data = dataList;
            }
        });
    }

    GetEmployeeData();
}]);
