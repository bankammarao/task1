trafficApp.controller('ReportCntrl',['$scope','Trafficfactory','$state',function($scope,Trafficfactory,$state,$rootScope){
	
	$scope.$on('$viewContentLoaded',function(){
		$scope.vechilelists();
		})
	
	/*$scope.vehicleType=[];
	$scope.offenceCategory=[];
*/		$scope.getid1 = localStorage.getItem('uId');
		console.log("Profile Id")
		console.log($scope.getid1);
	// multiple images post
		$scope.postrprt = function(){
			
			console.log($scope.files);
			var img1 = $scope.files[0]._file;
			var img2 = $scope.files[1]._file;
			var img3 = $scope.files[2]._file;
			var img4 = $scope.files[3]._file;
			//console.log(img1);
		console.log($scope.ReportData);
		
		var formData = new FormData();
		var params =$scope.ReportData;
		var p1 = $scope.rd1.vehicleType;
		var p2 = $scope.rd2.offenceCategory;
		$.each(params, function(k, v) {
		formData.append(k, v);
		console.log(formData);
		});
		
		formData.append('vehicleType',p1);
		formData.append('offenceCategory',p2);
		formData.append('img1',img1);
		formData.append('img2',img2);
		formData.append('img3',img3);
		formData.append('img4',img4);
		
		console.log(formData);
		Trafficfactory.postreport($scope.getid1,formData).then(function(data){
			$scope.Rdata = data;
			console.log($scope.Rdata);
			swal("",$scope.Rdata.message +"","success" )
			//console.log($scope.Rdata.id);
			$state.go('Dashboard');
			var Rid = $scope.Rdata.id;
			localStorage.setItem('Rid', $scope.Rdata.id);
			console.log('rid is pr');
			console.log(Rid);
		})
			
	}
		
		
		//calling of google directive in controller
		$scope.gPlace;
		/*calling of vechile list from admin panel*/
		$scope.vechilelists = function(){
			Trafficfactory.vehiclelist().then(function(data){
				$scope.details = data.resultData;
				//console.log($scope.details);
			})
		}
		/*code ended*/
		/*calling of offence list*/
		
		$scope.offencelist = function(){
			var vid = localStorage.getItem('vidd');
			Trafficfactory.offencelist(vid).then(function(resp){
				$scope.res = resp.resultData;
				console.log($scope.res);
			})	
		}
		/*code ended*/
		$scope.idfuntion = function(id){
			$scope.id=id;
			localStorage.setItem('vidd', $scope.id);
			$scope.offencelist();
	}
		var date = new Date();
		var date1 = new Date();
		date.setDate(date.getDate()-2);
		date1.setDate(date1.getDate());
		$('#date').datepicker({ 
		    startDate: date,
		    endDate:date1
		 });
			
}]);

/*Google location directive */
trafficApp.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {country: 'in'}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});
	/*code ended here */


trafficApp.directive('ngFileModel', ['$parse', function ($parse) {
	 return {
	 restrict: 'A',
	 link: function (scope, element, attrs) {
	 var model = $parse(attrs.ngFileModel);
	 var isMultiple = attrs.multiple;
	 var modelSetter = model.assign;
	 element.bind('change', function () {
	 var values = [];
	 angular.forEach(element[0].files, function (item) {
	 var value = {
	 // File Name 
	/* name: item.name,
	 //File Size 
	 size: item.size,
	 //File URL to view 
	 url: URL.createObjectURL(item),*/
	 // File Input Value 
	 _file: item
	 };
	 values.push(value);
	 });
	 scope.$apply(function () {
	 if (isMultiple) {
	 modelSetter(scope, values);
	 } else {
	 modelSetter(scope, values[0]);
	 }
	 });
	 });
	 }
	 };
	 }])