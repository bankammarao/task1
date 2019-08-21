package com.imtac.recruitment.rest.resources;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;

import com.imtac.recruitment.entity.EmploymentInfo;
import com.imtac.recruitment.entity.EmploymentInfoMapper;
import com.imtac.recruitment.entity.QualificationsArrayMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.EmploymentInfoService;

@Path("employmentInfo")
public class EmploymentInfoResource {

	@Autowired
	EmploymentInfoService employmentInfoService;

	@POST
	@Path("/saveEmploymentInfo")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response saveEmploymentInfo(EmploymentInfoMapper employmentInfoMapper) throws IOException {

		EmploymentInfo employmentInfo = new EmploymentInfo();

		BeanUtils.copyProperties(employmentInfoMapper, employmentInfo);

		employmentInfo.setUpdatedDate(new Date());

		EmploymentInfo savedEmploymentInfo = employmentInfoService.saveEmploymentInfo(employmentInfo);
		if (null != savedEmploymentInfo) {
			if (!CollectionUtils.isEmpty(employmentInfoMapper.getReferences())) {
				employmentInfoService.saveReferences(employmentInfoMapper.getReferences(), savedEmploymentInfo.getId());
			}

			if (null != employmentInfoMapper.getQualificationsArrayMapper()) {

				employmentInfoService.saveEducationQualifications(employmentInfoMapper.getQualificationsArrayMapper(),
						savedEmploymentInfo.getId());
			}

			if (!CollectionUtils.isEmpty(employmentInfoMapper.getExperiencedetails())) {
				employmentInfoService.saveExperienceDetails(employmentInfoMapper.getExperiencedetails(),
						savedEmploymentInfo.getId());
			}

			if (!CollectionUtils.isEmpty(employmentInfoMapper.getAchievements())) {

				employmentInfoService.saveAchievements(employmentInfoMapper.getAchievements(),
						savedEmploymentInfo.getId());
			}
			if (!CollectionUtils.isEmpty(employmentInfoMapper.getCertificates())) {

				employmentInfoService.saveCertificateDetails(employmentInfoMapper.getCertificates(),
						savedEmploymentInfo.getId());
			}
			return new Response(savedEmploymentInfo, HttpStatus.CREATED, "Employment information saved");
		} else {
			return new Response("unable to save employment information", HttpStatus.CONFLICT);
		}
	}

	@PUT
	@Path("/updateEmploymentInfo")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response updateDemographic(EmploymentInfoMapper employmentInfoMapper) throws IOException {

		EmploymentInfo employmentInfo = new EmploymentInfo();

		BeanUtils.copyProperties(employmentInfoMapper, employmentInfo);

		employmentInfo.setUpdatedDate(new Date());

		EmploymentInfo updatedEmploymentInfo = employmentInfoService.updateEmploymentInfo(employmentInfo);

		if (null != updatedEmploymentInfo) {
			if (!CollectionUtils.isEmpty(employmentInfoMapper.getReferences())) {
				employmentInfoService.deleteReferencesByEmploymentInfoId(updatedEmploymentInfo.getId());
				employmentInfoService.saveReferences(employmentInfoMapper.getReferences(),
						updatedEmploymentInfo.getId());
			}

			if (null != employmentInfoMapper.getQualificationsArrayMapper()) {
				employmentInfoService.deleteQualificationsByEmploymentInfoId(updatedEmploymentInfo.getId());
				employmentInfoService.saveEducationQualifications(employmentInfoMapper.getQualificationsArrayMapper(),
						updatedEmploymentInfo.getId());
			}

			if (!CollectionUtils.isEmpty(employmentInfoMapper.getExperiencedetails())) {
				employmentInfoService.deleteExperienceDetailsByEmploymentInfoId(updatedEmploymentInfo.getId());
				employmentInfoService.saveExperienceDetails(employmentInfoMapper.getExperiencedetails(),
						updatedEmploymentInfo.getId());
			}

			if (!CollectionUtils.isEmpty(employmentInfoMapper.getAchievements())) {
				employmentInfoService.deleteAchievementsByEmploymentInfoId(updatedEmploymentInfo.getId());
				employmentInfoService.saveAchievements(employmentInfoMapper.getAchievements(),
						updatedEmploymentInfo.getId());
			}
			if (!CollectionUtils.isEmpty(employmentInfoMapper.getCertificates())) {
				employmentInfoService.deleteCertificatesByEmploymentInfoId(updatedEmploymentInfo.getId());
				employmentInfoService.saveCertificateDetails(employmentInfoMapper.getCertificates(),
						updatedEmploymentInfo.getId());
			}
			return new Response(updatedEmploymentInfo, HttpStatus.CREATED, "Employment information updated");
		} else {
			return new Response("unable to update employment information", HttpStatus.CONFLICT);
		}
	}

	/*
	 * @DELETE
	 * 
	 * @Path("/deleteEmploymentInfo")
	 * 
	 * @Produces(MediaType.APPLICATION_JSON)
	 * 
	 * @Consumes(MediaType.APPLICATION_JSON) public Response
	 * deleteEmploymentInfo(EmploymentInfo EmploymentInfo) {
	 * 
	 * try { EmploymentInfoService.deleteEmploymentInfoById(EmploymentInfo); }
	 * catch (Exception ex) { ex.printStackTrace(); return new
	 * Response("unable to delete demographic information",
	 * HttpStatus.CONFLICT); } return new
	 * Response("demographic information  deleted", HttpStatus.OK); }
	 */

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getEmploymentInfoById(@PathParam("id") Long id) {

		EmploymentInfoMapper employmentInfoMapper = new EmploymentInfoMapper();
		EmploymentInfo employmentInfo = employmentInfoService.getEmploymentInfoById(id);
		if (null != employmentInfo) {
			BeanUtils.copyProperties(employmentInfo, employmentInfoMapper);

			employmentInfoMapper.setReferences(employmentInfoService.getReferencesByEmploymentInfoById(id));

			QualificationsArrayMapper qualificationsArrayMapper = new QualificationsArrayMapper();
			qualificationsArrayMapper.setEducationalQualificationsMapper(
					employmentInfoService.getQualificationByEmploymentInfoId(employmentInfo.getId()));
			employmentInfoMapper.setQualificationsArrayMapper(qualificationsArrayMapper);

			return new Response(employmentInfoMapper, HttpStatus.OK, "Employment information found");
		} else {
			return new Response("unable to find employment information", HttpStatus.CONFLICT);
		}
	}

	@POST
	@Path("/fileupload")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response fileUpload(@FormDataParam("aadhar") InputStream aadharIs,
			@FormDataParam("aadhar") FormDataContentDisposition aadharFileDetails,
			@FormDataParam("exService") InputStream exServiceIs,
			@FormDataParam("exService") FormDataContentDisposition exServiceFileDetails) throws IOException {

		System.out.println(aadharFileDetails.getFileName());
		System.out.println(exServiceFileDetails.getFileName());

		return new Response(HttpStatus.OK, "Demographic information found");
	}

	@GET
	@Path("/getEmploymentInfoById/{applicationId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getEmploymentInfoByApplicationId(@PathParam("applicationId") String applicationId) {

		EmploymentInfoMapper employmentInfo = employmentInfoService.getEmploymentInfoByApplicationId(applicationId);

		if (null != employmentInfo) {
			return new Response(employmentInfo, HttpStatus.OK, "Employment information found");
		} else {
			return new Response("unable to find employment information", HttpStatus.CONFLICT);
		}
	}

}
