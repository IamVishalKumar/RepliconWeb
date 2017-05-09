app.factory('EmployeeService', ['$http', function ($http) {
    return {
        GetEmployeeData: getEmployeeData
    };

    function getEmployeeData()
    {
        return $http.get('http://localhost:61672/Employee.svc/GetEmployeeDetails');
    }
}]);