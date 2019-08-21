package com.imtac.recruitment.dao;

import com.imtac.recruitment.entity.GenerateApplicationNumber;
import com.imtac.recruitment.entity.PositionMapper;

public interface GenerateApplicationNumberDao extends Dao<GenerateApplicationNumber, Long> {
	
	public String getLastGeneratedAppNumber(PositionMapper positionMapper,int i);

	

}
