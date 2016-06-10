


var app = angular.module("RobotBuster", []); 
app.controller("rbCtrl", function($scope) {
    
    $scope.contentclass = "nope";

    $scope.stuffs = ["This", "Is", "Not","Tedious"];
    
    $scope.addStuffs = function () {
        $scope.stuffs.push($scope.addThis);
    } 
    $scope.hash = function () {
    	$scope.stuffs.push(CryptoJs.MD5($scope.addThis));
    }

    $scope.remove = function(array, index){
    	array.splice(index, 1);
    }
});

