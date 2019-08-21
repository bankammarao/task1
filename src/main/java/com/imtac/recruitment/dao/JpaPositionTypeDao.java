package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import com.imtac.recruitment.entity.PositionType;
import com.imtac.recruitment.entity.PositionTypeMapper;

public class JpaPositionTypeDao extends JpaDao<PositionType, Long> implements PositionTypedao {

	public JpaPositionTypeDao() {
		super(PositionType.class);
	}

	@Transactional
	@Override
	public int deleteById(PositionType positionType) {
		Query query = getEntityManager().createNativeQuery("update position_type set positiontype_status='"
				+ positionType.getStatus() + "' where positiontype_id=" + positionType.getId());
		return query.executeUpdate();
	}

	@Override
	public List<PositionTypeMapper> getAllPositionTypes() {
		Query query = getEntityManager().createNativeQuery(
				"select pt.positiontype_id,pt.positiontype_updatedby,pt.positiontype_name,pt.positiontype_status,pt.positiontype_updateddate,u.username from position_type pt,users u where pt.positiontype_updatedby=u.id order by pt.positiontype_id desc");

		List<Object[]> resultList = query.getResultList();
		List<PositionTypeMapper> positionTypeMappers = new ArrayList<PositionTypeMapper>();

		for (Object[] object : resultList) {
			PositionTypeMapper positionTypeMapper = new PositionTypeMapper();
			positionTypeMapper.setId(Long.parseLong(object[0] + ""));
			positionTypeMapper.setLastUpdatedBy(Long.parseLong(object[1] + ""));
			positionTypeMapper.setPositionTypeName(object[2] + "");
			positionTypeMapper.setStatus(object[3] + "");
			positionTypeMapper.setUpdatedDate((Date) object[4]);
			positionTypeMapper.setEmail(object[5] + "");
			positionTypeMappers.add(positionTypeMapper);
		}
		return positionTypeMappers;

	}

}
