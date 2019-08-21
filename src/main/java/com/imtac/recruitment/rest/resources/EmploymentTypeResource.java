package com.imtac.recruitment.rest.resources;

import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;

import com.imtac.recruitment.entity.EmploymentType;
import com.imtac.recruitment.entity.EmploymentTypeMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.EmploymentTypeService;

@Path("employmenttypes")
public class EmploymentTypeResource {

	@Autowired
	private EmploymentTypeService employmentTypeService;

	@POST
	@Path("/createEmploymentType")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createEmploymentType(EmploymentTypeMapper employmentTypeMapper) {

		EmploymentType employmentType = new EmploymentType();

		BeanUtils.copyProperties(employmentTypeMapper, employmentType);

		employmentType.setStatus("Active");

		employmentType.setUpdatedDate(new Date());

		EmploymentType createEmploymentType = employmentTypeService.createEmploymentType(employmentType);

		if (null != createEmploymentType) {
			return new Response(createEmploymentType, HttpStatus.CREATED, "created EmploymentType");
		} else {
			return new Response("EmploymentType not created", HttpStatus.CONFLICT);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getAllEmploymentTypes() {

		List<EmploymentTypeMapper> allEmploymentTypes = employmentTypeService.getAllEmploymentTypes();

		if (!CollectionUtils.isEmpty(allEmploymentTypes)) {
			return new Response(allEmploymentTypes, HttpStatus.OK, "EmploymentTypes found");
		} else {
			return new Response("EmploymentType not found", HttpStatus.CONFLICT);
		}
	}

	@PUT
	@Path("/updateEmploymentType")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateEmploymentType(EmploymentTypeMapper employmentTypeMapper) {

		EmploymentType employmentType = new EmploymentType();

		BeanUtils.copyProperties(employmentTypeMapper, employmentType);

		employmentType.setStatus("Active");

		employmentType.setUpdatedDate(new Date());

		EmploymentType createEmploymentType = employmentTypeService.updateEmploymentType(employmentType);

		if (null != createEmploymentType) {
			return new Response(createEmploymentType, HttpStatus.OK, "updated EmploymentType");
		} else {
			return new Response("EmploymentType not updatrd", HttpStatus.CONFLICT);
		}
	}

	@POST
	@Path("/deleteEmploymentType")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteEmploymentType(EmploymentType employmentType) {

		try {
			employmentTypeService.deleteEmploymentTypeById(employmentType);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new Response("EmploymentType not deleted", HttpStatus.CONFLICT);
		}
		return new Response("EmploymentType  deleted", HttpStatus.OK);
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getEmploymentTypeById(@PathParam("id") Long employmentTypeId) {

		EmploymentType employmentType = employmentTypeService.getEmploymentTypeById(employmentTypeId);

		if (null != employmentType) {
			return new Response(employmentType, HttpStatus.OK, "EmploymentTypes found");
		} else {
			return new Response("EmploymentType not found", HttpStatus.CONFLICT);
		}
	}

}
