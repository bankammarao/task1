trafficApp.controller('userPCtrl',['$scope','$state','$stateParams','Trafficfactory','$rootScope',function($scope,$state,$stateParams,Trafficfactory,$rootScope){
	
	console.clear();
	$scope.id = localStorage.getItem('uId');
	console.log($scope.id);
	$scope.getid1 = localStorage.getItem('uId');
	console.log("Profile Id");
	console.log($scope.getid1);
	
$scope.$on('$viewContentLoaded',function(){
		$scope.getdetails();
		$scope.userObject = {};
		$scope.propic();
		})

	$scope.getdetails = function(){
		debugger;
		Trafficfactory.userPedit($stateParams.getid).then(function(data){
			$scope.userD = data.resultData; 
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
		$scope.mapp = JSON.stringify($scope.userD);
		$scope.files = $scope.u.file;
		var formData = new FormData();
		formData.append("mapper",$scope.mapp);
		formData.append("file",$scope.files);
		Trafficfactory.putUserdata($stateParams.getid,formData).then(function(data){
			$scope.dddd=data.resultData;
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
		$state.reload();
	}
	$scope.propic = function(){
		Trafficfactory.profilepic($stateParams.getid).then(function(data){
			$scope.picture = data.resultData;
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
			$scope.pic = data.resultData;
			console.log($scope.pic);
			//alert("Pic Uploaded Successfully");
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			} else {
				$scope.errorMessage = err;
			}
		})
		$scope.putData();
	}
	/*Code End Image Upload Profile pic*/	
	
	
	
/*	$scope.uploadfile = function(){
		var formData = new FormData();
		var parms = $scope.picData;
		formData.append("picData", parms);
		
		Trafficfactory.uploadPropic(u_id, formData).then(function(data) {
			$scope.pic = data;
			console.log($scope.pic);
			alert("Pic Uploaded Successfully");
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			} else {
				$scope.errorMessage = err;
			}
		})
	}*/
	
	
	
	
	
	
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
	
	/*Pincode auto fill*/
	 /*$scope.$watch("userD.zipCode", function (newVal,oldVal) {

			if(newVal  && newVal.length >= 6){
				Trafficfactory.postalcode(newVal,oldVal).then(function(response){
					$scope.postal = response;
					$scope.userD.state = $scope.postal.PostOffice[0].State;
					$scope.userD.city = $scope.postal.PostOffice[0].District;
					},function(response){
							$log.log("The Invalid Entry");
					});
				};
	 	});*/
	 /*Postal Code ends Here*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
}]);