package com.imtac.recruitment.service;

import java.text.ParseException;
import java.util.List;

import com.imtac.recruitment.entity.Position;
import com.imtac.recruitment.entity.PositionMapper;

public interface PositionService {

	Position createPosition(Position position);

	List<PositionMapper> getAllPositions() throws ParseException;

	PositionMapper getPositionById(Long positionId) throws ParseException;
	
	void deletePositionId(Position position);

	Position updatePosition(Position position);

	List<Position> getActivePositions();

	String getApplicationIdByPositionCode(PositionMapper position);

	String getApplicationIdByPositionCode(String positionCode);

	boolean getApplication(Long positionId, Long userId);

}
