package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import com.imtac.recruitment.entity.Fee;
import com.imtac.recruitment.entity.FeeMapper;

public class JpaFeeDao extends JpaDao<Fee, Long> implements FeeDao {

	public JpaFeeDao() {
		super(Fee.class);
	}

	@Transactional
	@Override
	public int deleteFeeDetailsById(Fee feeDetails) {

		Query query = getEntityManager().createNativeQuery(
				"update fee set fee_status='" + feeDetails.getFeeStatus() + "' where fee_id=" + feeDetails.getId());
		return query.executeUpdate();

	}

	@Override
	public List<FeeMapper> getAllFeeDetails() {
		Query query = getEntityManager().createNativeQuery(
				"select fd.fee_id,pi.positiontype_name,cat.category_name,fd.position_type_id,fd.category_id,"
				+ " fd.gender,fd.fee,fd.fee_status,fd.feeDetails_updatedBy,"
				+ " fd.feeDetails_updatedDate from fee fd ,position_type pi, "
				+ "  category cat where pi.positiontype_id=fd.position_type_id and cat.category_id = fd.category_id order by fd.fee_id desc");

		@SuppressWarnings("unchecked")
		List<Object[]> resultList = query.getResultList();
		List<FeeMapper> feeMappers = new ArrayList<FeeMapper>();

		for (Object[] object : resultList) {
			FeeMapper feeMapper = new FeeMapper();
			feeMapper.setId(Long.parseLong(object[0] + ""));
			feeMapper.setCatogry(object[1] + "");
			feeMapper.setPositionType(object[2] + "");
			feeMapper.setPositionTypeId(Long.parseLong(object[3] + ""));
			feeMapper.setCategoryId(Long.parseLong(object[4] + ""));
			feeMapper.setGender(object[5] + "");
			feeMapper.setFeeAmount(Long.parseLong(object[6] + ""));
			feeMapper.setFeeStatus(object[7] + "");
			feeMapper.setLastUpdatedBy(Long.parseLong(object[8] + ""));
			feeMapper.setUpdatedDate((Date)object[9]);
			feeMappers.add(feeMapper);
		}

		return feeMappers;

	}

	
	@Transactional
	@Override
	public Fee updateFeeDetailsById(Fee feeDetails) {
		
		return save(feeDetails);
	}
}
