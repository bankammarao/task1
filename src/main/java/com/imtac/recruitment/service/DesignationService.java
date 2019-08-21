package com.imtac.recruitment.service;

import java.util.List;

import com.imtac.recruitment.entity.Designation;
import com.imtac.recruitment.entity.DesignationMapper;

public interface DesignationService {

	Designation createDesignation(Designation designation);

	List<DesignationMapper> getAllDesignations();

	Designation getDesignationById(Long designationId);

	void deleteDesignationById(Designation designation);

	Designation updateDesignation(Designation designation);

}
