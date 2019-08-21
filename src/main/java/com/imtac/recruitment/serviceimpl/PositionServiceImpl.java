package com.imtac.recruitment.serviceimpl;

import java.text.ParseException;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.dao.GenerateApplicationNumberDao;
import com.imtac.recruitment.dao.PositionDao;
import com.imtac.recruitment.entity.Position;
import com.imtac.recruitment.entity.PositionMapper;
import com.imtac.recruitment.service.PositionService;

public class PositionServiceImpl implements PositionService {

	@Autowired
	private PositionDao positionDao;

	@Autowired
	private GenerateApplicationNumberDao applicationNumberDao;

	@Override
	public Position createPosition(Position position) {
		return positionDao.save(position);
	}

	@Override
	public List<PositionMapper> getAllPositions() throws ParseException {
		return positionDao.getAllPositions();
	}

	@Override
	public PositionMapper getPositionById(Long positionId) throws ParseException {
		return positionDao.getPositionById(positionId);
	}

	@Override
	public void deletePositionId(Position position) {
		positionDao.deletePosition(position);
	}

	@Override
	public Position updatePosition(Position position) {
		position.setStatus(positionDao.find(position.getId()).getStatus());
		return positionDao.save(position);
	}

	@Override
	public List<Position> getActivePositions() {
		return positionDao.getActivePositions();
	}

	@Override
	public String getApplicationIdByPositionCode(PositionMapper positionMapper) {
		return applicationNumberDao.getLastGeneratedAppNumber(positionMapper,
				Calendar.getInstance().get(Calendar.YEAR));
	}

	@Override
	public String getApplicationIdByPositionCode(String positionCode) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean getApplication(Long positionId, Long userId) {

		return positionDao.getApplication(positionId, userId);
	}

}
