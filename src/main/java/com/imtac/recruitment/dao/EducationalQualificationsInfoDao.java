package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.List;

import com.imtac.recruitment.entity.EducationalQualifications;

public interface EducationalQualificationsInfoDao extends Dao<EducationalQualifications, Long>{

	ArrayList<EducationalQualifications> getEducationalQualificationInfo(Long userId);

	List<EducationalQualifications> getEducationalQualificationsByEmploymentInfoId(Long employmentInfoId);

	void deleteQualificationsByEmploymentInfoId(Long employmentInfoId);

}
