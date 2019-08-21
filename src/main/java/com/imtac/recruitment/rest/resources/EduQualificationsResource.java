package com.imtac.recruitment.rest.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.entity.EducationalQualifications;
import com.imtac.recruitment.entity.QualificationsArrayMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.EducationalQualificationsInfoService;

@Path("/eduQualificationsInfo")
public class EduQualificationsResource {
	
	@Autowired
	private EducationalQualificationsInfoService educationalQualificationInfoService;

	@POST
	@Path("/saveEducationalQualificationsInfo/{userId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response saveEducationalInfo(QualificationsArrayMapper qualificationsArrayMapper, @PathParam("userId") Long userId) {
		
			return educationalQualificationInfoService.saveEducationalQualificationInfo(qualificationsArrayMapper, userId);
	}
	
	/*@GET
	@Path("/getEduQualificationsInfoByUserId/{userId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEducationalInfoByUserId(@PathParam("userId") Long userId) {
		
			return educationalQualificationInfoService.getEducationalQualificationInfo(userId);
	}*/
	
	@GET
	@Path("/getEduQualificationsInfoByRecordById/{recordId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEducationalInfoByPrimaryKey(@PathParam("recordId") Long recordId) {
		
			return educationalQualificationInfoService.getEducationalInfoByPrimaryKey(recordId);
	}
	
	@PUT
	@Path("/updateEduQualificationsInfo/{recordId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateEducationalInfoByPrimaryKey(@PathParam("recordId") Long recordId, EducationalQualifications equQualifications) {
		
			return educationalQualificationInfoService.updateEducationalInfoByPrimaryKey(recordId, equQualifications);
	}
	
	/*
    
	@PUT
	@Path("/updateDemographicInfo")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateDemographic(DemographicInfoMapper demographicMapper) {

		DemographicInfo demographic = new DemographicInfo();

		BeanUtils.copyProperties(demographicMapper, demographic);

		DemographicInfo demographicInfo = demographicInfoService.updateDemographicInfo(demographic);

		if (null != demographicInfo) {
			return new Response(demographicInfo, HttpStatus.OK, "Demographic information updated");
		} else {
			return new Response("unable to update demographic information", HttpStatus.CONFLICT);
		}
	}

	@DELETE
	@Path("/deleteDemographicInfo")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteDemographicInfo(DemographicInfo demographicInfo) {

		try {
			demographicInfoService.deleteDemographicInfoById(demographicInfo);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new Response("unable to delete demographic information", HttpStatus.CONFLICT);
		}
		return new Response("demographic information  deleted", HttpStatus.OK);
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getDemographicInfoById(@PathParam("id") Long id) {

		DemographicInfo demographicInfo = demographicInfoService.getDemographicInfoById(id);

		if (null != demographicInfo) {
			return new Response(demographicInfo, HttpStatus.OK, "Demographic information found");
		} else {
			return new Response("unable to find demographic information", HttpStatus.CONFLICT);
		}
	}
	
	*/
	
	
}
