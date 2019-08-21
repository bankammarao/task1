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

import com.imtac.recruitment.entity.Designation;
import com.imtac.recruitment.entity.DesignationMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.DesignationService;

@Path("desingation")
public class DesignationResource {
	
	@Autowired
	private DesignationService designationService;
	
	
	
	@POST
	@Path("/createDesignation")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createDesignation(DesignationMapper designationMapper) {

		Designation designation = new Designation();

		BeanUtils.copyProperties(designationMapper, designation);
		
		designation.setStatus("Active");

		designation.setUpdatedDate(new Date());

		Designation newDesignation = designationService.createDesignation(designation);

		if (null != newDesignation) {
			return new Response(newDesignation, HttpStatus.CREATED, "new Designation is created");
		} else {
			return new Response("Unable to create Designation", HttpStatus.CONFLICT);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getAllDesignations() {

		List<DesignationMapper> deisgnationsList = designationService.getAllDesignations();

		if (!CollectionUtils.isEmpty(deisgnationsList)) {
			return new Response(deisgnationsList, HttpStatus.OK, "Designations displayed");
		} else {
			return new Response("Unable to fetch designations", HttpStatus.CONFLICT);
		}
	}
	
	
	@PUT
	@Path("/updateDesignation")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateDesignation(DesignationMapper DesignationMapper) {

		Designation designation = new Designation();

		BeanUtils.copyProperties(DesignationMapper, designation);

		designation.setStatus("Active");

		designation.setUpdatedDate(new Date());

		Designation createDesignation = designationService.updateDesignation(designation);

		if (null != createDesignation) {
			return new Response(createDesignation, HttpStatus.OK, "updated Designation");
		} else {
			return new Response("Designation not updatrd", HttpStatus.CONFLICT);
		}
	}

	@POST
	@Path("/deleteDesignation")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteDesignation(Designation designation) {

		try {
			designationService.deleteDesignationById(designation);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new Response("Designation not deleted", HttpStatus.CONFLICT);
		}
		return new Response("Designation  deleted", HttpStatus.OK);
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getDesignationById(@PathParam("id") Long designationId) {

		Designation designation = designationService.getDesignationById(designationId);

		if (null != designation) {
			return new Response(designation, HttpStatus.OK, "Designations found");
		} else {
			return new Response("Designation not found", HttpStatus.CONFLICT);
		}
	}

}
