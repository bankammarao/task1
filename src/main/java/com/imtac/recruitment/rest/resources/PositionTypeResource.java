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

import com.imtac.recruitment.entity.PositionType;
import com.imtac.recruitment.entity.PositionTypeMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.PositionTypeService;

@Path("positiontypes")
public class PositionTypeResource {

	@Autowired
	private PositionTypeService positionTypeService;

	@POST
	@Path("/createPositionType")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createPositionType(PositionTypeMapper positionTypeMapper) {

		PositionType positionType = new PositionType();

		BeanUtils.copyProperties(positionTypeMapper, positionType);

		positionType.setStatus("Active");

		positionType.setUpdatedDate(new Date());

		PositionType createPositionType = positionTypeService.createPositionType(positionType);

		if (null != createPositionType) {
			return new Response(createPositionType, HttpStatus.CREATED, "created PositionType");
		} else {
			return new Response("PositionType not created", HttpStatus.CONFLICT);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getAllPositionTypes() {

		List<PositionTypeMapper> allPositionTypes = positionTypeService.getAllPositionTypes();

		if (!CollectionUtils.isEmpty(allPositionTypes)) {
			return new Response(allPositionTypes, HttpStatus.OK, "PositionTypes found");
		} else {
			return new Response("PositionType not found", HttpStatus.CONFLICT);
		}
	}

	@PUT
	@Path("/updatePositionType")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updatePositionType(PositionTypeMapper positionTypeMapper) {

		PositionType positionType = new PositionType();

		BeanUtils.copyProperties(positionTypeMapper, positionType);

		positionType.setStatus("Active");

		positionType.setUpdatedDate(new Date());

		PositionType createPositionType = positionTypeService.updatePositionType(positionType);

		if (null != createPositionType) {
			return new Response(createPositionType, HttpStatus.OK, "created PositionType");
		} else {
			return new Response("PositionType not created", HttpStatus.CONFLICT);
		}
	}

	@POST
	@Path("/deletePositionType")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deletePositionType(PositionType positionType) {

		try {
			positionTypeService.deletePositionTypeById(positionType);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new Response("PositionType not deleted", HttpStatus.CONFLICT);
		}
		return new Response("PositionType  deleted", HttpStatus.OK);
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getPositionTypeById(@PathParam("id") Long positionTypeId) {

		PositionType positionType = positionTypeService.getPositionTypeById(positionTypeId);

		if (null != positionType) {
			return new Response(positionType, HttpStatus.OK, "PositionTypes found");
		} else {
			return new Response("PositionType not found", HttpStatus.CONFLICT);
		}
	}

}
