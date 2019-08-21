package com.imtac.recruitment.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.dao.AchievementDao;
import com.imtac.recruitment.dao.CertificateDao;
import com.imtac.recruitment.dao.EducationalQualificationsInfoDao;
import com.imtac.recruitment.dao.EmploymentInfoDao;
import com.imtac.recruitment.dao.ExperienceDao;
import com.imtac.recruitment.dao.ReferenceDao;
import com.imtac.recruitment.entity.Achievement;
import com.imtac.recruitment.entity.Certificate;
import com.imtac.recruitment.entity.EducationalQualifications;
import com.imtac.recruitment.entity.EducationalQualificationsMapper;
import com.imtac.recruitment.entity.EmploymentInfo;
import com.imtac.recruitment.entity.EmploymentInfoMapper;
import com.imtac.recruitment.entity.Experience;
import com.imtac.recruitment.entity.ExperienceMapper;
import com.imtac.recruitment.entity.QualificationsArrayMapper;
import com.imtac.recruitment.entity.Reference;
import com.imtac.recruitment.service.EducationalQualificationsInfoService;
import com.imtac.recruitment.service.EmploymentInfoService;

public class EmploymentInfoServiceImpl implements EmploymentInfoService {

	@Autowired
	private EmploymentInfoDao employmentInfoDao;

	@Autowired
	private ReferenceDao referenceDao;

	@Autowired
	private EducationalQualificationsInfoDao educationalQualificationsInfoDao;

	@Autowired
	private EducationalQualificationsInfoService educationalQualificationInfoService;

	@Autowired
	private ExperienceDao experienceDao;

	@Autowired
	private AchievementDao achievementDao;

	@Autowired
	private CertificateDao certificatetDao;

	@Override
	public EmploymentInfo saveEmploymentInfo(EmploymentInfo EmploymentInfo) {
		return employmentInfoDao.save(EmploymentInfo);
	}

	@Override
	public EmploymentInfo getEmploymentInfoById(Long id) {
		return employmentInfoDao.find(id);
	}

	@Override
	public EmploymentInfo updateEmploymentInfo(EmploymentInfo EmploymentInfo) {
		return employmentInfoDao.save(EmploymentInfo);
	}

	@Override
	public void saveReferences(List<Reference> references, Long employmentInfoId) {

		for (Reference reference : references) {
			reference.setEmploymnetInfoId(employmentInfoId);
			referenceDao.save(reference);
		}
	}

	@Override
	public void deleteEmploymentInfoById(EmploymentInfo employmentInfo) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Reference> getReferencesByEmploymentInfoById(Long id) {

		return employmentInfoDao.getReferencesByEmploymentInfoById(id);
	}

	@Override
	public void saveEducationQualifications(QualificationsArrayMapper qualificationsArrayMapper,
			Long employmentInfoId) {
		educationalQualificationInfoService.saveEducationalQualificationInfo(qualificationsArrayMapper,
				employmentInfoId);
	}

	@Override
	public List<EducationalQualificationsMapper> getQualificationByEmploymentInfoId(Long id) {
		List<EducationalQualifications> educationalQualifications = educationalQualificationsInfoDao
				.getEducationalQualificationsByEmploymentInfoId(id);
		List<EducationalQualificationsMapper> educationalQualificationsMappers = new ArrayList<>();

		for (EducationalQualifications educationalQualification : educationalQualifications) {
			educationalQualification.setCertificate(
					educationalQualificationsInfoDao.find(educationalQualification.getId()).getCertificate());
			EducationalQualificationsMapper educationalQualificationsMapper = new EducationalQualificationsMapper();
			BeanUtils.copyProperties(educationalQualification, educationalQualificationsMapper);
			educationalQualificationsMappers.add(educationalQualificationsMapper);
		}

		return educationalQualificationsMappers;
	}

	@Override
	public EmploymentInfoMapper getEmploymentInfoByApplicationId(String applicationId) {
		EmploymentInfoMapper employmentInfoMapper = new EmploymentInfoMapper();
		QualificationsArrayMapper qualificationsArrayMapper = new QualificationsArrayMapper();
		EmploymentInfo employmentInfo = employmentInfoDao.getEmploymentInfoByApplicationId(applicationId).get(0);
		BeanUtils.copyProperties(employmentInfo, employmentInfoMapper);
		employmentInfoMapper.setReferences(getReferencesByEmploymentInfoById(employmentInfo.getId()));
		qualificationsArrayMapper
				.setEducationalQualificationsMapper(getQualificationByEmploymentInfoId(employmentInfo.getId()));
		employmentInfoMapper.setQualificationsArrayMapper(qualificationsArrayMapper);
		employmentInfoMapper.setExperiencedetails(getExperienceDetails(employmentInfo.getId()));
		employmentInfoMapper.setAchievements(achievementDao.getAchievementsByEmploymentInfoId(employmentInfo.getId()));
		employmentInfoMapper.setCertificates(getCertificatesByEmploymentInfoId(employmentInfo.getId()));
		return employmentInfoMapper;
	}

	private List<Certificate> getCertificatesByEmploymentInfoId(Long id) {
		List<Certificate> certificatesByEmploymentInfoId = certificatetDao.getCertificatesByEmploymentInfoId(id);

		for (Certificate certificate : certificatesByEmploymentInfoId) {
			certificate.setCertificateImage(certificatetDao.find(certificate.getId()).getCertificateImage());
		}
		return certificatesByEmploymentInfoId;
	}

	private List<ExperienceMapper> getExperienceDetails(Long id) {

		List<Experience> experiences = experienceDao.getExperienceDetailsByEmploymentInfoId(id);
		List<ExperienceMapper> experienceMappers = new ArrayList<>();
		for (Experience experience : experiences) {
			ExperienceMapper experienceMapper = new ExperienceMapper();
			BeanUtils.copyProperties(experience, experienceMapper);
			experienceMappers.add(experienceMapper);
		}
		return experienceMappers;
	}

	@Override
	public void saveExperienceDetails(List<ExperienceMapper> experiencedetails, Long id) {

		for (ExperienceMapper experiencedetail : experiencedetails) {
			Experience experience = new Experience();
			BeanUtils.copyProperties(experiencedetail, experience);
			experience.setEmploymentInfoId(id);
			experienceDao.save(experience);
		}
	}

	@Override
	public void saveAchievements(List<Achievement> achievements, Long id) {

		for (Achievement achievement : achievements) {
			achievement.setEmploymentInfoId(id);
			achievementDao.save(achievement);
		}

	}

	@Override
	public void saveCertificateDetails(List<Certificate> certificates, Long id) {
		for (Certificate certificate : certificates) {
			certificate.setEmploymentInfoId(id);
			certificatetDao.save(certificate);
		}

	}

	@Override
	public void deleteReferencesByEmploymentInfoId(Long employmentInfoId) {
		referenceDao.deleteReferencesByEmploymentInfoId(employmentInfoId);
	}

	@Override
	public void deleteQualificationsByEmploymentInfoId(Long employmentInfoId) {
		educationalQualificationsInfoDao.deleteQualificationsByEmploymentInfoId(employmentInfoId);
	}

	@Override
	public void deleteExperienceDetailsByEmploymentInfoId(Long employmentInfoId) {
		experienceDao.deleteExperienceDetailsByEmploymentInfoId(employmentInfoId);

	}

	@Override
	public void deleteAchievementsByEmploymentInfoId(Long employmentInfoId) {
		achievementDao.deleteAchievementsByEmploymentInfoId(employmentInfoId);

	}

	@Override
	public void deleteCertificatesByEmploymentInfoId(Long employmentInfoId) {
		certificatetDao.deleteCertificatesByEmploymentInfoId(employmentInfoId);

	}

}
