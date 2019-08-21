package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.EmploymentType;
import com.imtac.recruitment.entity.EmploymentTypeMapper;

public interface EmploymentTypeDao extends Dao<EmploymentType, Long> {

	int deleteById(EmploymentType employmentType);

	List<EmploymentTypeMapper> getAllEmploymentTypes();

}
