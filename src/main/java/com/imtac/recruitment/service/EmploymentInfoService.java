package com.imtac.recruitment.service;

import java.util.List;

import com.imtac.recruitment.entity.Achievement;
import com.imtac.recruitment.entity.Certificate;
import com.imtac.recruitment.entity.EducationalQualificationsMapper;
import com.imtac.recruitment.entity.EmploymentInfo;
import com.imtac.recruitment.entity.EmploymentInfoMapper;
import com.imtac.recruitment.entity.ExperienceMapper;
import com.imtac.recruitment.entity.QualificationsArrayMapper;
import com.imtac.recruitment.entity.Reference;

public interface EmploymentInfoService {

	EmploymentInfo saveEmploymentInfo(EmploymentInfo employmentInfo);

	EmploymentInfo getEmploymentInfoById(Long id);

	void deleteEmploymentInfoById(EmploymentInfo employmentInfo);

	EmploymentInfo updateEmploymentInfo(EmploymentInfo employmentInfo);

	void saveReferences(List<Reference> references, Long emplpoymentInfoId);
	
	List<Reference> getReferencesByEmploymentInfoById(Long id);

	void saveEducationQualifications(QualificationsArrayMapper qualificationsArrayMapper, Long id);

	List<EducationalQualificationsMapper> getQualificationByEmploymentInfoId(Long id);

	EmploymentInfoMapper getEmploymentInfoByApplicationId(String applicationId);

	void saveExperienceDetails(List<ExperienceMapper> experiencedetails, Long id);

	void saveAchievements(List<Achievement> achievements, Long id);

	void saveCertificateDetails(List<Certificate> certificates, Long id);

	void deleteReferencesByEmploymentInfoId(Long employmentInfoId);

	void deleteQualificationsByEmploymentInfoId(Long employmentInfoId);

	void deleteExperienceDetailsByEmploymentInfoId(Long employmentInfoId);

	void deleteAchievementsByEmploymentInfoId(Long employmentInfoId);

	void deleteCertificatesByEmploymentInfoId(Long employmentInfoId);

}
