package com.imtac.recruitment.service;

import java.util.List;

import com.imtac.recruitment.entity.EmploymentType;
import com.imtac.recruitment.entity.EmploymentTypeMapper;

public interface EmploymentTypeService {

	EmploymentType createEmploymentType(EmploymentType employmentType);

	List<EmploymentTypeMapper> getAllEmploymentTypes();

	EmploymentType getEmploymentTypeById(Long employmentTypeId);
	
	void deleteEmploymentTypeById(EmploymentType employmentType);

	EmploymentType updateEmploymentType(EmploymentType employmentType);

}
