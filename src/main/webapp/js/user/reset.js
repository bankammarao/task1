trafficApp.controller('resetpwd',['$scope','$state','$stateParams','Trafficfactory','$rootScope','$timeout',function($scope,$state,$stateParams,Trafficfactory,$rootScope,$timeout){
$scope.reset = function(){
		$scope.d = $scope.mail;
	  Trafficfactory.forgot($scope.d).then(function(response) {
			$scope.forgot = response.status;
			$rootScope.Fmessage = $scope.forgot; 
			console.log($scope.Fmessage);
			  swal("",$scope.Fmessage +"","success" )
			$timeout(redirect,0.5);
			
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			} else {
				$scope.errorMessage = err; 
			}
		})
	$scope.mail="";
	  function redirect(){
		  $state.go('resetstatus');
	  }
	  }

$scope.savepwd = function(){
	$scope.token = $rootScope.token;
	Trafficfactory.savenewpwd($scope.token,$.param({newPassword: $scope.newPassword})).then(function(data){
		$scope.resmsg = data.status;
		$rootScope.ms = $scope.resmsg;
		  swal("",$scope.resmsg +"","success" )
		$state.go('/')
		//$timeout(rd,3000);
		
	})
	$scope.newPassword="";
	$scope.rpass="";
	 // function rd(){
	//	  $state.go('/');
	 // }
	
}




}]);