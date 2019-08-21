package com.imtac.recruitment.dao;

import java.text.ParseException;
import java.util.List;

import com.imtac.recruitment.entity.Position;
import com.imtac.recruitment.entity.PositionMapper;

public interface PositionDao extends Dao<Position, Long> {

	List<PositionMapper> getAllPositions() throws ParseException;

	void deletePosition(Position position);

	List<Position> getActivePositions();

	PositionMapper getPositionById(Long positionId) throws ParseException;

	boolean getApplication(Long positionId, Long userId);

}
