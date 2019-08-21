package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.Experience;

public interface ExperienceDao extends Dao<Experience, Long> {

	List<Experience> getExperienceDetailsByEmploymentInfoId(Long id);

	void deleteExperienceDetailsByEmploymentInfoId(Long employmentInfoId);

}
