package com.imtac.recruitment.rest.resources;

import javax.mail.Multipart;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import com.imtac.recruitment.entity.FileUpload;
import com.imtac.recruitment.entity.FileUploadMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.FileStorageService;

@Path("fileUpload")
public class FileUploadResource {
	
	@Autowired
	private FileStorageService fileStorageService;
	
	@POST
	@Path("/uploadFile")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response saveFile(FileUploadMapper fileUploadMapper) {

		FileUpload file = new FileUpload();
		
		BeanUtils.copyProperties(fileUploadMapper, file);

		FileUpload fileUpload = fileStorageService.saveFile(file);

		if (null != fileUpload) {
			return new Response(fileUpload, HttpStatus.CREATED, "file uploaded");
		} else {
			return new Response("Unable to upload file", HttpStatus.CONFLICT);
		}
	}

}
