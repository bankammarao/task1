trafficApp.config(function($stateProvider, $urlRouterProvider,
		$locationProvider, $httpProvider) {
	$urlRouterProvider.otherwise("/")
	$stateProvider.state('/', {
		url: "/",
		templateUrl: "partials/user/userdashboard.html",
		controller:"userdash"
	})
	.state('userTiles', {
		url: "/userTiles",
		templateUrl: "partials/user/tiles.html",
		controller:"userdash",
		directive : "direct"

	})
	
	.state('login', {
		/*resolve:{
			'check':function($q, $location, $rootScope){
				var defered = $q.defer();
			if(!$rootScope.user){
				defered.reject();
			$location.path('/');
			
					}else{
						defered.resolve(true);
					}
			return defered.promise;
				}
			},*/
		url: "/userdashboard",
		templateUrl: "partials/login.html",
		controller:'LoginController'/*,
		directive : "direct"*/

	}).state('ureportD', {
			url: "/ureportD/:report_id",
			templateUrl: "partials/user/userreportdetails.html",
			controller: "userdash",
			directive : "direct"
	})
	.state('test', {
			url: "/test",
			templateUrl: "partials/admin/test.html",
			controller: "adminContrl"
	})
	.state('createtest', {
			url: "/createtest",
			templateUrl: "partials/admin/createtest.html",
			controller: "adminContrl"
	})
	
	.state('updateTestCode', {
			url: "/updateTestCode/:id",
			templateUrl: "partials/admin/createtest.html",
			controller: "adminContrl"
	})
	
	
	.state('userdashboard', {
			url: "userdashboard",
			templateUrl: "partials/user/userdashboard.html",
			controller: "userdash"
	})
	
	.state('sponsor', {
			url: "/sponsor",
			templateUrl: "partials/admin/sponsor.html",
			controller: "adminContrl"
	})
	.state('creaetSponsor', {
			url: "/createsponsor",
			templateUrl: "partials/admin/creaetSponsor.html",
			controller: "adminContrl"
	})
		
	.state('createuser', {
			url: "/createuser",
			templateUrl: "partials/admin/createuser.html",
			controller: "adminContrl"
	})
	
	
	
	.state('imgView', {
		url: "/viewDetails/:userId",
		templateUrl: "partials/user/userImgview.html",
		controller:"userdash",
		directive : "direct"
	})
	
	.state('Notification', {
		url: "/Notification",
		templateUrl: "partials/user/usernotification.html",
		controller:'notificationCtrl',
		directive : "direct"
	})
	.state('userStatic', {
		url: "/userStatic/:getid",
		templateUrl: "partials/user/userProfileStatic.html",
		controller:"userPCtrl",
		directive : "direct"
	}).state('userProfile', {
		url:"/userProfile/:getid",
		templateUrl: "partials/user/userProfileEdit.html",
		controller:"userPCtrl",
		directive : "direct"
	}).state('Report', {
		url: "/Report",
		templateUrl: "partials/user/userreport.html",
		controller:"ReportCntrl",
		directive : "direct"
	}).state('Registration', {
			url: "/Registration",
			templateUrl: "partials/user/userregistration.html",
			controller:"RegCtr1",
			directive : "direct"
	}).state('RegNew', {
			url: "/RegNew",
			templateUrl: "partials/user/userreg.html",
			controller:"RegCtr"
	}).state('Resett', {
			url:"/Resett",
			templateUrl:"partials/reset.html",
			controller:"resetpwd"
	}).state('changPwd', {
			url:"/changPwd",
			templateUrl:"partials/changepwd.html",
			controller:"changePwd",
			directive : "direct"
	}).state('reset', {
			url:"/reset",
			templateUrl:"partials/resetpwd.html",
			controller:"resetpwd"
	}).state('resetstatus', {
			url:"/resetstatus",
			templateUrl:"partials/resetstatus.html",
			controller:"resetpwd"
	})	
	.state('regstatus', {
		url : "/regstatus",
		templateUrl : "partials/user/userregistrationstatus.html",
		controller : "RegCtr"
		})
	.state('challans', {
		url : "/challans",
		templateUrl : "partials/user/usert.html",
		controller : "userdash"
	})
	      /*user-routing end*/
	
       /*admin routing*/
	.state('adminDashboard', {
		resolve:{
			'check':function($q, $location, $rootScope){
				var defered = $q.defer();
			if(!$rootScope.user){
				defered.reject();
			$location.path('/');
					}else{
						defered.resolve(true);
					}
			return defered.promise;
				}
			},
			url: "/adminDashboard",
			templateUrl: "partials/admin/admindashboard.html",
			controller: "adminContrl",
			directive : "directive"
	})
	//admin report details
	.state('reportdetails', {
			url: "/reportdetails/:report_id",
			templateUrl: "partials/admin/reportdetails.html",
			controller: "adminContrl",
			directive : "directive"
	}).state('reportview', {
		url: "/reportview/:Rid",
		templateUrl: "partials/admin/reportview.html",
		controller: "adminContrl",
		directive : "directive"
    }).state('adminview', {
			url: "/view/:Rid",
			templateUrl: "partials/admin/adminView.html",
			controller:"adminContrl",
			directive : "directive"
	})
	.state('allUsers', {
		url: "/allUser",
		templateUrl: "partials/admin/allUser.html",
		controller:"adminContrl",
		directive : "directive"

	})
	.state('allAdmins', {
		url: "/allAdmins",
		templateUrl: "partials/admin/allAdmins.html",
		controller:"adminContrl",
		directive : "directive"
	})
	.state('addadmin', {
		url: "/addadmin",
		templateUrl: "partials/admin/addadmin.html",
		controller:"adminContrl",
		directive : "directive"
	})
	
	/*.state('adminStatic', {
		url: "/adminStatic/:getid",
		templateUrl: "partials/admin/adminProfileStatic.html",
		controller:"adminProfile",
		directive : "directive"
	}).state('adminProfile', {
		url:"/adminProfile/:getid",
		templateUrl: "partials/admin/adminProfileEdit.html",
		controller:"adminProfile",
		directive : "directive"
	})*/

	.state('vehicle',{
			url:"/vehicle",
			templateUrl:"partials/master/vechiletype.html",
			controller:"masterctrl",
			directive : "directive"
	})

	.state('vehicleEdit',{
			url:"/vehicleEdit/:edit",
			templateUrl:"partials/master/vehicleedit.html",
			controller:"mstrctrl",
			directive : "directive"
	}).state('offence', {
			url:"/offence",
			templateUrl:"partials/master/offencecat.html",
			controller:"masterctrl",
			directive : "directive"
	})

	.state('offenceEdit',{
			url:"/offenceEdit/:OffE",
			templateUrl:"partials/master/offenceedit.html",
			controller:"mstrctrl"
	}).state('vehiclelist', {
			url:"/vehiclelist",
			templateUrl:"partials/master/vehicletypelist.html",
			controller:"masterctrl",
			directive: "directive"
	}).state('offencelist', {
			url:"/offencelist",
			templateUrl:"partials/master/offencelist.html",
			controller:"rewardctrl",
			directive:"directive"
	})
	.state('rewardlist',{
			url:"/rewardlist",
			templateUrl:"partials/master/rewardplists.html",
			controller:"rewardctrl",
			directive:"directive"
	})
	/*.state('savereward',{
			url:"/savereward/",
			templateUrl:"partials/master/saverewards.html",
			controller:"rewardctrl",
			directive:"directive"
	})*/
	/*.state('reward',{
			url:"/reward",
			templateUrl:"partials/master/rewardpnts.html",
			controller:"rewardctrl",
			directive:"directive"
	})*/
	.state('rewardEdit',{
			url:"/rewardEdit/:rewardE",
			templateUrl:"partials/master/rewardedit.html",
			controller:"rewardctrl"
	})
	
$httpProvider.interceptors.push(function ($q, $rootScope, $location) {
    return {
        'responseError': function (rejection) {
            var status = rejection.status;
            var config = rejection.config;
            var method = config.method;
            var url = config.url;

            if (status == 401) {
                $location.path("/login");
            } else {
					$rootScope.error = method + " on " + url
							+ " failed with status " + status;
            }

            return $q.reject(rejection);
        }
    };
	});

	/*
	 * Registers auth token interceptor, auth token is either passed by header
	 * or by query parameter as soon as there is an authenticated user
	 */
$httpProvider.interceptors.push(function ($q, $rootScope, $location) {
    return {
        'request': function (config) {
            var isRestCall = config.url.indexOf('rest') == 0;
            if (isRestCall && angular.isDefined($rootScope.accessToken)) {
                var accessToken = $rootScope.accessToken;
                if (exampleAppConfig.useAccessTokenHeader) {
                    config.headers['X-Access-Token'] = accessToken;
                } else {
                    config.url = config.url + "?token=" + accessToken;
                }
            }
            return config || $q.when(config);
        }
    };
}

);
$httpProvider.interceptors.push(function ($q, $rootScope, $location) {
    return {
        'request': function (config) {
            var isRestCall = config.url.indexOf('partials') == 0;
            if (isRestCall && angular.isDefined($rootScope.accessToken)) {
                var accessToken = $rootScope.accessToken;
                if (exampleAppConfig.useAccessTokenHeader) {
                    config.headers['X-Access-Token'] = accessToken;
                } else {
                    config.url = config.url + "?token=" + accessToken;
                }
            }
            return config || $q.when(config);
        }
    };
}

);

})
