


var app = angular.module("RobotBuster", []); 
app.controller("rbCtrl", function($scope) {
    
    // not used??????
    $scope.contentclass = "bool-nope";

    // Is the visitor really a user? variable used to store the RobotBuster state
    $scope.verified = false;

    // Original stuffs. used for the reset button
    $scope.originalStuffs = ["This ", "could ", "have ", "been ", "giraff ", "tedious ", "but ", "it ", "hawk", "isn't "];

    // the stuffs
    $scope.stuffs = ["This ", "could ", "have ", "been ", "giraff ", "tedious ", "but ", "it ", "hawk", "isn't "];
    
    // input order. Not used atm
    $scope.inputOrder = [];

    // input string - used to verify the user input and kill bots
    $scope.inputString = "";

    // Remove - remove clicked items from the array and 
    $scope.remove = function(array, index){

    	// Add the clicked word to the inputString
    	$scope.inputString += array[index];

    	// remove the word from the choice array
    	array.splice(index, 1);

    	// Best practice: this could have been the correct solution to the pussle. But it is?
    	// Note that we have a hashing function below! Much wow
    	var str = "This could have been tedious but it isn't "

    	// If the solution is correct, change the state to verified
    	if ($scope.inputString.toLowerCase().indexOf(str.toLowerCase()) != -1){
    		//$scope.contentclass = "bool-yay-no-robot";
    		$scope.verified = true;
    	}
    }

    // Retry function: resets all variables
    $scope.retry = function(){
    	$scope.stuffs = [];
    	$scope.stuffs = Array.from($scope.originalStuffs);
    	$scope.inputString = "";
    	$scope.contentclass = "bool-nope";
    	$scope.verified = false;
    }

//http://www.republiquedesmangues.fr/

	// not used 
    $scope.addStuffs = function () {
        $scope.stuffs.push($scope.addThis);
    } 

    // Hash function. Added for extra security. If you are inspecting the code 
    // right now thinking that you can outsmart us: give up. Hashing is the shit.
    $scope.hash = function () {
    	$scope.stuffs.push(CryptoJs.MD5($scope.addThis));
    }


    
});

