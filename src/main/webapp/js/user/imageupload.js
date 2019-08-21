trafficApp.controller('imageuploadingCtrl', [ '$scope', 'TrafficService',
		'$state', '$rootScope', 'Trafficfactory',
		function($scope, TrafficService, $state, $rootScope, factory) {

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

			/*
			 * $scope.stepsModel = []; console.log($scope.stepsModel);
			 * $scope.imageUpload = function(event){ var files1 =
			 * event.target.files; //FileList object
			 * //console.log($scope.ReportData.images); for (var i = 0; i <
			 * files1.length; i++) { var file = files1[i]; var reader = new
			 * FileReader(); reader.onload = $scope.imageIsLoaded;
			 * reader.readAsDataURL(file); } }
			 * 
			 * $scope.imageIsLoaded = function(e){ $scope.$apply(function() {
			 * $scope.stepsModel.push(e.target.result); }); }
			 */

			
			/*Image Upload Code*/
			var u_id = localStorage.getItem('uId');
			$scope.uploadPic = function() {
				var formData = new FormData();
				var parms = $scope.picData;
				formData.append("picData", parms);
				/*
				 * angular.forEach(parms, function(k, v) { formData.append(k,
				 * v); })
				 */

				/*
				 * var imgData = $scope.userD.picData;
				 * console.log($scope.userD.picData);
				 */
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
			}
			/*Code End Image Upload Profile pic*/

		} ]);