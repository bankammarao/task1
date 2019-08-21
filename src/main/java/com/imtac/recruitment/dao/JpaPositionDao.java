package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.util.CollectionUtils;

import com.imtac.recruitment.entity.Position;
import com.imtac.recruitment.entity.PositionMapper;

public class JpaPositionDao extends JpaDao<Position, Long> implements PositionDao {

	public JpaPositionDao() {
		super(Position.class);
	}

	@Override
	public List<PositionMapper> getAllPositions() {
		Query query = getEntityManager().createNativeQuery(
				"select p.position_id, p.position_advtno,p.position_eligcriteria,p.position_updatedby, p.position_code, "
						+ "p.position_name, pt.positiontype_name, p.position_regenddate,p.position_regstartdate, p.position_status, "
						+ "p.position_updateddate,u.username,pt.positiontype_id from position p,users u,position_type pt where p.position_updatedBy=u.id and p.position_typeid=pt.positiontype_id order by p.position_id desc");

		List<Object[]> resultList = query.getResultList();
		List<PositionMapper> positionMappers = new ArrayList<PositionMapper>();

		for (Object[] object : resultList) {
			PositionMapper positionMapper = new PositionMapper();
			positionMapper.setId(Long.parseLong(object[0] + ""));
			positionMapper.setAdvtNumber(object[1] + "");
			positionMapper.setEligibilityCriteria(object[2] + "");
			positionMapper.setLastUpdatedBy(Long.parseLong(object[3] + ""));
			positionMapper.setPositionCode(object[4] + "");
			positionMapper.setPositionName(object[5] + "");
			positionMapper.setPositionTypeName(object[6] + "");
			positionMapper.setRegEndDate((Date) object[7]);
			positionMapper.setRegStartDate((Date) object[8]);
			positionMapper.setStatus(object[9] + "");
			positionMapper.setUpdatedDate((Date) object[10]);
			positionMapper.setEmail(object[11] + "");
			positionMapper.setPositionTypeId(Long.parseLong(object[12] + ""));
			positionMappers.add(positionMapper);
		}
		return positionMappers;
	}

	@Override
	@Transactional
	public void deletePosition(Position position) {

		getEntityManager().createNativeQuery("update position set position_status='" + position.getStatus()
				+ "' where position_id=" + position.getId()).executeUpdate();
	}

	@Override
	public List<Position> getActivePositions() {
		return getEntityManager().createNativeQuery(
				"select * from position where  NOW()>=position_regstartdate and NOW()<=position_regenddate and position_status='Active'",
				Position.class).getResultList();
	}

	@Override
	public PositionMapper getPositionById(Long positionId) {
		Query query = getEntityManager().createNativeQuery(
				"select p.position_id, p.position_advtno,p.position_eligcriteria,p.position_updatedby, p.position_code, "
						+ "p.position_name, pt.positiontype_name, p.position_regenddate,p.position_regstartdate, p.position_status, "
						+ "p.position_updateddate,u.username,pt.positiontype_id from position p,users u,position_type pt where p.position_typeid=pt.positiontype_id and p.position_id="
						+ positionId);

		List<Object[]> resultList = query.getResultList();
		PositionMapper positionMapper = new PositionMapper();

		for (Object[] object : resultList) {
			positionMapper.setId(Long.parseLong(object[0] + ""));
			positionMapper.setAdvtNumber(object[1] + "");
			positionMapper.setEligibilityCriteria(object[2] + "");
			positionMapper.setLastUpdatedBy(Long.parseLong(object[3] + ""));
			positionMapper.setPositionCode(object[4] + "");
			positionMapper.setPositionName(object[5] + "");
			positionMapper.setPositionTypeName(object[6] + "");
			positionMapper.setRegEndDate((Date) object[7]);
			positionMapper.setRegStartDate((Date) object[8]);
			positionMapper.setStatus(object[9] + "");
			positionMapper.setUpdatedDate((Date) object[10]);
			positionMapper.setEmail(object[11] + "");
			positionMapper.setPositionTypeId(Long.parseLong(object[12] + ""));
		}
		return positionMapper;

	}

	@Override
	public boolean getApplication(Long positionId, Long userId) {
		Query query = getEntityManager()
				.createNativeQuery("SELECT demographicinfo_id,  aadhar_number, dob, email_id, mobile_number, "
						+ " application_number,user_id,position_code, position_name, "
						+ " position_regenddate FROM demographic_info info,position pos where info.possition_id=pos.position_id and user_id="
						+ userId + " and info.possition_id=" + positionId);
		if (CollectionUtils.isEmpty(query.getResultList())) {
			return false;
		}

		return true;

	}

}
