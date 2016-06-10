


var app = angular.module("RobotBuster", []); 
app.controller("rbCtrl", function($scope) {
    
    $scope.contentclass = "bool-nope";
    $scope.verified = false;

    $scope.originalStuffs = ["This ", "could ", "have ", "been ", "giraff ", "tedious ", "but ", "it ", "hawk", "isn't "];

    $scope.stuffs = ["This ", "could ", "have ", "been ", "giraff ", "tedious ", "but ", "it ", "hawk", "isn't "];
    
    $scope.inputOrder = [];
    $scope.inputString = "";


    $scope.remove = function(array, index){
    	$scope.inputString += array[index];
    	array.splice(index, 1);
    	var str = "This could have been tedious but it isn't "
    	if ($scope.inputString.toLowerCase().indexOf(str.toLowerCase()) != -1){
    		//$scope.contentclass = "bool-yay-no-robot";
    		$scope.verified = true;
    	}
    }

    $scope.retry = function(){
    	$scope.stuffs = [];
    	$scope.stuffs = Array.from($scope.originalStuffs);
    	$scope.inputString = "";
    	$scope.contentclass = "bool-nope";
    	$scope.verified = false;
    }

//http://www.republiquedesmangues.fr/





    $scope.addStuffs = function () {
        $scope.stuffs.push($scope.addThis);
    } 
    $scope.hash = function () {
    	$scope.stuffs.push(CryptoJs.MD5($scope.addThis));
    }


    
});

