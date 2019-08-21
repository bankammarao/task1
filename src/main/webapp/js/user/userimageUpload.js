/*trafficApp.directive("imgUpload",function($http,$compile){
		return {
			restrict : 'AE',
			templateUrl : 	"partials/user/userimageupload.html",
			link : function(scope,elem,attrs){
				var formData = new FormData();
				scope.previewData = [];	

				function previewFile(file){
					var reader = new FileReader();
					var obj = new FormData().append('file',file);			
					reader.onload=function(data){
						var src = data.target.result;
						var size = ((file.size/(1024*1024)) > 1)? (file.size/(1024*1024)) + ' mB' : (file.size/		1024)+' kB';
						scope.$apply(function(){
							scope.previewData.push({'name':file.name,'size':size,'type':file.type,
											'src':src,'data':obj});
						});								
						console.log(scope.previewData);
					}
					reader.readAsDataURL(file);
				}

				function uploadFile(e,type){
					e.preventDefault();			
					var files = "";
					if(type == "formControl"){
						files = e.target.files;
					} else if(type === "drop"){
						files = e.originalEvent.dataTransfer.files;
					}			
					for(var i=0;i<files.length;i++){
						var file = files[i];
						if(file.type.indexOf("image") !== -1){
							previewFile(file);								
						} else {
							alert(file.name + " is not supported");
						}
					}
				}	
				elem.find('.fileUpload').bind('change',function(e){
					uploadFile(e,'formControl');
				});

				elem.find('.dropzone').bind("click",function(e){
					$compile(elem.find('.fileUpload'))(scope).trigger('click');
				});

				elem.find('.dropzone').bind("dragover",function(e){
					e.preventDefault();
				});

				elem.find('.dropzone').bind("drop",function(e){
					uploadFile(e,'drop');																		
				});
				scope.remove=function(data){
					var index= scope.previewData.indexOf(data);
					scope.previewData.splice(index,1);
				}
			}
		}
	});*/

