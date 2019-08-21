package com.imtac.recruitment.rest.resources;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
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

import com.imtac.recruitment.entity.Position;
import com.imtac.recruitment.entity.PositionMapper;
import com.imtac.recruitment.entity.SequenceMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.PositionService;

@Path("positions")
public class PositionResource {

	@Autowired
	private PositionService positionService;

	@POST
	@Path("/createPositon")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createPositionType(PositionMapper positionMapper) {

		Position position = new Position();

		BeanUtils.copyProperties(positionMapper, position);

		position.setStatus("Active");
		position.setUpdatedDate(new Date());
		Position createPositionType = positionService.createPosition(position);

		if (null != createPositionType) {
			return new Response(createPositionType, HttpStatus.CREATED, "created Position");
		} else {
			return new Response("Position not created", HttpStatus.CONFLICT);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getAllPositionTypes() throws ParseException {

		List<PositionMapper> allPositionTypes = positionService.getAllPositions();

		if (!CollectionUtils.isEmpty(allPositionTypes)) {
			return new Response(allPositionTypes, HttpStatus.OK, "Position found");
		} else {
			return new Response("Position not found", HttpStatus.CONFLICT);
		}
	}

	@PUT
	@Path("/updatePosition")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updatePositionType(PositionMapper positionMapper) {

		Position position = new Position();

		BeanUtils.copyProperties(positionMapper, position);
		position.setUpdatedDate(new Date());
		Position createPositionType = positionService.updatePosition(position);

		if (null != createPositionType) {
			return new Response(createPositionType, HttpStatus.OK, "updated Position");
		} else {
			return new Response("Position not updated", HttpStatus.CONFLICT);
		}
	}

	@POST
	@Path("/deletePosition")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deletePositionType(Position position) {

		try {
			positionService.deletePositionId(position);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new Response("Position not deleted", HttpStatus.CONFLICT);
		}
		return new Response("Position  deleted", HttpStatus.OK);
	}

	@GET
	@Path("/activepositions")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getActivePositions() {

		List<Position> allPositionTypes = positionService.getActivePositions();

		if (!CollectionUtils.isEmpty(allPositionTypes)) {
			return new Response(allPositionTypes, HttpStatus.OK, "Position found");
		} else {
			return new Response("Position not found", HttpStatus.CONFLICT);
		}
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getPositionTypeById(@PathParam("id") Long positionId) throws ParseException {

		PositionMapper positionMapper = positionService.getPositionById(positionId);

		if (null != positionMapper) {
			return new Response(positionMapper, HttpStatus.OK, "PositionTypes found");
		} else {
			return new Response("PositionType not found", HttpStatus.CONFLICT);
		}
	}

	/*
	 * @GET
	 * 
	 * @Path("/applicationSeq/{positionId}")
	 * 
	 * @Produces(MediaType.APPLICATION_JSON)
	 * 
	 * @Consumes(MediaType.APPLICATION_JSON) public Response
	 * getApplicationIdByPositionCode(@PathParam("positionId") Long positionId)
	 * throws ParseException {
	 * 
	 * PositionMapper position = positionService.getPositionById(positionId);
	 * 
	 * String applicationId =
	 * positionService.getApplicationIdByPositionCode(position);
	 * 
	 * return new Response(applicationId, "PositionType not found",
	 * HttpStatus.CONFLICT);
	 * 
	 * }
	 */

	@POST
	@Path("/applicationSeq")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getApplication(SequenceMapper sequenceMapper) throws ParseException {

		if (sequenceMapper.getPositionId() == null) {
			return new Response(false, HttpStatus.CONFLICT, "Application already exists");
		}
		if (positionService.getApplication(sequenceMapper.getPositionId(), sequenceMapper.getUserId())) {
			return new Response(false, HttpStatus.CONFLICT, "Application already exists");
		} else {
			PositionMapper position = positionService.getPositionById(sequenceMapper.getPositionId());
			String applicationNumber = positionService.getApplicationIdByPositionCode(position);
			position.setApplicationNumber(applicationNumber);
			return new Response(position, true, HttpStatus.OK, "Application not exists");
		}
	}

}
