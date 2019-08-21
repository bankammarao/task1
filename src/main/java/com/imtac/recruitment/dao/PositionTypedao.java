package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.PositionType;
import com.imtac.recruitment.entity.PositionTypeMapper;

public interface PositionTypedao extends Dao<PositionType, Long> {

	int deleteById(PositionType positionType);

	List<PositionTypeMapper> getAllPositionTypes();

}
