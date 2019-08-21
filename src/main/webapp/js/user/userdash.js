trafficApp.controller("userdash", function($scope, $http, Trafficfactory,$stateParams) {
	/*$scope.$on('$viewContentLoaded', function() {
		$scope.urD();
	})*/
	
/*	Get All reports*/
 
/*  Trafficfactory.userDashboard().then(function(data) {
		$scope.details = data;
		console.log($scope.details);
	}, function(err) {
		if (err) {
			$scope.errorMessage = err;
		}
	})*/
	
	// pagination
	$scope.maxSize = 5; // Limit number for pagination display number.
	$scope.totalCount = 0; // Total number of items in all pages. initialize as
							// a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.-->
	$scope.pageSizeSelected = 5; // Maximum number of items per page.

	//getting the user id from Local storage
	/*$scope.id = localStorage.getItem('uId');
	console.log($scope.id);*/
/*	$scope.getDash = function(){
		debugger;
	Trafficfactory.userDashDetails($scope.id,$scope.pageIndex,$scope.pageSizeSelected).then(function(data) {
		$scope.details = data.resultData;
		console.log($scope.details.length);
		$scope.length = $scope.details.length;
		console.log($scope.details);
		$('.disabledDrop').attr('disabled', true)
		$scope.totalCount = data.count;
		console.log($scope.totalCount);
	}, function(err) {
		if (err) {
			$scope.errorMessage = err;
		}
	})
	}*/
		  
	    // Loading employees list on first time
/*	$scope.getDash();

	// This method is calling from pagination number
	$scope.pageChanged = function() {
		$scope.getDash();
	};*/

	/*
	 * //This method is calling from dropDown $scope.changePageSize = function () {
	 * $scope.pageIndex = 1; $scope.getAdminList(); };
	 */
	

/*	$scope.View = function() {
		debugger;
		Trafficfactory.imgView($stateParams.userId).then(function(data) {
			console.log($stateParams.userId);
			$scope.user = data;
			console.log($scope.user);
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}
		})
	}*/
			$scope.View = function(userId) {
					debugger;
					Trafficfactory.imgView(userId).then(function(data) {
						console.log(userId);
						$scope.user = data.resultData;
						console.log($scope.user);
					}, function(err) {
						if (err) {
							$scope.errorMessage = err;
						}
					})
				}
			$scope.urD = function(){
				Trafficfactory.reportdetails($stateParams.report_id).then(function(data){
					$scope.Udata = data.resultData;
				})
			}
			$scope.userid = localStorage.getItem('uId');
			
			$scope.uchallan = function(){
				Trafficfactory.userchallan($scope.userid).then(function(res){
					$scope.challan = res.resultData;
				})
			}
});