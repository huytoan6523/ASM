window.quanAoController = function($scope,$http){

$scope.listQuanAO =[];
$http.get("http://localhost:3000/quanAo").then(function(response){
$scope.listQuanAO = response.data;
});



}


window.detailPro = function($scope,$http,$routeParams) {
    var id = $routeParams.id;
    $scope.products = {};
    $http.get('http://localhost:3000/quanAo/'+id).then(function(response) {
        $scope.products= response.data;
        console.log($scope.products);
    });
    
}