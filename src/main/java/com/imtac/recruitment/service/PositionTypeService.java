package com.imtac.recruitment.service;

import java.util.List;

import com.imtac.recruitment.entity.PositionType;
import com.imtac.recruitment.entity.PositionTypeMapper;

public interface PositionTypeService {

	PositionType createPositionType(PositionType positionType);

	List<PositionTypeMapper> getAllPositionTypes();

	PositionType getPositionTypeById(Long positionTypeId);
	
	void deletePositionTypeById(PositionType positionType);

	PositionType updatePositionType(PositionType positionType);

}
