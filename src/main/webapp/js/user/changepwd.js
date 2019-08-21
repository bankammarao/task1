trafficApp.controller('changePwd',['$scope','$state','$stateParams','Trafficfactory','$rootScope','$timeout',function($scope,$state,$stateParams,Trafficfactory,$rootScope,$timeout){
	
	
	var uid = localStorage.getItem('uId');
	$scope.changepass = function(){
	/*	var formData = new FormData();
		var oldPwd =$scope.oldPwd;
		var newPwd =$scope.newPwd;
		formData.append("oldPwd",oldPwd);
		formData.append("newPwd",newPwd);
		*/
		Trafficfactory.changepwd(uid,$.param({oldPwd: $scope.oldPwd,newPwd: $scope.newPwd})).then(function(response) {
			$scope.PasswordRes = response;
			$scope.Pmessage = $scope.PasswordRes.message; 
			console.log($scope.message);
			$timeout(redirect, 2000);
			//alert("Password updated Successfully");
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			} else {
				$scope.errorMessage = err; 
			}
		})
		
	}
	function redirect(){
		$state.go('Dashboard');
	}
	
	
	$scope.inputType = 'password';
	  
	  // Hide & show password function
	  $scope.hideShowPassword = function(){
	    if ($scope.inputType == 'password')
	      $scope.inputType = 'text';
	    else
	      $scope.inputType = 'password';
	  }
	
	
}]);	