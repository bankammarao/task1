package com.imtac.recruitment.rest.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.imtac.recruitment.dto.PaginationSortingAndSearchingDTO;
import com.imtac.recruitment.dto.UserStatusChangeDTO;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.DemographicInfoService;
import com.imtac.recruitment.service.UserService;


@Component
@CrossOrigin(origins="*",allowedHeaders="*")
@Path("/admin")
public class AdminResources {

	@Autowired
	private UserService userService;

	@Path("/adminsList")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response adminsList() {
		return userService.findAllAdmins();
	}
	
	@Path("/usersList")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response usersList(PaginationSortingAndSearchingDTO dto) {
		return userService.findAllUsers(dto.getPageNumber(), dto.getPageSize());
	}
	
	@Path("/updateUserStatus")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateUserStatus(UserStatusChangeDTO dto) {
		return userService.changeActiveStatus(dto);
	}
	
}
