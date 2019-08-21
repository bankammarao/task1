package com.imtac.recruitment.serviceimpl;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.imtac.recruitment.dao.EducationalQualificationsInfoDao;
import com.imtac.recruitment.entity.EducationalQualifications;
import com.imtac.recruitment.entity.EducationalQualificationsMapper;
import com.imtac.recruitment.entity.QualificationsArrayMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.EducationalQualificationsInfoService;

@Service
public class EducationalQualificationsServiceImpl implements EducationalQualificationsInfoService {

	@Autowired
	private EducationalQualificationsInfoDao educationalQualificationsInfoDao;
	
	
	@Override
	public Response saveEducationalQualificationInfo(QualificationsArrayMapper qualificationsArrayMapper, Long employmentInfoId) {
		Response response = new Response();
		try {
			if (qualificationsArrayMapper.getEducationalQualificationsMapper() != null
					&& !qualificationsArrayMapper.getEducationalQualificationsMapper().isEmpty()) {
				for (EducationalQualificationsMapper educationalQualificationsMapper : qualificationsArrayMapper
						.getEducationalQualificationsMapper()) {

					EducationalQualifications qualification = new EducationalQualifications();
					BeanUtils.copyProperties(educationalQualificationsMapper, qualification);
					qualification.setCreatedDate(Date.valueOf(LocalDate.now()));
					qualification.setEmploymentInfoId(employmentInfoId);
					educationalQualificationsInfoDao.save(qualification);
				}
				response.setResponseMessage("Educational Details Submitted Successfully");
				response.setStatusCode(HttpStatus.OK.value());
			}
		} catch (Exception e) {
			response.setResponseMessage("Educational Details Not Submitted due to some problem.");
		    response.setErrorMessage(e.getMessage());
			e.printStackTrace();
		}

		return response;
	}

	@Override
	public ArrayList<EducationalQualifications> getEducationalQualificationInfo(Long userId) {
		
		return educationalQualificationsInfoDao.getEducationalQualificationInfo(userId);
	}

	@Override
	public Response getEducationalInfoByPrimaryKey(Long recordId) {
		Response response = new Response();
		EducationalQualifications eduQualification =  educationalQualificationsInfoDao.find(recordId);
		if(null != eduQualification) {
			response.setResponseMessage("Educational Details Retrieved");
			response.setStatusCode(HttpStatus.OK.value());
			response.setResponseData(eduQualification);
		}
		else {
			response.setResponseMessage("Educational Details Not Found");
			response.setStatusCode(HttpStatus.NOT_FOUND.value());
		}
		return response;
	}

	@Override
	public Response updateEducationalInfoByPrimaryKey(Long recordId, EducationalQualifications eq) {
		
		
		Response response = new Response();
		
		
		try {
			EducationalQualifications oldEntity =  educationalQualificationsInfoDao.find(recordId);
			if (null != eq.getMaxMarks()) {
				oldEntity.setMaxMarks(eq.getMaxMarks());
			}
			if (null != eq.getObtinedMarks()) {
				oldEntity.setObtinedMarks(eq.getObtinedMarks());
			}
			if (null != eq.getYearPassing()) {
				oldEntity.setYearPassing(eq.getYearPassing());
			}
			if (null != eq.getBoard()) {
				oldEntity.setBoard(eq.getBoard());
			}
			if (null != eq.getCertificate()) {
				oldEntity.setCertificate(eq.getCertificate());
			}
			if (null != eq.getClassOfDivision()) {
				oldEntity.setClassOfDivision(eq.getClassOfDivision());
			}
			if (null != eq.getDistinction()) {
				oldEntity.setDistinction(eq.getDistinction());
			}
			if (null != eq.getPercentage()) {
				oldEntity.setPercentage(eq.getPercentage());
			}
			if(null != eq.getQualification()) {
				oldEntity.setQualification(eq.getQualification());
			}
			if(null != eq.getSubjects()) {
				oldEntity.setSubjects(eq.getSubjects());
			}
			
			EducationalQualifications updatedEntity = educationalQualificationsInfoDao.save(oldEntity);
			response.setResponseMessage("Educational Qualification Details Updated Successfully");
			response.setStatusCode(HttpStatus.OK.value());
			response.setResponseData(updatedEntity);
		} catch (Exception e) {
			e.printStackTrace();
			response.setResponseMessage("Unable to Update Educational Qualification");
			response.setErrorMessage(e.getMessage());
			response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
		}
		return response;

	}

}
