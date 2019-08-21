package com.imtac.recruitment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.dao.EmploymentTypeDao;
import com.imtac.recruitment.entity.EmploymentType;
import com.imtac.recruitment.entity.EmploymentTypeMapper;
import com.imtac.recruitment.service.EmploymentTypeService;

public class EmploymentTypeServiceImpl implements EmploymentTypeService {

	@Autowired
	private EmploymentTypeDao employmentTypeDao;

	@Override
	public EmploymentType createEmploymentType(EmploymentType employmentType) {
		return employmentTypeDao.save(employmentType);
	}

	@Override
	public List<EmploymentTypeMapper> getAllEmploymentTypes() {
		return employmentTypeDao.getAllEmploymentTypes();
	}

	@Override
	public EmploymentType getEmploymentTypeById(Long employmentTypeId) {
		return employmentTypeDao.find(employmentTypeId);
	}

	@Override
	public void deleteEmploymentTypeById(EmploymentType employmentType) {
		employmentTypeDao.deleteById(employmentType);
	}

	@Override
	public EmploymentType updateEmploymentType(EmploymentType employmentType) {
		return employmentTypeDao.save(employmentType);
	}

}
