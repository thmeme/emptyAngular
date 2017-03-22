// MAIN CONTROLLER
function mainController($scope) {
    $scope.personList = [];
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.email = '';
    $scope.personAdd = function() {
        console.log('personAdd');
        $scope.personList.push({
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email
        });
        $scope.firstname = '';
        $scope.lastname = '';
        $scope.email = '';
    };
}
