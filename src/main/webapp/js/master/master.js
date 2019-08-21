trafficApp.controller('masterctrl',['$scope','$state','$stateParams','Trafficfactory','$rootScope',function($scope,$state,$stateParams,Trafficfactory,$rootScope){
	
	$rootScope.$on('$viewContentLoaded',function(){
		$scope.vehiclelist();
		$scope.offencelist();
		})
	
	
	$scope.vehicleadd = function(){
		var details=$scope.data;
		 
		Trafficfactory.vehicleType(details).then(function(data){
			$scope.message = data.resultData;
			$state.go('vehiclelist');
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
	}
	$scope.vehiclelist = function(){
		Trafficfactory.vehiclelist().then(function(data){
			$scope.details = data.resultData;
			
			console.log($scope.details);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
	}
	
	
	$scope.idfuntion = function(id){
			$scope.id=id;
			localStorage.setItem('vidd', $scope.id);
	}
	
	$scope.vehicledel = function(id){
		$scope.id = id;
		Trafficfactory.deletevehicletype($scope.id).then(function(data){
			$scope.message = data.resultData;
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
		$state.reload();
	}
	
	
	
	$scope.offenceadd = function(){
		var vid = localStorage.getItem('vidd');
		
		Trafficfactory.offencecat(vid,$.param({offenseCategory: $scope.offenseCategory})).then(function(data){
			$scope.hello = data.resultData;
			$state.go('offencelist');
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
	}
	
	var vid = localStorage.getItem('vidd');
	$scope.offencelist = function(){
		Trafficfactory.offencelist(vid).then(function(resp){
			$scope.res = resp.resultData;
			console.log($scope.res);
		})	
	}
	
	
	//get all offences 
	
	
}]);
