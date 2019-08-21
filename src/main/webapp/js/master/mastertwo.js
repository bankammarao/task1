trafficApp.controller('mstrctrl',['$scope','$state','$stateParams','Trafficfactory','$rootScope',function($scope,$state,$stateParams,Trafficfactory,$rootScope){
	
	$rootScope.$on('$viewContentLoaded',function(){
		$scope.vehicleEdit();
		$scope.getOffence();
		})
	/*getting data from vehicle Api*/
	$scope.vehicleEdit = function(){
		Trafficfactory.vehiclegetbyid($stateParams.edit).then(function(response){
			$scope.dataEdit = response.resultData;
			console.log($scope.dataEdit);
		})
	}

	//put data to vehicle type
	$scope.vehiclePutdata = function(){	
			$scope.vehicleType =$scope.dataEdit.vehicleType;
		Trafficfactory.vehicleedit($stateParams.edit,$.param({vehicleType:$scope.vehicleType})).then(function(data){
			$scope.messageV = data.resultData;
			console.log($scope.messageV);
			$state.go('vehiclelist');
		})
	}
	/*getoffence By id*/
	$scope.getOffence = function(){
		Trafficfactory.offencebyid($stateParams.OffE).then(function(response){
			$scope.editdata = response.resultData;
			$scope.vechilel = $scope.editdata.vehicle;
			console.log($scope.editdata);
		})
	}
	//put data for offence
	$scope.offencePutdata = function(){		
		$scope.offenseType=$scope.editdata.offenceCategory
		Trafficfactory.offenceedit($stateParams.OffE,$.param({offenseType:$scope.offenseType})).then(function(data){
			$scope.messageV = data.resultData;
			console.log($scope.messageV);
			$state.go('offencelist');
	})
	}
	
	
}]);