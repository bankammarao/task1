trafficApp.controller('adminProfile',['$scope','$state','$stateParams','Trafficfactory','$rootScope',function($scope,$state,$stateParams,Trafficfactory,$rootScope){
	$scope.id = localStorage.getItem('uId');
	console.log($scope.id);
	$scope.getid1 = localStorage.getItem('uId');
	console.log("Profile Id");
	console.log($scope.getid1);
	
$scope.$on('$viewContentLoaded',function(){
		$scope.sendDetails();
		$scope.userObject = {};
		$scope.propic();
		})

	$scope.sendDetails = function(){
		debugger;
		Trafficfactory.userPedit($stateParams.getid).then(function(data){
			$scope.userD = data; 
			$scope.userD.dob = new Date($scope.userD.dob);
			console.log($scope.userD);
		/*console.log($scope.user);
		console.log($scope.user.id);*/
			},function(err){
				if(err){
					$scope.errorMessage = err;
				}
			})
		}


	$scope.putData = function(){
		debugger;
		Trafficfactory.putUserdata($stateParams.getid,$scope.userD).then(function(data){
			$scope.dddd=data;
			console.log($scope.dddd);
			var id = localStorage.getItem('uId');
			console.log("id printed");
			console.log(id);
			/*$state.go('header.userStatic'({id}));*/
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
	}
	
	$scope.propic = function(){
		Trafficfactory.profilepic($stateParams.getid).then(function(data){
			$scope.picture = data;
			console.log("Picture Data");
			console.log($scope.picture);
			var pic = $scope.picture.picData;
			/*localStorage.setItem('picture',pic);*/
			console.log(pic);
			
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
	}
	
	/*Image Upload Code*/
	var u_id = localStorage.getItem('uId');
	$scope.uploadPic = function() {
		var formData = new FormData();
		var parms = $scope.picData;
		formData.append("picData", parms);
		
		Trafficfactory.uploadPropic(u_id, formData).then(function(data) {
			$scope.pic = data;
			console.log($scope.pic);
			//alert("Pic Uploaded Successfully");
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			} else {
				$scope.errorMessage = err;
			}
		})
	}
	/*Code End Image Upload Profile pic*/	
	/*image code*/
	$scope.imageUploadFunc = function(event) {

		var preview = document.getElementById('controller');
		var file = document.querySelector('input[type=file]').files[0];
		var reader = new FileReader();

		if (file) {

			reader.readAsDataURL(file);

		}

		reader.addEventListener("load", function() {

			preview.src = reader.result;
			$rootScope.$broadcast('event', preview.src)
		}, false);

	}
	/*code end*/
	
}]);