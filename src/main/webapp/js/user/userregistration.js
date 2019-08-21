trafficApp.controller('RegCtr',function($scope,Trafficfactory,$http,$state,$timeout,$rootScope){
	$scope.userR = {};
	$scope.u={};
	// Navigation functions
	$scope.stage = "";
	$scope.next = function (stage) {
		$scope.direction = 1;
		$scope.stage = stage;
		if ($scope.frm.$valid) {
			$scope.direction = 1;
			$scope.stage = stage;
		}
	};
	$scope.back = function (stage) {
		$scope.direction = 0;
		$scope.stage = stage;
	};
	
	var vm = this;
	
	$scope.registerForm = function(){
		$scope.mapper = JSON.stringify($scope.userR);
		console.log($scope.mapper);
		var formData = new FormData();
		var parms = $scope.u.file;
		formData.append("file", parms);
		formData.append("mapper",$scope.mapper);
		Trafficfactory.registration(formData).then(function success(response){
			$scope.data = response;
			$rootScope.errorMessage = response.errorMessage;
			$rootScope.Fmessage = response.message;
			console.log($scope.data);
			$state.go('regstatus');
		})
	}
	
});