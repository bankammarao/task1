package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.EmploymentInfo;
import com.imtac.recruitment.entity.Reference;

public interface EmploymentInfoDao extends Dao<EmploymentInfo, Long> {

	
	 List<Reference> getReferencesByEmploymentInfoById(Long id);

	List<EmploymentInfo> getEmploymentInfoByApplicationId(String applicationId);
}
