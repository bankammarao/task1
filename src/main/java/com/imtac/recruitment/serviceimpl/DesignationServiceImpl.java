package com.imtac.recruitment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.dao.DesignationDao;
import com.imtac.recruitment.entity.Designation;
import com.imtac.recruitment.entity.DesignationMapper;
import com.imtac.recruitment.service.DesignationService;

public class DesignationServiceImpl implements DesignationService{
	
	
	@Autowired
	private DesignationDao designationDao;

	@Override
	public Designation createDesignation(Designation designation) {
		return designationDao.save(designation);
	}

	@Override
	public List<DesignationMapper> getAllDesignations() {
		return designationDao.getAllDesignations();
	}

	

	@Override
	public Designation getDesignationById(Long designationId) {
		return designationDao.find(designationId);
	}

	@Override
	public void deleteDesignationById(Designation designation) {
		designationDao.deleteById(designation);
	}

	@Override
	public Designation updateDesignation(Designation designation) {
		return designationDao.save(designation);
	}

}
