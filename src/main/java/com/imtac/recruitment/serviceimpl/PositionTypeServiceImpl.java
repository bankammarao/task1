package com.imtac.recruitment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.dao.PositionTypedao;
import com.imtac.recruitment.entity.PositionType;
import com.imtac.recruitment.entity.PositionTypeMapper;
import com.imtac.recruitment.service.PositionTypeService;

public class PositionTypeServiceImpl implements PositionTypeService {

	@Autowired
	private PositionTypedao positionTypedao;

	@Override
	public PositionType createPositionType(PositionType positionType) {
		return positionTypedao.save(positionType);
	}

	@Override
	public List<PositionTypeMapper> getAllPositionTypes() {
		return positionTypedao.getAllPositionTypes();
	}

	@Override
	public PositionType getPositionTypeById(Long positionTypeId) {
		return positionTypedao.find(positionTypeId);
	}

	@Override
	public void deletePositionTypeById(PositionType positionType) {
		positionTypedao.deleteById(positionType);
	}

	@Override
	public PositionType updatePositionType(PositionType positionType) {
		return positionTypedao.save(positionType);
	}

}
