trafficApp.factory('Trafficfactory',['$http','$q',function($http,$q,$scope,APIURL){

	return{
			// Registration User
		
			registration:function(formData){
				var mul = {
						transformRequest: angular.identity,
				        headers: {'Content-Type': undefined }
				}
				var deferred = $q.defer();
			$http.post("rest/user/registration",formData,mul).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			creattest:function(data){
				debugger;
				var deferred = $q.defer();
				$http.post("rest/testCode/createTest",data).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
				
			},
	
			//  getAllTest
			
			getAllTestCodes:function(pageindex,pagesize){
				var deferred = $q.defer();
				$http.get("rest/testCode/getAllTestCodes").success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			
			// testCodeGetById
			
			updateTestCode:function(id){
				var deferred = $q.defer();
				$http.put("rest/testCode/updateTestCode/"+id).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			
			// deletetestcode
			
			deletetestcode:function(id){
				var deferred = $q.defer();
				$http.delete("rest/testCode/deleteTestCode/"+id).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			
			deleteSponsor:function(id){
				debugger;
				var deferred = $q.defer();
				$http.delete("rest/Sponsor/deleteSponsorBy/"+id).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			
			
			getByIdTestCode:function(id){
				debugger;
				var deferred = $q.defer();
				$http.get("rest/testCode/getTestCodeById/"+id).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			getAllSponsorsList:function(){
				debugger;
				var deferred = $q.defer();
				$http.get("rest/Sponsor/getAllSponsors").success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			createsponsor:function(sponsor){
				debugger;
				var deferred = $q.defer();
				$http.post("rest/Sponsor/createSponsor",sponsor).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			createuser:function(user){
				debugger;
				var deferred=$q.defer();
				$http.post("rest/user/registration",user).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			}
			
	}}]);
			// post API for report issue
			/*//	postreport:function(getid1,formData){
				var deferred =$q.defer();
				var img = {
						transformRequest: angular.identity,
				        headers: {'Content-Type': undefined }
				}
				$http.post("rest/report/addReport/"+getid1,formData,img).success(function(response){	
				deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},

			// userEdit Api get details
			userPedit:function(id){
				var deferred = $q.defer();
				$http.get("rest/user/getUserByPrimeryKey/" + id).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			// userUpdate Api
			putUserdata:function(id,formData){
				var hd = {
						transformRequest: angular.identity,
				        headers: {'Content-Type': undefined }
				}
				var deferred = $q.defer();
				$http.put("rest/user/updateUser/"  +id,formData,hd).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},

			// images view in dashboards

			imgView:function(userId){
				var deferred = $q.defer();
				// console.log(userId);
				$http.get("rest/report/getImageDetailsbyReportId/"+userId).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			// all reports in user api
			userDashboard:function(){
				var deferred = $q.defer();
				$http.get("rest/report/getAllReports").success(function(response){
				deferred.resolve(response);	
				}).error(function(err){
				deferred.reject(err);
				})
				return deferred.promise;

				},

			// particular user reports
			userDashDetails:function(id,pageIndex, pageSizeSelected){
				var deferred = $q.defer();
				$http.get("rest/report/user_reports/" + id + "/" + pageIndex + "/" + pageSizeSelected).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			// upload profile picture
			uploadPropic:function(id,formData){
				var deferred = $q.defer();
				var img = {
						transformRequest: angular.identity,
				        headers: {'Content-Type': undefined }
				}
				$http.put("rest/user/uploadOrChangeProfPic/"+id,formData,img).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
				
			},
			// profile pic get
			profilepic:function(id){
				var deferred = $q.defer();
				$http.get("rest/user/showProfPic/"+id).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			// all reports in admin dashboard
			adminDashboard:function(pageIndex,pageSizeSelected){
				var deferred = $q.defer();
				$http.get("rest/admin/reports_dashboard/" + pageIndex + "/" + pageSizeSelected).success(function(response){					
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			// admin images particular user
			adminviewDetails:function(Rid){
				var deferred = $q.defer();
				$http.get("rest/report/getImageDetailsbyReportId/"+Rid).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			// status 
			adminstatus:function(report_id,status){
				var deferred = $q.defer();
				$http.put("rest/report/changeStatus/"+report_id,status).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			
			// admin dynamic search
				searchrequirement:function(search){
		           debugger;
		            var deferred = $q.defer();
					
					$http.post("rest/admin/searchComplaints",search).success(function(response){
						deferred.resolve(response);
					}).error(function(err){
						deferred.reject(err);
			})
				return deferred.promise;
			},
			
		//admin report details
		
		reportdetails:function(id){
			var deferred = $q.defer();
			$http.get("rest/report/getReportById/"+id).success(function(response){
				deferred.resolve(response);	
			}).error(function(err){
				deferred.reject(err);
			})
			return deferred.promise;
		},
		//penality
		penality:function(){
			var deferred = $q.defer();
			$http.get("/rest/offenseCategories/getList").success(function(response){
				deferred.resolve(response);	
			}).error(function(err){
				deferred.reject(err);
			})
			return deferred.promise;

		},
		// change password
		changepwd:function(uid,parms){
				var deferred = $q.defer();
				var hd = {
				        headers: {'Content-Type': 'application/x-www-form-urlencoded' }
				}
				$http.put("rest/user/changePwd/"+uid,parms,hd).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
				
			},
		forgot:function(param){
				var deferred = $q.defer();
				var hd = {
				        headers: {'Content-Type': 'application/x-www-form-urlencoded' }
				}
				$http.get("rest/user/resetPassword/"+param).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
				
			},
		savenewpwd:function(token,pwd){
				var deferred = $q.defer();
				var hd = {
				        headers: {'Content-Type': 'application/x-www-form-urlencoded' }
				}
				$http.post("rest/user/saveNewPassword/"+token,pwd,hd).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
				
			},
			// pincode auto fill api
			
			 * postalcode:function(newVal){ var deferred = $q.defer();
			 * $http.get("http://postalpincode.in/api/pincode/"+newVal).success(function(response){
			 * deferred.resolve(response); }).error(function(err){
			 * deferred.reject(err); }) return deferred.promise; }
			 
			 Master Screen Api Calls 
			 for vehicle type 
			vehicleType:function(data){
				var hd = {
				        headers: {'Content-Type': 'application/json' }
				}
				var deferred = $q.defer();
				$http.post("rest/admin/addVehicleType",data,hd).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			 get vechile list 
			vehiclelist:function(){
				var deferred = $q.defer();
				$http.get("rest/admin/getAllVehicles").success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			 getvehicle type by id api 
			vehiclegetbyid:function(id){
				var deferred = $q.defer();

				$http.get("rest/admin/getVehicle/"+id).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			 vehicle Type edit 
			vehicleedit:function(id,param){
				var deferred = $q.defer();
				var hdd = {
				        headers: {'Content-Type': 'application/x-www-form-urlencoded' }
				}
				$http.put("rest/admin/updateVehicle/"+id,param,hdd).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			
			
			 delete vehicle by id 
			deletevehicletype:function(id){
				var deferred = $q.defer();
				$http.delete("rest/admin/deleteVehicle/"+id).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			 Offence Catgry post 
			offencecat:function(id,parms){
				var hd = {
						headers: {'Content-Type': 'application/x-www-form-urlencoded' }
				}
				var deferred = $q.defer();
				$http.post("rest/admin/addOffenseCategory/"+id,parms,hd).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			 get offence list by vehicle id 
			offencelist:function(vid){
				var deferred = $q.defer();
				$http.get("rest/admin/getOffenceCategoriesByVehicle/"+vid).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			 get offence by id 
			offencebyid:function(id){
				var deferred = $q.defer();
				$http.get("rest/admin/getOffenseCategory/"+id).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			offenceall:function(){
				var deferred = $q.defer();
				$http.get("rest/admin/getAllOffenses").success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			 offence edit 
			offenceedit:function(id,param){
				var deferred = $q.defer();
				var hdd = {
				        headers: {'Content-Type': 'application/x-www-form-urlencoded' }
				}
				$http.put("rest/admin/updateOffenseCategory/"+id,param,hdd).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			 delete offence catgry 
			deleteoffencecat:function(id){
				var deferred = $q.defer();
				$http.delete("rest/admin/deleteOffenseCategory/"+id).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			getrewards:function(){
				var deferred = $q.defer();

				$http.get("rest/offenseCategories/getList").success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			Rpointsadd:function(parms){
				var deferred = $q.defer();
				$http.post("rest/admin/addRewardPoints",parms).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			//get reward by id
			rewardgetid:function(id){
				var deferred = $q.defer();
				$http.get("rest/offenseCategories/get/"+id).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;

			},
			rewardedit:function(id){
				var deferred = $q.defer();
				
				$http.put("rest/offenseCategories/update/"+id).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			rewardedit:function(id,param){
				var deferred = $q.defer();
				$http.put("rest/offenseCategories/update/"+id,param).success(function(response){
				deferred.resolve(response);
				}).error(function(err){
				deferred.reject(err);
				})
				return deferred.promise;
				},
			deleterewardpnts:function(id){
				var deferred = $q.defer();
				$http.delete("rest/offenseCategories/remove/"+id).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			searchk:function(parms){
				var deferred = $q.defer();
				$http.post("rest/admin/searchComplaints",parms).success(function(response){
					deferred.resolve(response);
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			userchallan:function(id){
				var deferred = $q.defer();
				$http.get("rest/report/getComplaintsByUserId/"+id).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			logout:function(id,actkn){
				var deferred = $q.defer();
				$http.get("rest/user/logout/"+id +"/"+actkn).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			},
			adminsadd:function(userobject){
				var deferred = $q.defer();
				$http.post("rest/admin/addAdmin",userobject).success(function(response){
					deferred.resolve(response);	
				}).error(function(err){
					deferred.reject(err);
				})
				return deferred.promise;
			}
		}*/
