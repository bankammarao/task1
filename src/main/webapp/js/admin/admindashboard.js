trafficApp.controller("adminContrl", function($scope, Trafficfactory,
		$stateParams, $state) {
	$scope.$on('$viewContentLoaded', function() {
		$scope.getAllTest();
		$scope.getByIdTestCode();
		$scope.getAllSponsorsList();
	})
	$scope.createtest = function(createdata) {
		debugger;
		Trafficfactory.creattest(createdata).then(function(data) {
			$scope.comment = data.resultData;
			debugger;
			console.log($scope.comment);
			$state.go('test');
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}

	$scope.getAllTest = function() {
		debugger;
		Trafficfactory.getAllTestCodes().then(function(data) {
			$scope.testDataList = data.resultData;
			console.log($scope.testDataList);
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}

	$scope.updateTestCode = function(id) {
		debugger;
		Trafficfactory.updateTestCode(id).then(function(data) {
			$scope.testDataList = data.resultData;
			console.log($scope.testDataList);
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}

	$scope.deletetestcode = function(id) {
		debugger;
		Trafficfactory.deletetestcode(id).then(function(data) {
			$scope.testDataList = data.resultData;
			if ($scope.testDataList == null) {
				debugger;
				$scope.getAllTest();
			}
			console.log($scope.testDataList);
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}
	

	$scope.deleteSponsor = function(id) {
		debugger;
		Trafficfactory.deleteSponsor(id).then(function(data) {
			$scope.testDataList = data.resultData;
			if ($scope.testDataList == null) {
				debugger;
				$scope.getAllSponsorsList();
			}
			console.log($scope.testDataList);
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}


	
	$scope.getByIdTestCode = function(id) {
		debugger;
		Trafficfactory.getByIdTestCode(id).then(function(data) {
			debugger;
			$scope.comment = data.resultData;
			console.log($scope.comment);
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}

	$scope.getAllSponsorsList = function() {
		debugger;
		Trafficfactory.getAllSponsorsList().then(function(data) {
			debugger;
			$scope.AllSponsorsList = data.resultData;
			console.log($scope.AllSponsorsList);
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}
	$scope.createsponsor = function(sponsor) {
		debugger;
		Trafficfactory.createsponsor(sponsor).then(function(data) {
			$scope.sponsor = data.resultData;
			debugger;
			console.log($scope.sponsor);
			$state.go('sponsor');
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}
	
	$scope.createuser = function(user) {
		debugger;
		Trafficfactory.createuser(user).then(function(data) {
			$scope.user = data.resultData;
			debugger;
			console.log($scope.user);
			$state.go('createuser');
		}, function(err) {
			if (err) {
				$scope.errorMessage = err;
			}

		})
	}

})

/* Admin Status */
/*
 * $scope.btns = [ { name : 'Pending for Clarification', value : 'Pending For
 * Clarification', isDisabled : false }, { name : 'Approve', value : 'Approved',
 * isDisabled : false
 *  }, { name : 'Reject', value : 'Rejected', isDisabled : false } ];
 * $scope.showtext = false;
 * 
 * $scope.disableClick = function(btn) { console.log(btn.value); $scope.btn =
 * btn.value; $scope.showtext = true; if (btn.name == 'Pending for
 * Clarification' || btn.value == 'Rejected' || btn.value == 'Approved') {
 * $('#target').show(1); angular.forEach($scope.btns, function(_btn) {
 * _btn.isDisabled = true; }); }
 * 
 * btn.isDisabled = false; return true; }
 */

/*
 * //status changed $scope.commentsave = function() { debugger; $scope.status = {
 * "status" : $scope.btn, "comment" : $scope.comment }
 * 
 * Trafficfactory.adminstatus($stateParams.report_id, $scope.status).then(
 * function(data) { $scope.comment = data.resultData;
 * console.log($scope.comment); }, function(err) { if (err) {
 * $scope.errorMessage = err; } }) $state.reload(); } })
 */

// Trafficfactory.adminstatus(rid,status,comment).then(function(data){
// $scope.x = data;
// console.log($scope.x);
// })
// Admin Status Change
/*
 * Trafficfactory.adminstatus($stateParams.getid,$scope.userD).then(function(data){
 * $scope.dddd=data.resultData; console.log($scope.dddd); //console.log(id);
 * $state.go('header.userStatic'({id})); },function(err){ if(err){
 * $scope.errorMessage = err; }else{ $scope.errorMessage = err; } })
 * 
 * 
 * $scope.status = $scope.status; factory.adminDashboard().then(function(data) {
 * $scope.admindata = data; console.log($scope.admindata); }, function(err) { if
 * (err) { $scope.errorMessage = err; } }),
 * 
 * 
 * $scope.r_id = localStorage.getItem('Rid'); console.log($scope.r_id);
 * $scope.statuses = [ { status : "Pending" }, { status : "Approve" }, { status :
 * "Reject" } ];
 * 
 * //Put method for status $scope.statusclick = function(id, status) {
 * console.log('id,status', id, status) $scope.objectdata = { status : status }
 * Trafficfactory.adminstatus(id, $scope.objectdata).then(function(data) {
 * console.log("success", data); $scope.status = data.status; $state.reload() },
 * function(err) { if (err) { $scope.errorMessage = err; }
 *  }) }
 *  // pagination $scope.maxSize = 10; // Limit number for pagination display
 * number. $scope.totalCount = 0; // Total number of items in all pages.
 * initialize as a zero $scope.pageIndex = 1; // Current page number. First page
 * is 1.-->
 * 
 * $scope.pageSizeSelected = 5; // Maximum number of items per page.
 * 
 * $scope.pageSizeSelected = 10; // Maximum number of items per page.
 * 
 * $scope.pageSizeSelected = 6; // Maximum number of items per page.
 * 
 * $scope.pageSizeSelected = 6; // Maximum number of items per page.
 * 
 * $scope.pageSizeSelected = 5; // Maximum number of items per page.
 * 
 * $scope.getAdminList = function() { debugger; Trafficfactory
 * .adminDashboard($scope.pageIndex, $scope.pageSizeSelected)
 * .then(function(response) { $scope.admindata = response.resultData;
 * $scope.reportid = response.resultData[0].id;
 * $('.disabledDrop').attr('disabled', true) $scope.totalCount = response.count;
 * 
 * console.log($scope.pageIndex); }); }
 *  // Loading employees list on first time $scope.getAdminList();
 *  // This method is calling from pagination number $scope.pageChanged =
 * function() { $scope.getAdminList(); };
 * 
 * 
 * //This method is calling from dropDown $scope.changePageSize = function () {
 * $scope.pageIndex = 1; $scope.getAdminList(); };
 * 
 * $("#bt_search").prop("disabled",true); $scope.adminsearched=function(){ var
 * search_value=document.getElementById("searchclass").value; var
 * search_value1=document.getElementById("searchclass1").value; var
 * search_value2=document.getElementById("searchclass2").value; var
 * search_value3=document.getElementById("searchclass3").value;
 * if(search_value!=="" || search_value1!=="" || search_value2!==""
 * ||search_value3!==""){ $("#bt_search").prop("disabled",false); } if(
 * search_value=="" && search_value1!=="" && search_value2=="" &&
 * search_value3==""){ $("#bt_search").prop("disabled",true); }
 *  };
 * 
 * 
 * $scope.dynamicsrch = function() { debugger;
 * 
 * $scope.date=$scope.date, $scope.statusName=$scope.statusName,
 * $scope.vehicleNum=$scope.vehicleNum }; $scope.se = { "id" : $scope.id,
 * "pdate" : $scope.pdate, "idate" : $scope.idate, "offenseCategory" :
 * $scope.offense, "location" : $scope.location, "vehicleType" : $scope.vtype
 * "status" : $scope.status
 *  }
 * 
 * Trafficfactory.searchrequirement($scope.se).then(function(data) {
 * $scope.admindata = data.resultData; console.log($scope.admindata); }) };
 * $scope.getRdetails = function() {
 * Trafficfactory.reportdetails($stateParams.report_id).then( function(data) {
 * $scope.reportDetails = data.resultData; })
 * 
 * 
 * 
 * $scope.listusers = function(){
 * Trafficfactory.allusers().then(function(response){ $scope.details = response;
 * //console.log($scope.details); }); $state.go("header.Registration"); } //
 * pagination $scope.maxSize = 5; $scope.totalCount = 0; $scope.pageNumber = 1;
 * $scope.pageCount = 10;
 * 
 * $scope.getUserList = function() { debugger;
 * 
 * Trafficfactory.allusers($scope.pageNumber, $scope.pageCount).then(
 * function(response) { $scope.userdata = response.resultData;
 * console.log($scope.userdata); $scope.userData = $scope.userdata.resultData;
 * console.log($scope.userData); $scope.totalCount = response.count;
 * console.log($scope.totalCount);
 * 
 * }); }
 * 
 * 
 * 
 *  // Loading employees list on first time $scope.getUserList();
 *  // This method is calling from pagination number $scope.pageChanged =
 * function() { $scope.getUserList(); };
 * 
 * 
 * //This method is calling from dropDown $scope.changePageSize = function () {
 * $scope.pageIndex = 1; $scope.getAdminList(); };
 * 
 * 
 * $scope.addadmins = function(){ $scope.addata={ "name":$scope.name,
 * "firstName":$scope.firstName, "lastName":$scope.lastName,
 * "mobileNum":$scope.mobileNum, "password":$scope.password,
 * "gender":$scope.gender, "dob":$scope.dob }
 * Trafficfactory.adminsadd($scope.addata).then(function(data){ $scope.adminres =
 * data; $state.go("allAdmins"); }) };
 * 
 * 
 * 
 * 
 * trafficApp.controller("adminView", function($scope, Trafficfactory,
 * $stateParams) { $scope.names = [ "Date", "Accept", "Reject" ];
 * $scope.selectedName = "";
 * 
 * $scope.$on('$viewContentLoaded', function() { $scope.show();
 *  })
 * 
 * $scope.show = function() { debugger;
 * 
 * Trafficfactory.adminviewDetails($stateParams.Rid).then(function(data) {
 * console.log($stateParams.Rid); $scope.r = data.resultData;
 * console.log($scope.r); }) }
 */

