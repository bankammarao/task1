package com.imtac.recruitment.rest.resources;

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

import com.imtac.recruitment.entity.Fee;
import com.imtac.recruitment.entity.FeeMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.FeeService;

@Path("feeStructure")
public class FeeResource {

	@Autowired
	private FeeService feeService;
	
	@POST
	@Path("/insertFeeDetails")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createFeeDetails(FeeMapper feeMapper) {

		Fee feeDetails = new Fee();

		BeanUtils.copyProperties(feeMapper, feeDetails);

		feeDetails.setFeeStatus("Active");

		feeDetails.setUpdatedDate(new Date());

		Fee insertFeeDetails = feeService.createFeeDetails(feeDetails);

		if (null != insertFeeDetails) {
			return new Response(insertFeeDetails, HttpStatus.CREATED, "Fee Details Inserted");
		} else {
			return new Response("Fee Details Not Inserted", HttpStatus.CONFLICT);
		}
	}
	
	@PUT
	@Path("/updateFeeDetails")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateFeeDetails(FeeMapper FeeMapper) {

		Fee feeDetails = new Fee();		

		BeanUtils.copyProperties(FeeMapper, feeDetails);
		
		feeDetails.setUpdatedDate(new Date());
		feeDetails.setFeeStatus("Active");

		Fee  updateFeeDetails = feeService.updateFeeDetails(feeDetails);

		if (null != updateFeeDetails) {
			return new Response(updateFeeDetails, HttpStatus.OK, "FeeDetails Updated");
		} else {
			return new Response("FeeDetails not Updated", HttpStatus.CONFLICT);
		}
	}
	
	@POST
	@Path("/deleteFeeDetails")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteFeeDetailsById(Fee feeDetails) {
        
		try {
			feeService.deleteFeeDetailsById(feeDetails);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new Response("FeeDetails not deleted", HttpStatus.CONFLICT);
		}
		return new Response("Position  deleted", HttpStatus.OK);
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getFeeDetailsById(@PathParam("id") Long feeDetailsId) {

		Fee feeDetails = feeService.getFeeDetailsById(feeDetailsId);

		if (null!=feeDetails) {
			return new Response(feeDetails, HttpStatus.OK, "FeeDetails found");
		} else {
			return new Response("FeeDetails not found", HttpStatus.CONFLICT);
		}
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getAllFeeDetails() {

		List<FeeMapper> feeDetailsList = feeService.getAllFeeDetails();

		if (!CollectionUtils.isEmpty(feeDetailsList)) {
			return new Response(feeDetailsList, HttpStatus.OK, "feedetails found");
		} else {
			return new Response("FeeDetails not found", HttpStatus.CONFLICT);
		}
	}

}
