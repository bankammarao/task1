trafficApp.directive("direct", function(){
	return{
		templateUrl:'partials/user/userheader.html', 
		restrict:'E',
		/*replace:false,
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
					//console.log("Picture Data");
					//console.log($scope.picture);
					//console.log($scope.picture.user.firstName);
				},function(err){
					if(err){
						$scope.errorMessage = err;
					}else{
						$scope.errorMessage = err;
					}
				})
				
				  $scope.logoutuser = function () {
					$scope.id = localStorage.getItem('uId');
					$scope.token = $rootScope.accessToken;
						Trafficfactory.logout($scope.id,$scope.token).then(function(res){
							$scope.logoutres = res.message;
							delete $rootScope.user;
					        delete $rootScope.accessToken;
					        $cookieStore.remove('accessToken');
					        localStorage.clear();
					        $location.path("/login");
						})
						
						
			    };
		}*/
		}
})
  
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/