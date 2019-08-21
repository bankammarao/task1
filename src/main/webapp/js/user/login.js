trafficApp.controller("LoginController", function($scope,$rootScope, $cookieStore,$state,UserService) {

    $scope.rememberMe = false;

    $scope.login = function () {
    	debugger;
        UserService.authenticate($.param({ username: $scope.username,password: $scope.password }), function (authenticationResult) {
            var access = authenticationResult;
            $scope.error_msg = access.errorMessage;
            console.log(access);
            swal("",access.message +"","success" )
            if(access.status="Fail"){
            	console.log($scope.error_msg);
            	 swal("",access.errorMessage +"","error" )
            }
            var accessToken = authenticationResult.resultData.token;
            $rootScope.accessToken = accessToken;
            if ($scope.rememberMe) {
                $cookieStore.put('accessToken', accessToken);
            }
            UserService.get(function (user) {
            	debugger;
                $rootScope.user = user;
               // console.log(user);
                //console.log(user.name);
                //console.log(user.firstName);
                console.log(authenticationResult); 
                console.log(authenticationResult.message);
                swal("",authenticationResult.message +"","success" )
               
                
                $scope.userObject = authenticationResult.resultData.user;	
                //console.log($scope.userObject);
                //console.log('Userid Printed');
                //console.log($scope.userObject.id);
                //console.log($scope.userObject.roles);
                var uId = $scope.userObject.id;
               /* console.log('UID');
                console.log(uId);*/
                localStorage.setItem('uId', $scope.userObject.id);
                

                
               /* localStorage.setItem('admin',$scope.user.roles="0");
                localStorage.setItem('support_user',$scope.user.roles="200");
                localStorage.setItem('user', $scope.user.roles="100");*/
           
               
                if($scope.user.roles == "100"){
                	alert('this is User-login sucess')
                	$state.go('userdashboard'); 
                	
                }
                else if($scope.user.roles == "0"){ 
                	alert('this is Admin sucess')
                	$state.go('adminDashboard');
                	
                }
                else if($scope.user.roles == "200"){ 
                	alert('this is Support User sucess')
                	$state.go('supportuser');  
                	
                }
                else {
                		alert("Please Register");
                }
            });
        });
    }
})