package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.Designation;
import com.imtac.recruitment.entity.DesignationMapper;

public interface DesignationDao extends Dao<Designation, Long> {

	List<DesignationMapper> getAllDesignations();

	int deleteById(Designation designation);

}
