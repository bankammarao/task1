package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.Fee;
import com.imtac.recruitment.entity.FeeMapper;

public interface FeeDao extends Dao<Fee, Long> {

	int deleteFeeDetailsById(Fee fee);
	
	Fee updateFeeDetailsById(Fee fee);

	List<FeeMapper> getAllFeeDetails();

}
