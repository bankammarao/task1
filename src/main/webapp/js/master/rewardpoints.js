trafficApp.controller('rewardctrl',['$scope','$state','$stateParams','Trafficfactory','$rootScope',function($scope,$state,$stateParams,Trafficfactory,$rootScope){
	
	$rootScope.$on('$viewContentLoaded',function(){
		$scope.offenceAll();
		$scope.rewardsall();
		$scope.vechilelists();
		$scope.rewardgetbyid();
		})
	
	$scope.rewardsall = function(){
		Trafficfactory.getrewards().then(function(res){
			$scope.allrewards = res.resultData;
			console.log($scope.allrewards);
		
		})
	}
		
	$scope.offenceAll = function(){
		Trafficfactory.offenceall().then(function(resp){
			$scope.alloffence = resp.resultData;
		})
	}
	/*
	$scope.offencedel = function(id){
		$scope.id = id;
		Trafficfactory.deleteoffencecat($scope.id).then(function(data){
			$scope.msg = data.resultData;
			$state.reload();
		})
	}
	
	
	$scope.rewardadd = function(){
			$scope.reward = {
					"points":$scope.points,
					 "offense":$scope.y.selected
			}
		Trafficfactory.Rpointsadd($scope.reward).then(function(resps){
			$scope.messg = resps.resultData;
			$state.go('rewardlist');
		})
	}*/
	
	$scope.rewardgetbyid = function(){
		
		Trafficfactory.rewardgetid($stateParams.rewardE).then(function(repl){
			$scope.msg = repl.resultData;
			/*$scope.vehicle = $scope.offense.vehicle;*/
		})
	}
	
	/*$scope.rewardPutdata = function(id){
		debugger;
		
		Trafficfactory.rewardedit($stateParams.rewardE).then(function(data){
			$scope.rewardedit = data.resultData;
			$state.go('rewardlist');
		})
	}*/
	$scope.rewardPutdata = function(){
		debugger;
		$scope.new_data = {
					"offenseCategory":$scope.msg.offenseCategory,
					"penalty":$scope.msg.penalty,
					"rewardPoints":$scope.msg.rewardPoints	
		}
		Trafficfactory.rewardedit($stateParams.rewardE,$scope.new_data).then(function(rl){
		$scope.kl = rl.resultData;
		$state.go('rewardlist');
		})
		}
	$scope.rewarddel = function(id){
		$scope.Id = id;
		Trafficfactory.deleterewardpnts($scope.Id).then(function(data){
			$scope.msg = data.resultData;
			$state.reload();
		})
	}
	
	
	
	
	
	/*calling of vechile list from admin panel*/
	$scope.vechilelists = function(){
		Trafficfactory.vehiclelist().then(function(data){
			$scope.details = data.resultData;
			//console.log($scope.details);
		})
	}
	/*calling vehicle in offence to repeat data*/
	$scope.oidfuntion = function(id){
		$scope.Id=id;
		localStorage.setItem('vidf', $scope.Id);
		$scope.offencelist();
	}
	/*code ended*/
	/*calling of offence list*/
	
	$scope.offencelist = function(){
		var vidD = localStorage.getItem('vidf');
		Trafficfactory.offencelist(vidD).then(function(resp){
			$scope.res = resp.resultData;
			console.log($scope.res);
		})	
	}
	/*code ended*/
	
	
}]);
