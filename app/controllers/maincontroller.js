app.controller('mainCtrl', ['$scope','menuService',
    function ($scope,menuService) {
    $scope.menuitems = [];

       /*  menuService.getMenuItems()
             .success(function(response){
                 $scope.menuitems= response.menu;
         }).error(function(response){
                 console.log(response);
             });
*/
        menuService.getMenuItems()
                .then(function(data){
            $scope.menuitems = data.menu;
        });
    $scope.templateUrl = "app/templates/home.html";

    $scope.select = function (param) {
        $scope.templateUrl = param.templateUrl;
    }
}]);