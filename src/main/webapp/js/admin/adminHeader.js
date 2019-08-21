/*trafficApp.directive("directive", function(){
	return{
		templateUrl:'partials/admin/adminHeader.html', 
		restrict:'E',
		replace:false,
		scope:{
		},
		controller: function($scope,$state,$stateParams,Trafficfactory,$cookieStore,$rootScope,$location){
			debugger;
			$scope.$on('$viewContentLoaded',function(){
			
				})
				$scope.id = localStorage.getItem('uId');
				console.log($scope.id);
				$scope.getid1 = localStorage.getItem('uId');
				console.log("Profile Id");
				console.log($scope.getid1);
				debugger;
				Trafficfactory.profilepic($scope.id).then(function(data){
					$scope.picture = data.resultData;
					console.log("Picture Data");
					//console.log($scope.picture.picData);
				},function(err){
					if(err){
						$scope.errorMessage = err;
					}else{
						$scope.errorMessage = err;
					}
				})
				 $scope.logout = function () {
			        delete $rootScope.user;
			        delete $rootScope.accessToken;
			        $cookieStore.remove('accessToken');
			        localStorage.clear();
			        $location.path("/login");
			    };
				
					Trafficfactory.userDashDetails($scope.id).then(function(data) {
							$scope.details = data;
							$scope.user = $scope.details[0].user;
							console.log($scope.details);
							console.log($scope.details[0].user.name);
							console.log($scope.user.name);
					})
		}
		}
})*/


trafficApp.directive("admindirective",function(){
	return{
		templateUrl : 'partials/admin/adminHeader.html', 
		restrict:'E'
		/*replace:true,
		scope:{
		},
		controller: function(){
			 $(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                 });
             }); 
		}*/

	}
})

trafficApp.directive("toggle",function(){
	return{
		templateUrl : 'partials/admin/adminToggle.html', 
		restrict:'E',
		replace:true,
		scope:{
		},
		controller: function($scope,$location,$cookieStore,$rootScope){
			 $scope.logout = function () {
			        delete $rootScope.user;
			        delete $rootScope.accessToken;
			        $cookieStore.remove('accessToken');
			        localStorage.clear();
			        $location.path("/login");
			    };
			/*   $(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                 });
             }); */
   
		}

	}
})
